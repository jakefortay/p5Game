
let bestHours = 0;
let bestMinutes = 0;
let bestSeconds = 0; 

let bestTime = 1000000; 
let lowestDeaths = 1000000;

function levelSwitcher() {
    levelIndex = levelIndex >= levelList.length - 1 ? 0 : levelIndex + 1; 

    currentLevel = loadLevel(levelList[levelIndex]);

    if (currentLevel.altSize != null) {
        resizeCanvas(currentLevel.altSize.width, currentLevel.altSize.height);
    } else {
        resizeCanvas(HEIGHT, WIDTH);
    }

    player.x = currentLevel.startPoint.x;
    player.y = currentLevel.startPoint.y; 
    xVelocity = 0; 
    yVelocity = 0; 
    if (levelIndex >= levelList.length - 1) {
        if(deathCounter < lowestDeaths){
            lowestDeaths = deathCounter; 
        }
        
        deathCounter = 0; 

        let tempMinutes = minutes + (hours * 60);
        let tempSeconds = seconds + (minutes * 60);

        if(tempSeconds < bestTime){
            bestHours = hours;
            bestMinutes = minutes; 
            bestSeconds = seconds; 
            bestTime = tempSeconds; 
        }

        seconds = 0; 
        minutes = 0; 
        hours = 0; 
    }

    if(levelIndex > 0){
        if(levelList[levelIndex - 1].guns != null){
            for(let i in levelList[levelIndex - 1].guns){
                levelList[levelIndex - 1].guns[i].clear(); 
            }
        }
    }
}

function loadLevel(levelData) {
    let staticFloors = levelData.floors.static.map(f => new Floor(f.x, f.y, f.w, f.h, f.c));
    let movingFloors = levelData.floors.moving.map(f => new MovingFloor(f.x, f.y, f.w, f.h, f.dir, f.l1, f.l2, f.spd, f.c));
    let staticHazards = levelData.hazards.static.map(f => new Floor(f.x, f.y, f.w, f.h, f.c));
    let movingHazards = levelData.hazards.moving.map(f => new MovingFloor(f.x, f.y, f.w, f.h, f.dir, f.l1, f.l2, f.spd, f.c));
    let guns = levelData.hazards.guns.map(g => new Gun(g.x, g.y, g.rate, g.bltW, g.bltH, g.bltVx, g.bltVy, g.buffer, g.pierce, g.color));
    let targets = levelData.targets.map(f => new Floor(f.x, f.y, f.w, f.h, f.c));
    
    return new Level(
        levelData.name,
        levelData.altSize,
        levelData.playerStart,
        targets,
        staticFloors.concat(movingFloors),
        staticHazards.concat(movingHazards),
        guns
    );
}

function levelSelect(levelNumber) {
    if (!DEBUG_MODE) {
        return;
    }
    levelIndex = levelNumber-1;
    levelSwitcher();
}
