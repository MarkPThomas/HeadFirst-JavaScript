/**
 * Created by Mark on 12/9/2016.
 */
function printAndGetHighScores(scores)
{
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if(scores[i] > highScore)
        {
            highScore = scores[i];
        }
    }

    return highScore;
}

function getBestResults(scores, highScore)
{
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if(scores[i] == highScore)
        {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

function getMostEffectiveSolution(scores, costs, highScore)
{
    var cost = 100;
    var index;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore &&
            cost > costs[i])
        {
            index = i;
            cost = costs[i];
        }
    }
    return index;
}

var scores =   [60, 50, 60, 58, 54, 54,
                58,50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44];

var costs =    [0.25, 0.27, 0.25, 0.25, 0.25, 0.25,
                0.33, 0.31, 0.25, 0.29, 0.27, 0.22,
                0.31, 0.25, 0.25, 0.33, 0.21, 0.25,
                0.25, 0.25, 0.28, 0.25, 0.24, 0.22,
                0.20, 0.25, 0.30, 0.25, 0.24, 0.25,
                0.25, 0.25, 0.27, 0.25, 0.26, 0.29];

var highScore = printAndGetHighScores(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

var mostCostEffective = getMostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective.");