
function collideCheck(floor) {
    onGround = false;

    let leftPlayerEdge = player.x > floor.x && player.x < floor.x + floor.w;
    let rightPlayerEdge =
        player.x + player.size > floor.x &&
        player.x + player.size < floor.x + floor.w;
    let bottomPlayerEdge =
        player.y + player.size > floor.y &&
        player.y + player.size < floor.y + floor.h;
    let topPlayerEdge = player.y > floor.y && player.y < floor.y + floor.h;

    if (
        bottomPlayerEdge &&
        topPlayerEdge &&
        (rightPlayerEdge || leftPlayerEdge)
    ) {
        xVelocity = 0;
        if (rightPlayerEdge) {
            player.x = floor.x - player.size;
        } else if (leftPlayerEdge) {
            player.x = floor.x + floor.w;
        }
    } else if (
        bottomPlayerEdge &&
        (leftPlayerEdge || rightPlayerEdge) &&
        !topPlayerEdge
    ) {
        player.y = floor.y - player.size;
        yVelocity = 0;
        jumpCounter = 2;
    } else if (topPlayerEdge && (leftPlayerEdge || rightPlayerEdge)) {
        yVelocity *= -1;
    }

    if (abs(xVelocity) > X_SPEED_CAP) {
        if (xVelocity < 0) {
            xVelocity = -X_SPEED_CAP;
        } else {
            xVelocity = X_SPEED_CAP;
        }
    }

    if (abs(yVelocity) > Y_SPEED_CAP) {
        if (yVelocity < 0) {
            yVelocity = -Y_SPEED_CAP;
        } else {
            yVelocity = Y_SPEED_CAP;
        }
    }
}

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

function collideHelper1(colObject1, colObject2){

    let obj1x = colObject1.x; 
    let obj1y = colObject1.y; 
    let obj1w = colObject1.w; 
    let obj1h = colObject1.h; 

    let obj2x = colObject2.x; 
    let obj2y = colObject2.y; 
    let obj2w = colObject2.w; 
    let obj2h = colObject2.h; 



    let leftEdge = obj2x > obj1x && obj2x < obj1x + obj1w; 
    let rightEdge = obj2x + obj2w > obj1x && obj2x + obj2w < obj1x + obj1w;  
    let topEdge = obj2y > obj1y && obj2y < obj1y + obj1h; 
    let bottomEdge = obj2y + obj2h > obj1y && obj2y + obj2h < obj1y + obj1h; 

    if((topEdge && rightEdge) || (bottomEdge && rightEdge) || (leftEdge && bottomEdge) || (topEdge && leftEdge)){
        return true; 
    }else{
        return false; 
    }



}