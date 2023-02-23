
var gamePattern = [];

var prevGamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var cond = 0;

var level = 0;

var userChosenColour;

var randomChosenColour;

$(document).keydown(function() {
  cond+=1;


if(cond===1){

    nextSequence();

    $("#level-title").text("Level "+ level);

  }
});

function startOver(){

  console.log("wow");

  var cond = 0;

  cond+=1;

  gamePattern = [];

  prevGamePattern = [];

  userClickedPattern = [];

  level = 0;

  userChosenColour;

  randomChosenColour;

  $(document).keydown(function() {

  if(cond===1){

      nextSequence();

      $("#level-title").text("Level "+ level);

      $(document).off("keydown");

    }
  });

}

function nextSequence(){

    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random()*4);

    randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    setTimeout(function(){

      $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
      var audio = new Audio("D:\\Scripts\\Web-BootCamp\\01Resources\\Simon-rsrc\\Simon Game Challenge Starting Files\\sounds\\"+randomChosenColour+".mp3");
      audio.play();

    },1000);



    if(level===0){

      level+=1;

      $("#level-title").text("Level "+ level);

    }

}




$(".btn").click(function(){

    userChosenColour = this.id;

    userClickedPattern.push(this.id);
    playSound();
    animatePress(userChosenColour);


    if(checkAnswer()==="success"){

      level+=1;
      $("#level-title").text("Level "+ level);
      nextSequence();
    }else if(checkAnswer()==="false"){

      var audio = new Audio("D:\\Scripts\\Web-BootCamp\\01Resources\\Simon-rsrc\\Simon Game Challenge Starting Files\\sounds\\wrong.mp3");
      audio.play();

      $("body").addClass("game-over");
      setTimeout(function(){

        $("body").removeClass("game-over");

      },200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();

    }


});


function playSound(){


  var audio = new Audio("D:\\Scripts\\Web-BootCamp\\01Resources\\Simon-rsrc\\Simon Game Challenge Starting Files\\sounds\\"+userChosenColour+".mp3");
  audio.play();

}

function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){$(
    "#"+currentColour).removeClass("pressed");
  },50);


}


function checkAnswer(){

  prevGamePattern = gamePattern.slice(0, gamePattern.length);

  var i;

  if(userClickedPattern[i]===gamePattern[i]){
      var count = 0;

      for(i=0;i<userClickedPattern.length;++i){

        if(userClickedPattern[i]===prevGamePattern[i]){

          count++;

        }else{return "false"}

      }

      if(count===gamePattern.length){

        return "success";
    }
  }
}
