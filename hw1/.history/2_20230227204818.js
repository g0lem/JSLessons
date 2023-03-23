// Write a program that asks the user for their name and greets them with their name.
const prompt = require('prompt-sync')();

let theirName = prompt("What's your name?");

let greeting = 'Hello, ' + theirName + '!';

console.log(greeting);