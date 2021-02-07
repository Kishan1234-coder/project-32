class Slingshot {
    constructor(body1,point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.03,
            length: 10
        }
        
        this.sling = Constraint.create(options);

        this.slingimg1 = loadImage("sprites/sling1.png");
        this.slingimg2 = loadImage("sprites/sling2.png");
        this.slingimg3 = loadImage("sprites/sling3.png");

        World.add(world,this.sling);
        
        
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(bodyA){
        this.sling.bodyA = bodyA;
    }

    
    display(){

        image(this.slingimg1,200,20);
        image(this.slingimg2,170,20);

        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        
        push();
        stroke(48,22,8);

        if(pointA.x < 220) {
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.slingimg3,pointA.x -30, pointA.y -10,15,30);
        }
        else{
            strokeWeight(3);
            line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.slingimg3,pointA.x + 25, pointA.y -10,15,30);
        }     

        pop();

        }
    }   
}



