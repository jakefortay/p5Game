// http://www.jeffreythompson.org/collision-detection/

let player;

let xVelocity = 0;
let yVelocity = 5;

let jumpCounter = 2; 

let onGround;
let onThisGround;

let color1;
let color2;
let color3;
let color4;

const playerSpeed = 2;
const jumpHeight = 25;

const jumpBuffer = 200; 

let lastJumped;

let currentLevel;  
let levelIndex = 0; 


function setup() {
  createCanvas(HEIGHT, WIDTH);

  player = new Player();

  currentLevel = levelList[levelIndex];
  
  lastJumped = millis();
  
}

function keyChecker() {
  if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) {
    xVelocity -= playerSpeed;
    if (jumpCounter > 0) {
      if(millis() - lastJumped > jumpBuffer){
        yVelocity -= jumpHeight;
        jumpCounter--;
        lastJumped = millis(); 
      }
          }
  } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
    xVelocity += playerSpeed;
    if (jumpCounter > 0) {
      if(millis() - lastJumped > jumpBuffer){
        yVelocity -= jumpHeight;
        jumpCounter--;
        lastJumped = millis(); 
      }
    }
  } else if (keyIsDown(RIGHT_ARROW)) {
    xVelocity += playerSpeed;
  } else if (keyIsDown(LEFT_ARROW)) {
    xVelocity -= playerSpeed;
  } else if (keyIsDown(UP_ARROW) && jumpCounter > 0) {
      if(millis() - lastJumped > jumpBuffer){
        yVelocity -= jumpHeight;
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
    if(rightPlayerEdge){
      player.x = floor.x - player.size;
    }
    else if(leftPlayerEdge){
      player.x = floor.x + player.size;
    }
    
  } else if (bottomPlayerEdge && (leftPlayerEdge || rightPlayerEdge)) {
    player.y = floor.y - player.size;
    yVelocity = 0;
    jumpCounter = 2; 
  } else if (topPlayerEdge && (leftPlayerEdge || rightPlayerEdge)) {
    yVelocity *= -1;
  }

  if(abs(xVelocity) > X_SPEED_CAP){
    if(xVelocity < 0){
      xVelocity = -X_SPEED_CAP;
    }else{
      xVelocity = X_SPEED_CAP; 
    }
  }
  
  
  if(abs(yVelocity) > Y_SPEED_CAP){
    if(yVelocity < 0){
      yVelocity = -Y_SPEED_CAP;
    }else{
      yVelocity = Y_SPEED_CAP; 
    }
  }
  
}

function draw() {
  background(220);

  color1 = "cyan";
  color2 = "cyan";
  color3 = "cyan";
  color4 = "cyan";

  onGround = false;


  if(player.x > 700){
    levelIndex = levelIndex >= levelList.length - 1 ? 0 : levelIndex + 1; 
    console.log(levelIndex);
    currentLevel = levelList[levelIndex];
    player.x = levelList[levelIndex].startX;
    player.y = levelList[levelIndex].startY; 
  }

  for (let i in currentLevel.floors) {
    collideCheck(currentLevel.floors[i]);

    if (currentLevel.floors[i].moving == true) {
      currentLevel.floors[i].update();
    }

    currentLevel.floors[i].draw();
  }

  keyChecker();

  xVelocity *= GROUND_DRAG;
  yVelocity += ACCELERATION;
  yVelocity *= AIR_DRAG;

  player.update(xVelocity, yVelocity);
  player.draw(color1, color2, color3, color4);
  

}
