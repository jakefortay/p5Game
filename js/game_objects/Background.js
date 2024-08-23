class Background {
    constructor(x, y, w, h, c) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.c = c; 
    }
  
    draw() {
      
      if(this.c != null){
        fill(this.c)
      }else{
        fill("black");
      }
       
      noStroke();
      rect(this.x, this.y, this.w, this.h);
    }
  }