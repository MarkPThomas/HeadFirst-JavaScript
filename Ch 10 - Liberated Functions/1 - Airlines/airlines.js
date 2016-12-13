/**
 * Created by Mark on 12/12/2016.
 */
    // This example demonstrates the three criteria by which functions in JavaScript are first class values.
    // First criteria of a 'first class' value: Assigning functions to variables.
    // Second criteria of a 'first class' value: Passing function as value to another function.
    // Third criteria of a 'first class' value: Returning a function as a value from another function.
    // Final criteria of a 'first class', not illustrated here, is that they can be stored in a data structure.

var passengers = [  {name: "Jane Doloop", paid: true, ticket: "coach" },
                    {name: "Dr. Evel", paid: true, ticket: "firstclass" },
                    {name: "Sue Property", paid: false, ticket: "premiumeconomy" },
                    {name: "John Funcall", paid: true, ticket: "coach" }];

function processPassengers(passengers, testFunction){
    for (var i = 0; i < passengers.length; i++) {
        if(testFunction(passengers[i])){
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger){
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger){
    return (!passenger.paid);
}

function printPassenger(passenger){
    var message = passenger.name + " has ";
    if(passenger.paid){
        message += "paid";
    } else {
        message += "not paid";
    }
    console.log(message);
    return false;
}

function servePassengers(passengers){
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

function serveCustomer(passenger){
    // (A) Original implementation: Takes more resources if this function is repeatedly called...
    // createDrinkOrder(passenger);
    // // get dinner order
    // createDrinkOrder(passenger);
    // createDrinkOrder(passenger);
    // // show movie
    // createDrinkOrder(passenger);
    // // pick up trash

    // (B) New implementation where a function is returned as a value:
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = getDinnerOrder(passenger);

    getDrinkOrderFunction();
    getDinnerOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash
}

// (1) This is a function declaration.
function createDrinkOrder(passenger){
    // (A) Original implementation: Takes more resources if this function is repeatedly called...
    // if(passenger.ticket === "firstclass"){
    //     alert("Would you like a cocktail or wine?");
    // } else {
    //     alert("Your choice is cola or water.")
    // }

    // (B) New implementation where a function is returned as a value:
    var orderFunction;

    if(passenger.ticket === "firstclass"){
        // (2) This is a function expression
        orderFunction = function() {
            alert(passenger.name + ": Would you like a cocktail or wine?");
        }
    } else {
        orderFunction = function() {
            alert(passenger.name + ": Your choice is cola or water.")
        }
    }
    return orderFunction;
}

function getDinnerOrder(passenger){
    var orderFunction;

    if(passenger.ticket === "firstclass"){
        orderFunction = function(){
            alert(passenger.name + ": Would you like chicken or pasta?");
        }
    } else if(passenger.ticket === "premiumeconomy"){
        orderFunction = function(){
            alert(passenger.name + ": Would you like a snack box or cheese plate?");
        }
    } else {
        orderFunction = function(){
            alert(passenger.name + ": Would you like peanuts or pretzels?");
        }
    }
    return orderFunction;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly){
    console.log("The plane can't take off: we have a passenger on the no-fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid){
    console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);

servePassengers(passengers);