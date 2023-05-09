function resetPlayer(){
    player.x = currentLevel.startX;
    player.y = currentLevel.startY;
    xVelocity = 0; 
    yVelocity = 0; 
    deathCounter++;
}