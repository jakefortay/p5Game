function printUI() {
    textFont("Georgia");

    textSize(16);
    noStroke();
    fill(212, 242, 255);
    text(`Level ${levelIndex + 1}: ${currentLevel.name}`, 40, 14);
    textAlign(RIGHT);
    text("Deaths: " + deathCounter, 760, 14);
    textAlign(LEFT);

    if (levelIndex == levelList.length - 1) {
        text("Fewest Deaths: " + lowestDeaths, 50, 50);

        text("Best Time: ", 50, 75);

        if (bestHours < 10) {
            text("0" + bestHours + ":", 140, 75);
        } else {
            text(bestHours + ":", 140, 75);
        }
        if (bestMinutes < 10) {
            text("0" + bestMinutes + ":", 168, 75);
        } else {
            text(bestMinutes + ":", 168, 75);
        }

        if (bestSeconds < 10) {
            text("0" + bestSeconds, 196, 75);
        } else {
            text(bestSeconds, 196, 75);
        }
    }
}
