/**
 * Created by Mark on 12/16/2016.
 */
function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function(){
    if(this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else{
        console.log(this.name + " says Yip!");
    }
} ;
Dog.prototype.run = function(){
    console.log("Run!");
};
Dog.prototype.wag = function(){
    console.log("Wag!");
};

function ShowDog(name, breed, weight, handler){
    // // The first three properties are similar to passing the properties on to the base class constructor
    // this.name = name;
    // this.breed = breed;
    // this.weight = weight;
    Dog.call(this, name, breed, weight);

    this.handler = handler;
}
ShowDog.prototype = new Dog();  // This is similar to inheriting from Dog
ShowDog.prototype.constructor = ShowDog; // Code functions without this, but is best practice for 'constructor' property to return correctly.
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function(){
    console.log("Stack");
};
ShowDog.prototype.bait = function(){
    console.log("Bait");
};
ShowDog.prototype.gait = function(kind){
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function(){
    console.log("Groom");
};


function printDog(name){
    console.log(name + " is a Dog");
}

function printShowDog(name){
    console.log(name + " is a ShowDog");
}


var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();

console.log(scotty.league);
console.log(scotty.species);

var fido = new Dog("Fido", "Mixed", 38);

if(fido instanceof Dog){
    printDog(fido.name); // True
}
if(fido instanceof ShowDog){
    printShowDog(fido.name); // False
}

if(scotty instanceof Dog){
    printDog(scotty.name); // True
}
if(scotty instanceof ShowDog){
    printShowDog(scotty.name); // False
}

console.log("Fido constructor is " + fido.constructor); // Dog...
console.log("Scotty constructor is " + scotty.constructor); // ShowDog...

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();
