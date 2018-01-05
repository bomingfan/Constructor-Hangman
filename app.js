// require packages and constructor
var Word = require('./word.js');
var prompt = require('prompt');
var fs = require('fs');

console.log("Guess a web language?");
prompt.start();



// write the whole game as an object
game = {
    wordArray: ['html', 'javascript', 'python', 'css', 'mysql'],
    guessesRemaining: 5,
    currentWord: null,

    // startgame, reset guesses and random generate new word from word array, then prompt user
    startGame: function () {
        this.resetGuesses();
        this.currentWord = new Word(this.wordArray[Math.floor(Math.random() * this.wordArray.length)]);
        this.currentWord.letterPush();
        this.currentWord.wordRender();
        this.promptUser();
    },
    // reset guesses function
    resetGuesses: function () {
        this.guessesRemaining = 5;
    },
    // prompt user function
    promptUser: function () {
        // need to substitue this to that since here "this" inside prompt.get is not game, it is npm prompt
        var that = this;
        prompt.get(['guessLetter'], function (err, result) {
            console.log("You guessed: " + result.guessLetter);
            // create variable to see if tell right or wrong
            var guessBool = that.currentWord.checkLetter(result.guessLetter);

            // if guess wrong guessRemaining--
            if (guessBool === 0) {
                console.log("WRONG!");
                that.guessesRemaining--;
            }
            // if guess right 
            else {
                console.log("CORRECT!!!");
                // if checkfind function return true, console.log win and stop
                if (that.currentWord.checkFind()) {
                    console.log("You won! The Word is: " + that.currentWord.word);
                    console.log("--------------------------------------------------");
                    return;
                }
            }
            // consolelog guessRemaining everytime no matter right or wrong
            console.log("Guesses remaining: " + that.guessesRemaining);
            console.log("--------------------------------------------------");
            // As long as there is still guess left and the word is found, keep prompt user and show word progress
            if ((that.guessesRemaining > 0) && (that.currentWord.find == false)) {
                that.currentWord.wordRender();
                that.promptUser();
            }
            // if no guess left, game over and show the correct word
            else if (that.guessesRemaining === 0) {
                console.log("Game over. The correct word is: " + that.currentWord.word);
            }
        });
    }
};

game.startGame();

