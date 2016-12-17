/**
 * Created by Mark on 12/16/2016.
 */
function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker =  "ObjectsRUs";
Robot.prototype.speak =  function() {
    console.log("I am " + this.name + "!");
};
Robot.prototype.makeCoffee = function(){
    console.log("Making coffee!");
};
Robot.prototype.blinkLights = function(){
    console.log("Lights are blinking... blink... blink...");
}

var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function(){
    console.log("Making coffee... Robby-style!")
};

rosie.cleanHouse = function(){
    console.log("Talk about enforcing gender roles! Rosie is cleaning the house...")
};

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.speak();
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.speak();
rosie.cleanHouse();
rosie.makeCoffee();