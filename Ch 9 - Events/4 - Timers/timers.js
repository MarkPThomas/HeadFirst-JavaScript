/**
 * Created by Mark on 12/12/2016.
 */
function timerHandler(){
    alert("Hey, what are you doing just sitting there staring at a blank screen?");
    clearInterval(t);
}

var tick = true;
function ticker(){
    if(tick){
        console.log("Tick");
        tick = false;
    } else {
        console.log("Tock");
        tick = true;
    }
}

setTimeout(timerHandler, 5000);var tick = true;
function ticker(){
    if(tick){
        console.log("Tick");
        tick = false;
    } else {
        console.log("Tock");
        tick = true;
    }
}