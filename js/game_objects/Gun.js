
class Gun {
    constructor(x, y, fireRate, bulletW, bulletH, bulletXVel, bulletYVel, shotBuffer, piercing, color) {
      this.x = x;
      this.y = y;
      this.fireRate = fireRate; 
      this.bulletW = bulletW; 
      this.bulletH = bulletH; 
      this.bulletXVel = bulletXVel; 
      this.bulletYVel = bulletYVel; 

      this.isFiring = true; 
      this.lastFired = shotBuffer;
      this.color = color;
      
      this.piercing = piercing; 

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
            this.bullets.push(new Bullet(this.x, this.y, this.bulletW, this.bulletH, this.bulletXVel, this.bulletYVel, this.color));
            this.lastFired = currentTime; 
        }

        
    }

    removeBullets(){

        if(this.bullets.length > 0){
            for(let i in this.bullets){
                for(let j in currentLevel.floors){
                    if(collideHelper1(currentLevel.floors[j], this.bullets[i]) && this.piercing == false){
                        this.bullets.splice(i, 1);
                    }else if(this.bullets[i].x > (WIDTH * 3) || this.bullets[i].y > (HEIGHT * 3)){
                        this.bullets.splice(i, 1);
                    }
    
                }
            }
        }
    }

    clear(){
        this.bullets = []; 

    }



  }
  