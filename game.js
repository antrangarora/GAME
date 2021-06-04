var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=0;
var started=false;

$(document).click(function() {
  if (!started) {


    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function(){
var userChosenColor=$(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1002);

      }

      } else {

      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200)
      $("#level-title").text("Game Over, Press Any Key to Restart");

      var audio = new Audio("wrong.mp3");
      audio.play();

      startOver();
      }

}


function nextSequence() {
userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);
var randomNumber=Math.random()*4;
randomNumber=Math.floor(randomNumber);
var randomChosenColor= buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
}

function playSound(name){
  var audio = new Audio(name+".mp3");
  audio.play();
}


function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");

setTimeout(function () {
  $("#" + currentColor).removeClass("pressed");
}, 100);

}



function
startOver() {
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  started=false;
}
