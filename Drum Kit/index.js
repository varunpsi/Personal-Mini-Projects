for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
} // above code adds click event listener to the .drum class only.
// document.addEventListener("click", handleClick); // this adds click event listener to the whole html document.

// Detecting button Press

function handleClick() {
  var buttonInnerHTML = this.textContent;
  checkToPlay(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// Detecting Keyboard Press

document.addEventListener("keydown", function (event) {
  checkToPlay(event.key);
  buttonAnimation(event.key);
});

function checkToPlay(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log("buttonInnerHTML");
  }
}

function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey); // we use concatenation so that we can target
  // the specific class .w, .k as currentKey has values as w, k but we need to target class to acheive the desired effect.
  activeKey.classList.toggle("pressed");

  setTimeout(function () {
    activeKey.classList.toggle("pressed");
  }, 100);
}
