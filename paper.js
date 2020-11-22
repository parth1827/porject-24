class Paper{
    constructor(x,y){
        var options = {
            'restitution' :0.3,
            'isStatic' : false,
            'friction' : 0.5,
            'density' : 1.2,
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;

        World.add(World,this.body)

        
    }
   display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,this.radius);
        pop();
    }
}