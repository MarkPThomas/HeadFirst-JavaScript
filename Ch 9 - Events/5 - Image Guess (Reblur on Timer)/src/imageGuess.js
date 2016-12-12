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
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj){
    // var image = document.getElementById("zero");
    var image = eventObj.target;
    // image.src = "../images/zero.jpg";
    var name = imageDirectory + image.id + ".jpg";
    image.src = name;

    setTimeout(reblur, 2000, image);
}

function reblur(image){
    var name = imageDirectory + image.id + "blur.jpg";
    image.src = name;
}