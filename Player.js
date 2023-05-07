

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
    fill("red");
    square(this.x, this.y, this.size);
  }
}
