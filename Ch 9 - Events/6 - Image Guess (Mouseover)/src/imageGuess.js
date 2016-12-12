/**
 * Created by Mark on 12/12/2016.
 */
window.onload = init;

var imageDirectory = "../images/"

    function init(){
    // var image = document.getElementById("zero");
    // image.onclick = showAnswer;

    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = hideAnswer;
    }
}

function showAnswer(eventObj){
    var image = eventObj.target;
    blur(image);
}

function hideAnswer(eventObj){
    var image = eventObj.target;
    reblur(image);
}

function blur(image){
    var name = imageDirectory + image.id + ".jpg";
    image.src = name;
}

function reblur(image){
    var name = imageDirectory + image.id + "blur.jpg";
    image.src = name;
}