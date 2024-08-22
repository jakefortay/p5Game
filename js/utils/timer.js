
let hours = 0; 
let minutes = 0; 
let seconds = 0; 

let timeString; 

function timer(frames){

    if(frames % 60 == 0){
        seconds++;
    }

    if(seconds > 60){
        minutes++
        seconds = 0; 
    }

    if(minutes > 60){
        hours++; 
        minutes = 0; 
    }

    textFont("Georgia");
    textSize(18);
    fill("white");
    
    timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    text(timeString, 600, 14);

}