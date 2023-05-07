
function collideHelper(){
    let endX = currentLevel.endPoint.x; 
    let endY = currentLevel.endPoint.y; 
    let endSize = currentLevel.endPoint.w; 

    let leftEdge = player.x > endX && player.x < endX + endSize; 
    let rightEdge = player.x + player.size > endX && player.x + player.size < endX + endSize; 
    let topEdge = player.y > endY && player.y < endY + endSize; 
    let bottomEdge = player.y + player.size > endY && player.y + player.size < endY + endSize; 

    if((topEdge && rightEdge) || (bottomEdge && rightEdge) || (leftEdge && bottomEdge) || (topEdge && leftEdge)){
        return true; 
    }else{
        return false; 
    }



}

function levelSwitcher(){
    
    if(collideHelper()){
        levelIndex = levelIndex >= levelList.length - 1 ? 0 : levelIndex + 1; 
        currentLevel = levelList[levelIndex];
        player.x = levelList[levelIndex].startX;
        player.y = levelList[levelIndex].startY; 
        xVelocity = 0; 
        yVelocity = 0; 
    }
}

