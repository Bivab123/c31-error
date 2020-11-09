const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;
function setup() {
  createCanvas(800,800);
 engine = Engine.create();
    world = engine.world;
ground=new Ground(width/2,height,width,20)

    for(var k=0;k<=width;k=k+80){
      divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
       }

       
  for(j=40; j<=innerWidth; j=j+50)
  {
plinkos.push(new Plinko(j,75));
  }

  for(var j= 15; j <=width-10; j=j+50)
  {
plinkos.push( new Plinko(j,175));
  }

  for(var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 
for(var i=0;i<plinkos.length;i++){
  plinkos[i].display()
}

  
  if(frameCount%60==0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for(var j=0;j<particles.length;j++){
 //   particles[j].display();
  }

  for(var k=0;k<divisions.length;k++)  {
    divisions[k].display();
  }
  //division.display()
  //  plinkos.display()
   // particles.display()
    ground.display()
    
}



