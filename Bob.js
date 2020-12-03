class Bob{
    constructor(x,y,r){
        var options = {
            'isStatic' : false,
            'restitution' : 1,
            'friction' : 0,
            'density': 1.5,
            'inertia' : Infinity,
            'frictionAir' : 0
        }

        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        fill("blue")
        ellipse(0,0,this.r *2,this.r *2)
        pop();
    }
}