/**
 * Created by Mark on 12/17/2016.
 */
var dj = {
    playsound: function(){
        console.log("Playing ", this.sound);
    },
    sound: "bells"
};

var controller = {
    timer: null,
    start: function(){
        this.timer = setInterval(dj.playsound.bind(dj), 1000);
    },
    stop: function(){
        if(this.timer !== null)
        {
            clearInterval(this.timer);
        }
    }
};

window.onload = function () {
    var startButton = document.getElementById("start");
    // This will fail because 'this' in the function will reference the start button
    // startButton.onclick = controller.start;
    startButton.onclick = function(){
        controller.start();
    };

    var stopButton = document.getElementById("stop");
    // This will fail because 'this' in the function will reference the stop button
    // stopButton.onclick = controller.stop;
    stopButton.onclick = function(){
        controller.stop();
    };
};