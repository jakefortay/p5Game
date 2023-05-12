function resetPlayer(){
    player.x = currentLevel.startPoint.x;
    player.y = currentLevel.startPoint.y;
    xVelocity = 0; 
    yVelocity = 0; 
    deathCounter++;
}