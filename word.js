// require Letter constructor

var Letter = require('./letter.js');

// Word constructor

var Word = function (wd) {
    // grabbing the parameter
    this.word = wd;
    // letter array
    this.letters = [];
    // indicate if user find the word, default should be false
    this.find = false;

    // pushes each letter to the letter array
    this.letterPush = function () {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    };

    // checks to see if guessed letter is in the word
    this.checkLetter = function (guessedLetter) {
        // letter counter
        var counter = 0;

        // iterates through each letter to see check for match
        for (var i = 0; i < this.letters.length; i++) {
            // if letter is the guessed letter, change the indicator to true
            if (this.letters[i].char == guessLetter) {
                this.letters[i].show = true;
                counter++;
            }
        }

        // number of letters shown
        return counter;
    };

    // check to see if user find the word
    this.checkFind = function () {
        // check every letter in the letter array, if all of the indiator is true, then return true, otherwise, return false
        this.find = this.letters.every(function(letter) {
			return letter.appear;
		});
		return this.find;
    };

    // 




}


// export
module.exports = Word;