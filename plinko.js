class Plinko{
constructor(x,y,) {
        var options = {
            isStatic: true,
        
         
        }
        this.r=10
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }

display(){
    var p=this.body.position
    var a=this.body.angle
    push()
    translate(p.x,p.y)
   rotate(a)
   imageMode(CENTER)
this.body.radius=10
fill("blue")
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)


}
}