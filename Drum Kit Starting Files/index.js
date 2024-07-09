var aux;
var audio;
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    playSound(this.innerHTML);
    animation(this.innerHTML);
  });
}




document.addEventListener("keydown", function(){
    playSound(event.key);
    animation(event.key);

})


function playSound(key){
    switch (key) {
        case "w":
          audio = new Audio("./sounds/crash.mp3");
          audio.play();
          break;
        case "a":
          audio = new Audio("./sounds/kick-bass.mp3");
          audio.play();
          break;
        case "s":
          audio = new Audio("./sounds/snare.mp3");
          audio.play();
          break;
        case "d":
          audio = new Audio("./sounds/tom-1.mp3");
          audio.play();
          break;
        case "j":
          audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
          break;
        case "k":
          audio = new Audio("./sounds/tom-3.mp3");
          audio.play();
          break;
        case "l":
          audio = new Audio("./sounds/tom-4.mp3");
          audio.play();
          break;
        default:
          console.log("bbbbbbb");
          break;
      }
}

function animation(key){
    var button = document.querySelector("."+ key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    }, 300);
}