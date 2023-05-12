
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

    if (DEBUG_MODE) {
        currentLevel = loadLevel(testLevel);
        populateLevelSelector();
    } else {
        currentLevel = loadLevel(levelList[levelIndex]);
    }

    player = new Player();
    lastJumped = millis();
}

function draw() {
    
    background(200);

    if (DEBUG_MODE) {
        text(player.x, 600, 50);
        text(player.y, 600, 75);
    }  

    let levelComplete = false;
    for (let target of currentLevel.targets) {
        if (collideHelper(target)) {
            levelComplete = true;
            break;
        }
    }
    if (levelComplete) {
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
            collideHelper(currentLevel.hazards[i]) 
        ) {
            resetPlayer(); 
        }
    }

    if(abs(player.x) > WIDTH * 2 || abs(player.y) > HEIGHT * 2){
        resetPlayer();
    }

    keyChecker();

    xVelocity *= GROUND_DRAG;
    yVelocity += ACCELERATION;
    yVelocity *= AIR_DRAG;

    player.update(xVelocity, yVelocity);
    player.draw();

    printUI(); 


    noStroke();
    for (let endPoint of currentLevel.targets) {
        endPoint.draw("green");
    }
    stroke(1);


    if(frameCounter == 255){
        frameCounter = 0;
    }

    frameCounter++; 

    if(levelIndex > 0 && levelIndex < levelList.length - 1){
        timer(frameCount);
    }
    
}

function populateLevelSelector() {
    let select = document.getElementById("level-selector");
    select.hidden = false;
    for (let i in levelList) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = `Level ${i.toString().padStart(2, '0')}`;
        select.appendChild(option);
    }
}