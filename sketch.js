// http://www.jeffreythompson.org/collision-detection/

let player;

let xVelocity = 0;
let yVelocity = 5;

const xSpeedCap = 10;
const ySpeedCap = 35; 

let jumpCounter = 2; 

let airDrag = 0.95;
let groundDrag = 0.98;
let acceleration = 0.6;

let floors = [];

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

function setup() {
  createCanvas(800, 800);

  player = new Player();

  floors.push(new Floor(0, 0, 20, height)); // Left Wall
  floors.push(new Floor(20, 0, width - 40, 20)); // Ceiling
  floors.push(new Floor(width - 20, 0, 20, height)); // Right Wall
  floors.push(new Floor(20, height - 20, width - 40, 20)); // Floor
  
  floors.push(new Floor(0, 750, 200, 20));
  
  floors.push(new Floor(500, 450, 400, 20));
  
  floors.push(new Floor(200, 550, 400, 20));
  
  floors.push(new Floor(0, 150, 300, 20));
  
  
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

  
  
  
  
  if(abs(xVelocity) > xSpeedCap){
    if(xVelocity < 0){
      xVelocity = -xSpeedCap;
    }else{
      xVelocity = xSpeedCap; 
    }
  }
  
  
  if(abs(yVelocity) > ySpeedCap){
    if(yVelocity < 0){
      yVelocity = -ySpeedCap;
    }else{
      yVelocity = ySpeedCap; 
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

  for (let i in floors) {
    collideCheck(floors[i]);

    if (floors[i].moving == true) {
      floors[i].update();
    }

    floors[i].draw();
  }

  keyChecker();

  xVelocity *= groundDrag;
  yVelocity += acceleration;
  yVelocity *= airDrag;

  player.update(xVelocity, yVelocity);
  player.draw(color1, color2, color3, color4);
  

}
