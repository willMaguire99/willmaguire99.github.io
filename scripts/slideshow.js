var i = 0;
var images = [];
var links = [];
var time = 5000;

images[0] = "images/theColourOutOfSpaceCover.jpg";
images[1] = "images/TheKinginYellow.png";
images[2] = "images/interviewWithTheVampireCover.jpg";

links[0] = "colour-out-of-space.html";
links[1] = "the-king-in-yellow.html";
links[2] = "interview-with-the-vampire.html";

function changeImage(){
    document.getElementById("slide").src = images[i];
    document.getElementById("slideLink").href = links[i];

    if(i < images.length - 1){
        i++
    }
    else{
        i = 0
    }

    setTimeout("changeImage()", time);
}

changeImage();