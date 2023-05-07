
class Floor {
  constructor(x, y, w, h, moving, xLim1, xLim2, xVelocity) {
    this.x = x;
    this.y = y;
    this.w = w; 
    this.h = h; 
    this.moving = moving; 
    this.xLim1 = xLim1;
    this.xLim2 = xLim2;
    this.xVelocity = xVelocity; 
  }

  update() {  
  
    if(this.x + this.xVelocity <= this.xLim2 && this.x + this.xVelocity >= this.xLim1){
      this.x += this.xVelocity;
    }else{
      this.xVelocity *= -1;
    }
  }

  draw(color) {
    fill(color);
    noStroke(); 
    rect(this.x, this.y, this.w, this.h);
  }
}
