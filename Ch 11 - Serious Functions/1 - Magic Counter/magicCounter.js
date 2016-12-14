/**
 * Created by Mark on 12/13/2016.
 */
function makeCounter(){
    var count = 0;

    function counter(){
        count += 1;
        return count;
    }
    return counter;
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());


