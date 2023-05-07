
let hours = 0; 
let minutes = 0; 
let seconds = 0; 

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
    fill(0, 102, 153);
    if(hours < 10){
        text("0" + hours + ":", 675, 95);
    }else{
        text(hours + ":", 675, 95);
    }

    if(minutes < 10){
        text("0" + minutes + ":", 703, 95);
    }else{
        text(minutes + ":", 703, 95);
    }

    
    if(seconds < 10){
        text("0" + seconds, 731, 95);
    }else{
        text(seconds, 731, 95);
    }


}