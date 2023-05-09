
function keyChecker() {
    if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) {
        xVelocity -= PLAYER_SPEED;
        if (jumpCounter > 0) {
            if (millis() - lastJumped > JUMP_BUFFER) {
                yVelocity -= JUMP_HEIGHT;
                jumpCounter--;
                lastJumped = millis();
            }
        }
    } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
        xVelocity += PLAYER_SPEED;
        if (jumpCounter > 0) {
            if (millis() - lastJumped > JUMP_BUFFER) {
                yVelocity -= JUMP_HEIGHT;
                jumpCounter--;
                lastJumped = millis();
            }
        }
    } else if (keyIsDown(RIGHT_ARROW)) {
        xVelocity += PLAYER_SPEED;
    } else if (keyIsDown(LEFT_ARROW)) {
        xVelocity -= PLAYER_SPEED;
    } else if (keyIsDown(UP_ARROW) && jumpCounter > 0) {
        if (millis() - lastJumped > JUMP_BUFFER) {
            yVelocity -= JUMP_HEIGHT;
            jumpCounter--;
            lastJumped = millis();
        }
    } else if(keyIsDown(DOWN_ARROW)){
        xVelocity *= 0.85; 
    }
}