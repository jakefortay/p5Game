// http://www.jeffreythompson.org/collision-detection/

let xVelocity = 0;
let yVelocity = 5;

let jumpCounter = 2;

let onGround;
let onThisGround;

let color1;
let color2;
let color3;
let color4;

let lastJumped;

let currentLevel;
let levelIndex = 5;

let deathCounter = 0;

let player;

let frameCounter = 0; 

function setup() {
    createCanvas(HEIGHT, WIDTH);

    currentLevel = levelList[levelIndex];

    player = new Player();
    lastJumped = millis();
}

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
    }
}

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

function draw() {
    background(200);

    color1 = "cyan";
    color2 = "cyan";
    color3 = "cyan";
    color4 = "cyan";

    onGround = false;

    levelSwitcher();

    for (let i in currentLevel.floors) {
        collideCheck(currentLevel.floors[i]);

        currentLevel.floors[i].update();

        currentLevel.floors[i].draw("black");
    }

    for (let i in currentLevel.hazards) {
        

        currentLevel.hazards[i].update();

        currentLevel.hazards[i].draw("red");

        if (
            collideHelper(currentLevel.hazards[i]) ||
            abs(player.x) > 2000 ||
            abs(player.y) > 2000
        ) {
            player.x = currentLevel.startX;
            player.y = currentLevel.startY;
            xVelocity = 0; 
            yVelocity = 0; 
            deathCounter++;
        }
    }

    noStroke();
    currentLevel.endPoint.draw("green");
    stroke(1);

    keyChecker();

    xVelocity *= GROUND_DRAG;
    yVelocity += ACCELERATION;
    yVelocity *= AIR_DRAG;

    player.update(xVelocity, yVelocity);
    player.draw(color1, color2, color3, color4);

    textFont("Georgia");

    textSize(16);
    noStroke();
    fill(212, 242, 255);
    textAlign(LEFT);
    text(`Level ${levelIndex+1}: ${currentLevel.name}`, 40, 14);
    textAlign(RIGHT);
    text("Deaths: " + deathCounter, 760, 14);
    if(levelIndex == levelList.length - 1){
        text("Fewest Deaths: " + lowestDeaths, 50, 50);

        text("Best Time: ", 50, 75);

        if(bestHours < 10){
            text("0" + bestHours + ":", 140, 75)
        }else{
            text(bestHours + ":", 140, 75)
        }

        if(bestMinutes < 10){
            text("0" + bestMinutes + ":", 168, 75)
        }else{
            text(bestMinutes + ":", 168, 75)
        }

        if(bestSeconds < 10){
            text("0" + bestSeconds, 196, 75)
        }else{
            text(bestSeconds, 196, 75)
        }


    }



    if (DEBUG_MODE) {
        text(player.x, 600, 50);
        text(player.y, 600, 75);
    }

    if(frameCounter == 255){
        frameCounter = 0;
    }

    frameCounter++; 

    if(levelIndex < levelList.length - 1){
        timer(frameCount);
    }
    
}
