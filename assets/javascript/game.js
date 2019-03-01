//variables
var question = ["cars", "toy story", "mulan", "finding nemo"]; 
var letterGuessed;
var alphabet = ["a","b","c","d","e", "f","g",
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessRemaining;


for (var i = 0; i < question.length; i++) {
}





// randomly chooses a word        
document.getElementById("question").innerHTML = question[Math.floor(Math.random() * question.length)]; {
  
}

var score = 0;
var questionIndex = 0;


//functions
//show next question
function renderQuestion() {
     if (questionIndex <= (question.length - 1)) {
        document.querySelector("#question").innerHTML = question[questionIndex];
    
    } else {
        //end game if we run out of questions
        document.querySelector("#question").innerHTML = "Game Over";
    }
}
//update score
function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;

}

//Main Process

updateScore();
renderQuestion(); 

document.onkeyup = function() {
    var userInput = event.key.toLowerCase();

    if (questionIndex === question.length){
        return;
    }
    // if (userInput === ""


    //.push for the guesses
    //
}