/**
 * Created by Mark on 12/11/2016.
 */

function runTests(testSetNum)
{
    switch (testSetNum){
        case 1:
            displayTests();
            break;
        case 2:
            modelTests();
            break;
        case 3:
            finalModelTests();
            break;
        default:
            break;
    }
}

function displayTests(){
    view.displayMiss("00");
    view.displayHit("34");
    view.displayMiss("55");
    view.displayHit("12");
    view.displayMiss("25");
    view.displayHit("26");

    view.displayMessage("Tap tap, is this thing on?");
}

function modelTests(){
    model.fire("53");

    model.fire("06");
    model.fire("16");
    model.fire("26");

    model.fire("34");
    model.fire("24");
    model.fire("44");

    model.fire("12");
    model.fire("11");
    model.fire("10");

    console.log(parseGuess("A0"));
    console.log(parseGuess("B6"));
    console.log(parseGuess("G3"));
    console.log(parseGuess("H0"));
    console.log(parseGuess("A7"));
}

function finalModelTests(){
    controller.processGuess("A0");

    controller.processGuess("A6");
    controller.processGuess("B6");
    controller.processGuess("C6");

    controller.processGuess("C4");
    controller.processGuess("D4");
    controller.processGuess("E4");

    controller.processGuess("B0");
    controller.processGuess("B1");
    controller.processGuess("B2");
}
