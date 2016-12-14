/**
 * Created by Mark on 12/13/2016.
 */

// A closure is a function + environment, where the environment is the scope of the enclosing function within which the
//  closed function was defined.

// Closures with passed arguments
function makePassword(password){
    return function guess(passwordGuess){
        return (passwordGuess === password);
    };
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));        // false
console.log("Guessing 'secret': " + tryGuess("secret"));    // true

function multN(n){
    return function multBy(m){
        return n*m;
    };
}

var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));    // 6
console.log("Multiplying 3: " + multBy3(3));    // 9


// Closure with object
function makeCounter(){
    var count = 0;
    return {
        increment: function() {
            count++;
            return count;
        }
    };
}

var counter = makeCounter();
console.log(counter.increment());   // 1
console.log(counter.increment());   // 2
console.log(counter.increment());   // 3

// Closure with function expression passed as an argument
function makeTimer(doneMessage, n){
    setTimeout(function() {
        alert(doneMessage);
    }, n);
}

makeTimer("Cookies are done!", 1000);

// Closure affected by altering the free variable
// Closure with function expression passed as an argument
function setTimer(doneMessage, n){
    setTimeout(function() {
        alert(doneMessage);
    }, n);

    doneMessage = "OUCH!";
}

setTimer("Cookies are done!", 1000);    // "OUCH!"
