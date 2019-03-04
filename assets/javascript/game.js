//variables
var word = ["cars", "mulan", "toy story", "cinderella", "frozen"];
var letterGuessed = [];
var question = ["----"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var cars = ["c", "a", "r", "s",];
var car = cars[i];
var mulan = ["m", "u", "l", "a", "n"];




//random word/question
actualWord = question[Math.floor(Math.random() * question.length)];



var num = 0;
var score = 0;
console.log(score);
var questionIndex = 0;


//function
//random question
for (var i = 0; i < question.length; i++) {
    //show next question
    function renderQuestion() {
        if (questionIndex <= (question.length - 1)) {
            document.querySelector("#unknownWord").innerHTML = question[questionIndex];

        } else {
            //end game if we run out of questions
            document.querySelector("#unknownWord").innerHTML = "Game Over";
        }
    }

    //update score
    function updateScore() {
        document.querySelector("#score").innerHTML = "Score: " + score;

    }

    //Main Process

    updateScore();
    renderQuestion();


    document.onkeyup = function () {

        var userGuess = event.key;
        console.log(userGuess);



        if (questionIndex === question.length) {
            return;
        }

        if (event.key === "c") {
            console.log(event.key);
        } else {
            document.querySelector("#letters-guessed")
        }


    }
}




        // if (userGuess === ("c")) {
        //     alphabet.push("");
        // } else {
        //     alphabet.push("#letterGuessed");
        // } 
        // if (userGuess="c") {
        //     car.push(car[1]).textContext("#question");


        // if (animal.toLowerCase().charAt(0) === "c") {
        //     car.push(car[1]);
        // }



    // if (userGuess === "c") {
    //     document.querySelector("#question").innerHTML = "c----";
    // } else {
    //     alphabet.push("#lettersGuessed");

    // }






    // if (userInput === ""


    //.push for the guesses
