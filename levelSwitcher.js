
let bestHours = 0;
let bestMinutes = 0;
let bestSeconds = 0; 

let bestTime = 1000000; 
let lowestDeaths = 1000000;

function levelSwitcher(){
    
    if(collideHelper(currentLevel.endPoint)){
        levelIndex = levelIndex >= levelList.length - 1 ? 0 : levelIndex + 1; 
        currentLevel = levelList[levelIndex];
        player.x = levelList[levelIndex].startX;
        player.y = levelList[levelIndex].startY; 
        xVelocity = 0; 
        yVelocity = 0; 
        if(levelIndex == levelList.length - 1){
            
            if(deathCounter < lowestDeaths){
                lowestDeaths = deathCounter; 
            }
            
            deathCounter = 0; 

            let tempMinutes = minutes + (hours * 60);
            let tempSeconds = seconds + (minutes * 60);

            if(tempSeconds < bestTime){
                bestHours = hours;
                bestMinutes = minutes; 
                bestSeconds = seconds; 
                bestTime = tempSeconds; 
            }

            seconds = 0; 
            minutes = 0; 
            hours = 0; 


        }



    }
}

