const words = require('./words.json')


//1. allWords logs all of the words

function allWords() {
    console.log(words)
}
//2. firstTenWords logs the first ten words 
function firstTenWords() {
    console.log(words.slice(0, 10));
}

//3. nextTenWords logs the next ten words after the 10th word.
function nextTenWords() {
    console.log(words.slice(10,20));
}
//4. firstXwords logs all the words up till x parameter
function firstXWords(x) {
    console.log(words.slice(0, x));
}

//5. subsetOfWords logs words x to y 

function subsetOfWords(x,y) {
    console.log(words.slice(x,y));
}

//6. sortWords organizing words by alphabetical order

function sortWords() {
    console.log([...words].sort());
}

// 7. find words with q

function wordsWithQ() {
return words.filter((word) => word.includes("q"));
}

// console.log(wordsWithQ());
//find words with letter
function findWordsWithLetter(letter) {
    return words.filter((word) => word.includes(letter));
}


const letter = process.argv[2];
const result = findWordsWithLetter(letter);
console.log(result)


