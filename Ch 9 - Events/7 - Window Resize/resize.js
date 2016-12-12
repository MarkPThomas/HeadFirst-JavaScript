/**
 * Created by Mark on 12/12/2016.
 */
window.onresize = resize;

function resize(){
    var element = document.getElementById("display");
    element.innerHTML += " that tickles!";
}