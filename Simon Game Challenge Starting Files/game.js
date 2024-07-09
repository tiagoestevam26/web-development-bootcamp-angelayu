var colors = ["green", "red", "yellow", "blue"];

function newColor() {
  var number = Math.floor(Math.random() * 4);
  return colors[number];
}

var gamePattern = [];
var round = 0;
var winning = 1;
var aux = 0;
var audio;

$(document).keydown(function () {
  if (gamePattern.length === 0) {
    $("h1").text("Round 1");
    startGame();
  }
});

function startGame() {
  gamePattern.push(newColor());
  console.log(gamePattern);
  $("." + gamePattern[round]).addClass("pressed");

  switch (gamePattern[round]) {
    case "green":
      audio = new Audio("./sounds/green.mp3");
      audio.play();
      break;
    case "red":
      audio = new Audio("./sounds/red.mp3");
      audio.play();
      break;
    case "yellow":
      audio = new Audio("./sounds/yellow.mp3");
      audio.play();
      break;
    case "blue":
      audio = new Audio("./sounds/blue.mp3");
      audio.play();
      break;
    default:
      console.log("deu erro em");
      break;
  }

  setTimeout(function () {
    $("." + gamePattern[round]).removeClass("pressed");
    $(".btn").prop("disabled", false); 
  }, 400);
}

function checkUserInput() {
  $(".btn").prop("disabled", true); 

  $(".btn").on("click", function (event) {
    var clickedColor = event.target.id;
    var expectedColor = gamePattern[aux];

    if (clickedColor === expectedColor) {
      aux++;
      if (aux === gamePattern.length) {
        round++;
        aux = 0;
        $("h1").text("Round " + (round + 1));
        startGame(); 
      }
    } else {
      console.log("perdeuuu");
      perdeu();
    }
  });
}

function perdeu() {
  audio = new Audio("./sounds/wrong.mp3");
  audio.play();
  winning = 0;
  gamePattern.length = 0;
  $("h1").text("You lost! :/");
  setTimeout(function () {
    $("h1").text("Press F5 to restart.");
  }, 2000);
  $(".btn").addClass("game-over");
}

$(".btn").on("mouseenter", function(event) {
  $("#"+event.target.id).addClass("mouseOver");
});

$(".btn").on("mouseleave", function(event) {
  $("#"+event.target.id).removeClass("mouseOver");
});


checkUserInput();
