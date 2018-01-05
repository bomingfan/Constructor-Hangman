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


game = {
    wordArray: ['html', 'javascript', 'python', 'css', 'mysql'],
    guessesRemaining: 5,
    currentWord: null,
    
    startGame: function () {
        this.resetGuesses();
        this.currentWord = new Word(this.wordArray[Math.floor(Math.random()* this.wordArray.length)]);
        this.currentWord.letterPush();
        this.promptUser();
    },

    resetGuesses: function(){
        this.guessesRemaining = 5;
    },

    promptUser: function(){
        var self = this;
        prompt.get(['guessLetter'], function(err, result){
            console.log("You guessed: " + result.guessLetter);
            var manyGuessed = self.currentWord.checkLetter(result.guessLetter);

            if(manyGuessed ==0) {
                console.log("WRONG");
                self.guessesRemaining--;
                
            } else {
                console.log("CORRECT");
                    if(self.currentWord.checkFind()){
                        console.log("You won!");
                        console.log("-------------------");
                        return;
                    }
            }

            console.log("Guesses remaining: " + self.guessesRemaining);
            console.log("-------------------");
            if((self.guessesRemaining > 0) && (self.currentWord.find == false)){
                self.promptUser();
            }
            else if(self.guessesRemaining == 0){
                console.log("Game over. Correct Word ", self.currentWord.word);
            } else {
                console.log(self.currentWord.wordRender());
            }
        });

    }


};

game.startGame();
