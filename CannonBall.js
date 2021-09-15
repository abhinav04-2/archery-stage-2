class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution 
     
    };
//add circle to the body
this.body=Bodies.circle(x,y,40,options)
//loadImage
this.image=loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  //add shoot function 
shoot(){
  
  Matter.Body.setStatic(this.body, false);
  var velocity = p5.Vector.fromAngle(cannon.angle);
  velocity.mult(20);
  Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
}
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//call the image function
image(this.image, 0, 0, 40, 40);
    pop();

    }
  }

