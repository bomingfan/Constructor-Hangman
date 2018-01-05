// require packages
var inquirer = require("inquirer");


// variables 
var wordsList = ["js", "css", "html"];
// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// prompt user the to play the game
startGame();
// function startGame() {
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "Guess a letter?",
//             name: "letter"
//         }
//     ]).then(function(res){
        
//     })
// }


// (Note: It's not being run here. It's just being made for future use.)
function startGame() {
    // Reset the guesses back to 0.
    numGuesses = 9;
    // Solution is chosen randomly from wordList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    // The word is broken into individual letters.
    lettersInChosenWord = chosenWord.split("");
    // We count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;
    // We print the solution in console (for testing).
    console.log(chosenWord);
    // CRITICAL LINE - Here we *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];
    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
    // Print the initial blanks in console.
    console.log(blanksAndSuccesses);
    // // Reprints the guessesLeft to 9
    // document.getElementById("guesses-left").innerHTML = numGuesses;
  
    // // Prints the blanks at the beginning of each round in the HTML
    // document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
    // // Clears the wrong guesses from the previous round
    // document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  }
