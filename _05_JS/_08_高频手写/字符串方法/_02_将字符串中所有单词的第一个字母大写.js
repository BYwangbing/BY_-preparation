const capitalizeAllWords = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
let str = capitalizeAllWords('i love reading book');
console.log(str); // I Love Reading Book
