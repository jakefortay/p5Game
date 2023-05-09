
class Gun {
    constructor(x, y, fireRate, bulletW, bulletH, bulletXVel, bulletYVel,) {
      this.x = x;
      this.y = y;
      this.fireRate = fireRate; 
      this.bulletW = bulletW; 
      this.bulletH = bulletH; 
      this.bulletXVel = bulletXVel; 
      this.bulletYVel = bulletYVel; 

      this.isFiring = true; 
      this.lastFired = 0;
      
      this.bullets = []; 
      
    }
  
    updateState() {  
        if(this.isFiring){
            this.isFiring = false; 
        }else{
            this.isFiring = true; 
        }
    }

    fire(){

        let currentTime = millis(); 

        if(currentTime - this.lastFired > this.fireRate){
            this.bullets.push(new Bullet(this.x, this.y, this.bulletW, this.bulletH, this.bulletXVel, this.bulletYVel));
            this.lastFired = currentTime; 
        }

        
    }

    removeBullets(){

        if(this.bullets.length > 0){
            for(let i in this.bullets){
                for(let j in currentLevel.floors){
                    if(collideHelper1(currentLevel.floors[j], this.bullets[i])){
                        this.bullets.splice(i, 1);
                    }else if(this.bullets[i].x > (WIDTH * 1.5) || this.bullets[i].y > (HEIGHT * 1.5)){
                        this.bullets.splice(i, 1);
                    }
    
                }
            }
        }





    }



  }
  