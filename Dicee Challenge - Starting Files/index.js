var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/" + "dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src", randomImageSource1);

var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "⛳Player 1 wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").textContent = "Player 2 wins⛳";
}
else {
    document.querySelector(".container h1").textContent = "⛳Draw⛳";

}
