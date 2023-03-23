// Methods

// String methods

let str = '           asdfghujiklosDASJHIDDASyujkiertyuiop            ';

let a = 'abc ';

let numberOfCharacters = a.length; // str.length is the length of the string

console.log(numberOfCharacters);

let stringWithoutSpaces = str.trim();

let upperCaseString = stringWithoutSpaces.toUpperCase();

let lowerCaseString = stringWithoutSpaces.toLocaleLowerCase();

let slicedString = stringWithoutSpaces.slice(10);

let thingsToDo = 'shopping, cleaning, pet Nacho';

let arrayFromStr = thingsToDo.split(',');



// Array methods

let arr = arrayFromStr;


let reversedArr = arr.reverse();

// Add an item to the array
arr.push(234);
console.log(reversedArr);

// pop gets the last item from the array and removes it;

let lastItemInTheArray = arr.pop();
console.log(arr);

// shift gets the first item from the array and removes it;
let firstItemInTheArray = arr.shift();
console.log(arr);

// shift is equivalent to arr.reverse().pop().reverse();


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = [
    
];

console.log(myChildren);