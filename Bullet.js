
class Bullet {
    constructor(x, y, w, h, xVel, yVel) {
      this.x = x;
      this.y = y;
      this.w = w; 
      this.h = h; 
      this.xVel = xVel; 
      this.yVel = yVel; 
    }
  
    update() {  
        this.x += this.xVel;
        this.y += this.yVel; 
    }
  
    draw() {
      fill("green");
      noStroke(); 
      rect(this.x, this.y, this.w, this.h);
    }
  }
  