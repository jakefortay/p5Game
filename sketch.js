
let xVelocity = 0;
let yVelocity = 5;

let jumpCounter = 2;
let lastJumped;
let onGround;

let currentLevel;
let levelIndex = 0;

let player;
let deathCounter = 0;
let frameCounter = 0; 

let sprite1;

function setup() {
    
    sprite1 = loadImage('Batman1.png');
    createCanvas(HEIGHT, WIDTH);

    if(DEBUG_MODE){
        currentLevel = testLevel;
    }else{
        currentLevel = levelList[levelIndex];
    }

    player = new Player();
    lastJumped = millis();
}



function draw() {
    
    background(200);

    if (DEBUG_MODE) {
        text(player.x, 600, 50);
        text(player.y, 600, 75);
    }else{
        levelSwitcher();
    }

    gunHandler(); 

    onGround = false;

    for (let i in currentLevel.floors) {
        collideCheck(currentLevel.floors[i]);

        if (currentLevel.floors[i] instanceof MovingFloor) {
            currentLevel.floors[i].update();
        }

        currentLevel.floors[i].draw("black");
    }

    for (let i in currentLevel.hazards) {
        
        if (currentLevel.hazards[i] instanceof MovingFloor) {
            currentLevel.hazards[i].update();
        }
        currentLevel.hazards[i].draw("red");

        if (
            collideHelper(currentLevel.hazards[i]) ||
            abs(player.x) > WIDTH * 2 ||
            abs(player.y) > HEIGHT * 2
        ) {
            resetPlayer(); 
        }
    }

    keyChecker();

    xVelocity *= GROUND_DRAG;
    yVelocity += ACCELERATION;
    yVelocity *= AIR_DRAG;

    player.update(xVelocity, yVelocity);
    player.draw();

    printUI(); 


    noStroke();
    currentLevel.endPoint.draw("green");
    stroke(1);


    if(frameCounter == 255){
        frameCounter = 0;
    }

    frameCounter++; 

    if(levelIndex > 0 && levelIndex < levelList.length - 1){
        timer(frameCount);
    }
    
}
