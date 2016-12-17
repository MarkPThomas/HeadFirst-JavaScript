/**
 * Created by Mark on 12/16/2016.
 */
function Game(){
    this.level = 0;
}

Game.prototype.play = function(){
    // player plays game here
    this.level++;
    console.log("Welcome to level " + this.level);
    this.unlock();
};

// Add a function in one prototype from another prototype later on in run time
Game.prototype.unlock = function(){
    if(this.level === 42){
        Robot.prototype.deployLaser = function(){
            console.log(this.name + " is blasting you with L.A.S.E.R. beams.");
        };
    }
};

function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}

var game = new Game();
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

while(game.level < 42){
    game.play();
}

robby.deployLaser();
rosie.deployLaser();