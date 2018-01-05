

var Letter = require('./letter.js');
var Word = require('./word.js');


// testing if the Letter constructor is working or not
var e = new Letter('e');
e.show = true;
console.log(e.letterRender());

// Testing if the Word consutructor is working properly
var test = new Word('sjefdddefw');
console.log(test);
test.letterPush();
console.log(test.letters);
test.checkLetter("a");
test.checkFind();
test.wordRender();

// test to see if what "this" is inside the prompt
// console.log(this);
// fs.writeFile("test.js", JSON.stringify(this), function(err){
//     console.log('works');
// });


