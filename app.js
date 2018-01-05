// require packages and constructor
var Word = require('./word.js');
var prompt = require('prompt');
prompt.start();

// var wordArray = ['html', 'javascript', 'python', 'css', 'mysql'];
// var word = new Word(wordArray[Math.floor(Math.random() * wordArray.length)]);
// console.log(wordArray);
// console.log(word.word);
// word.letterPush();
// console.log(word);

// right the whole as a object
game = {
    wordArray: ['html', 'javascript', 'python', 'css', 'mysql'],
    guessesRemaining: 5,
    currentWord: null,

// startgame, reset guesses and random generate new word from word array, then prompt user
    startGame: function () {
        this.resetGuesses();
        this.currentWord = new Word(this.wordArray[Math.floor(Math.random()* this.wordArray.length)]);
        this.currentWord.letterPush();
        this.promptUser();
    },
// reset guesses function
    resetGuesses: function(){
        this.guessesRemaining = 5;
    },
// prompt user function
    promptUser: function(){
// need to substitue this to that since here "this" is not game
        var that = this;
        prompt.get(['guessLetter'], function(err, result){
            console.log("You guessed: " + result.guessLetter);
            var manyGuessed = that.currentWord.checkLetter(result.guessLetter);

            if(manyGuessed ==0) {
                console.log("WRONG");
                that.guessesRemaining--;
                
            } else {
                console.log("CORRECT");
                    if(that.currentWord.checkFind()){
                        console.log("You won!");
                        console.log("-------------------");
                        return;
                    }
            }

            console.log("Guesses remaining: " + that.guessesRemaining);
            console.log("-------------------");
            if((that.guessesRemaining > 0) && (that.currentWord.find == false)){
                that.promptUser();
            }
            else if(that.guessesRemaining == 0){
                console.log("Game over. Correct Word ", that.currentWord.word);
            } else {
                console.log(that.currentWord.wordRender());
            }
        });

    }


};

game.startGame();

