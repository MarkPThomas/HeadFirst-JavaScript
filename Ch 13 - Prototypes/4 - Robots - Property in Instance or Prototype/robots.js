/**
 * Created by Mark on 12/16/2016.
 */
function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker =  "ObjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError =  function() {
    console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function(){
    this.errorMessage = "I appear to have a short circuit!";
};

var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

rosie.reportError();
robby.reportError();
robby.spillWater();

rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("errorMessage")); // True, because 'spillWater' assigns the property to the Robby instance, shadowing the prototype property.
console.log(rosie.hasOwnProperty("errorMessage")); // False, because 'spillWater' is not called, so the prototype property is unaltered.