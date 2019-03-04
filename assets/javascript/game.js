//variables
var question = ["cars", "mulan", "toy story", "cinderella", "frozen"];
var letterGuessed = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var actualWord = "";


for (var i = 0; i < question.length; i++) 

    //random word/question
    actualWord = question[Math.floor(Math.random() * question.length)];
        
   





    var num = 0;
    var score = 0;
    var questionIndex = 0;


    //function
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

    document.onkeyup = function (event) {

        var userGuess = event.key;
        console.log(userGuess);

        //randomly chooses next question

        userGuess = document.querySelector("#question").innerHTML = question[Math.floor(Math.random() * question.length)];

        if (questionIndex === question.length) {

            return;
        }
        if (userGuess === ("c" || "a" || "r" || "s")) {
            alphabet.push("<question>");
        } else {
            alphabet.push("#letterGuessed");
        } 
        }
    
    // if (userGuess === "c") {
    //     document.querySelector("#question").innerHTML = "c----";
    // } else {
    //     alphabet.push("#lettersGuessed");

    // }






    // if (userInput === ""


    //.push for the guesses
