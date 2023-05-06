

class Player {
  constructor() {
    this.x = 50;
    this.y = 700;
    this.size = 20;
  }

  update(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
  }

  draw(color1, color2, color3, color4) {
    fill(color1);
    square(this.x, this.y, this.size / 2);
    
    fill(color2);
    square(this.x + this.size / 2, this.y, this.size / 2);
    
    fill(color3);
    square(this.x, this.y + this.size / 2, this.size / 2);
    
    fill(color4);
    square(this.x + this.size / 2, this.y + this.size / 2, this.size / 2);
  }
}
