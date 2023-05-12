
class Player {
  constructor() {
    this.x = currentLevel.startPoint.x;
    this.y = currentLevel.startPoint.y;
    this.size = 20;
  }

  update(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
  }

  draw() {
    fill("tan");
    square(this.x, this.y, this.size);

    if(frameCounter < 240){
      fill("white");
    }else{
      fill("black");
    }
    
    square(this.x + 2.5, this.y + 2.5, 5);
    square(this.x + 12.5, this.y + 2.5, 5);


    fill("white");
    rect(this.x + 5, this.y + 12.5, 10, 2);
  }
}
