
class Floor {
  constructor(x, y, w, h, moving, xLim1, xLim2, movingVelocity) {
    this.x = x;
    this.y = y;
    this.w = w; 
    this.h = h; 
    this.moving = moving; 
    this.xLim1 = xLim1;
    this.xLim2 = xLim2;
    this.movingVelocity = movingVelocity; 
  }

  update() {  
    if(this.moving == true){
      if(this.x + this.movingVelocity <= this.xLim2 && this.x + this.movingVelocity >= this.xLim1){
        this.x += this.movingVelocity;
      }else{
        this.movingVelocity *= -1;
      }
    }else if(this.moving == false){
      
      if(this.y + this.movingVelocity <= this.xLim2 && this.y + this.movingVelocity >= this.xLim1){
        this.y += this.movingVelocity;
      }else{
        this.movingVelocity *= -1;
      }
    }

  }

  draw(color) {
    fill(color);
    noStroke(); 
    rect(this.x, this.y, this.w, this.h);
  }
}
