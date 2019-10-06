
//Node Progaming Start

//First Program to generate a non-remembable password with lenght of 20 and starting with 'nice-pass-'

let passwordGenerator = require('password-generator');
let password  = passwordGenerator(20, false, '', 'nice-pass-');
console.log(password);


/*
//Second program to generate one liner joke

let joke = require('one-liner-joke');
console.log(joke.getRandomJoke());

let repeat = require('repeat-string');
console.log(repeat('Hello',3));
*/



