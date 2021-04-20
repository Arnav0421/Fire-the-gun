class Car {
    constructor(x,y){
      super(x,y,50,50);
      car=createSprite(50,200,50,50);
        }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      car.velocity = speed;
    }
  }