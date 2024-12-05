
// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];

// var userClickedPattern = [];

// var firstKey = false;

// var level = 0 ;


// $(document).keydown(function (e) {
//     if (!firstKey) {
//         $("#level-title").text("Level " + level)
//         nextSequence()
//         firstKey = true;
        
//     }
// });

// $(".btn").on("click", function () {
//     var userChosenColour = $(this).attr("id");
//     userClickedPattern.push(userChosenColour);
//     playSound(userChosenColour)
//     animatePress(userChosenColour)
//     checkAnswer(userClickedPattern.length-1)
//     // console.log(userClickedPattern);
// })

// function checkAnswer(currentLevel) {
//     if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
//         console.log("Success");
//         if (userClickedPattern.length === gamePattern.length) {
//             setTimeout(function () {
//                 nextSequence();
//             }, 1000);
//         }
//     } else {
//         console.log("Try Again");
//         playSound("wrong");
//         $("body").addClass("game-over");
//         setTimeout(() => {
//             $("body").removeClass("game-over");
//             }, 200);
//         $("#level-title").text("Game Over, Press Any Key to Restart");
//         startOver()
//         }
// }

// function startOver() {
//     level = 0;
//     gamePattern = [];
//     firstKey = false;
// }

// function nextSequence() {
//     userClickedPattern = [];
//     level++;
//     $("#level-title").text("Level " + level)

//     var randomNumber = Math.floor(Math.random(buttonColours) * 4);
//     var randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);
//     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomChosenColour)
// }

// function playSound(name) {
//     var audio = new Audio("./sounds/" + name + ".mp3");
//     audio.play()
// }

// function animatePress(currentColour) {
//     $("#" + currentColour).addClass("pressed");
//     setTimeout(() => {
//         $("#" + currentColour).removeClass("pressed")
//     }, 100);
// }



////////////////////////////////////////////////////////////////////////////////////


var colors = [ "green", "red","yellow", "blue"]
var randomChosenArray = [];
var clickedColorArray = [];
var level = 0;
var firstKey = false;


$(document).keydown(function (e) {
    if (!firstKey) {
        if (e.key === "a" || e.key === "A") {
            $("#level-title").text("Level " + level)
            loading()
            firstKey = true;
            console.log("success");
        }
    }
})

$(".btn").on("click", function () {
    var clickedColor = $(this).attr("id");
    clickedColorArray.push(clickedColor);
    sounds(clickedColor);
        $(this).addClass("pressed");
        setTimeout(() => {
            $(this).removeClass("pressed");
        }, 100);
    check(clickedColorArray.length-1)
})





function loading() {
    clickedColorArray = []; // اللي بتخلي لو انا مضغطتش علي الزراير صح م الاول للاخر بيجبلي خطأ 
    level++;
    $("#level-title").text("Level " + level)

    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = colors[randomNumber];
    randomChosenArray.push(randomColor);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    sounds(randomColor);
}

function check(currentLevel) {
    if (randomChosenArray[currentLevel] === clickedColorArray[currentLevel]) {
        if (randomChosenArray.length === clickedColorArray.length) {
            setTimeout(() => {
                loading()
            }, 1000);
        }

    } else {
        sounds("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver()
    }
}

function startOver() {
    level = 0;
    randomChosenArray = [];
    firstKey = false;
}

function sounds(name) {
    var audio = new Audio("./sounds/" + name + ".mp3")
    audio.play()
}
