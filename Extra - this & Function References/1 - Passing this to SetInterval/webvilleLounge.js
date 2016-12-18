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
    start: function(){
        // This fails, because only the function is stored in setInterval, so the 'this' in the function ends up
        // pointing to 'window' rather than 'dj'!
        //setInterval(dj.playsound, 1000);

        // This works because playsound is called in association with the 'dj' object
        //setInterval(function(){dj.playsound()}, 1000);

        // To call right away
        //dj.playsound.call(dj) // if it had arguments, would be like this: dj.playsound.call(dj, [arguments])
        // To save for calling later
        //dj.playsound.bind(dj)

        // Another way is to bind "this" to the object.
        setInterval(dj.playsound.bind(dj), 1000);
    }
};

window.onload = function () {
    controller.start();
};