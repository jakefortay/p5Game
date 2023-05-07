
function collideHelper(colObject){



    let endX = colObject.x; 
    let endY = colObject.y; 
    let endW = colObject.w; 
    let endH = colObject.h; 

    let leftEdge = player.x > endX && player.x < endX + endW; 
    let rightEdge = player.x + player.size > endX && player.x + player.size < endX + endW; 
    let topEdge = player.y > endY && player.y < endY + endH; 
    let bottomEdge = player.y + player.size > endY && player.y + player.size < endY + endH; 

    if((topEdge && rightEdge) || (bottomEdge && rightEdge) || (leftEdge && bottomEdge) || (topEdge && leftEdge)){
        return true; 
    }else{
        return false; 
    }



}

function levelSwitcher(){
    
    if(collideHelper(currentLevel.endPoint)){
        levelIndex = levelIndex >= levelList.length - 1 ? 0 : levelIndex + 1; 
        currentLevel = levelList[levelIndex];
        player.x = levelList[levelIndex].startX;
        player.y = levelList[levelIndex].startY; 
        xVelocity = 0; 
        yVelocity = 0; 
    }
}

