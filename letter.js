

// letter constructor

var Letter = function (letter) {
    // indicate which letter
    this.char = letter;
    // default is hiding letters
    this.show = false;
    // if default, the value should be "_", if true, then show the letter.
    this.letterRender = function () {
        if (this.show === false) {
            return "_";
        } else {
            return this.char;
        }
    };
};


//export the constructor
module.exports = Letter;