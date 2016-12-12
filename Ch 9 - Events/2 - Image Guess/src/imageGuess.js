/**
 * Created by Mark on 12/12/2016.
 */
window.onload = init;

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
    var name = "../images/" + image.id + ".jpg";
    image.src = name;
}

