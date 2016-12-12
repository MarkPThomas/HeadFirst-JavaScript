/**
 * Created by Mark on 12/12/2016.
 */
window.onload = init;

function init(){
    var map = document.getElementById("map");
    map.onmousemove = showCoordinates;
}

function showCoordinates(eventObj){
    var coords = document.getElementById("coords");
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    coords.innerHTML = "Map coordinates: " + x + ", " + y;
}
