
function gunHandler(){

    for(let i in currentLevel.guns){
        currentLevel.guns[i].fire(); 

        if(DEBUG_MODE){
            text(i + ":" + currentLevel.guns[i].bullets.length, 100, (650 + (i * 15)))
        }

        
        for(let j in currentLevel.guns[i].bullets){
            currentLevel.guns[i].bullets[j].draw(); 
            currentLevel.guns[i].bullets[j].update();  
        }
        currentLevel.guns[i].removeBullets();

    }

}