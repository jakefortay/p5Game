

class Player {
  constructor() {
    this.x = currentLevel.startX;
    this.y = currentLevel.startY;
    this.size = 20;
  }

  update(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
  }

  draw(color1, color2, color3, color4) {
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
