d = document.querySelectorAll("button").length;
for (i = 0; i < d; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    clickEvent(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  clickEvent(event.key);
  addAnimation(event.key);
});

function clickEvent(c) {
  switch (c) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
  }
}

function addAnimation(ele) {
  document.querySelector("."+ele).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("."+ele).classList.remove("pressed");
  }, 100);
}
