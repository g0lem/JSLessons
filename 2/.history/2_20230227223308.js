// Methods

// String methods

let str = '           asdfghujiklosDASJHIDDASyujkiertyuiop            ';

let a = 'abc ';

let numberOfCharacters = a.length; // str.length is the length of the string

console.log(numberOfCharacters);

let stringWithoutSpaces = str.trim();

let upperCaseString = stringWithoutSpaces.toUpperCase();

let lowerCaseString = stringWithoutSpaces.toLocaleLowerCase();

let slicedString = stringWithoutSpaces.slice(10); // slice removes the first 10 characters

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


let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];

// Three dots (...) is called spread operator and it takes all the elements from inside an array and copies them in another one.
// be careful because you can only do it when you declare a new array!
let myChildren = [
    ...arr3,
    ...arr2,
    ...arr1,
];

let sortedChildren = myChildren.sort();

console.log(sortedChildren);




let arrayWithoutTheFirstThreeElements = myChildren.slice(3); // slice removes the first 3 elements from the array

// console.log(arrayWithoutTheFirstThreeElements);