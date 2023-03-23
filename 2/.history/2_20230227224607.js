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

let numberArray = [3,5,76,8,1,2,9,543,12,7];
let sortedNumberArray = numberArray.sort(); //note that this sorts alphabetically instead of numerically

console.log(sortedNumberArray);


let arrayWithoutTheFirstThreeElements = myChildren.slice(3); // slice removes the first 3 elements from the array

// console.log(arrayWithoutTheFirstThreeElements);



// Methods/Functions

function sumOfTwoNumbers(firstNumber, secondNumber) {
    return firstNumber+secondNumber;
}

let sum1 = sumOfTwoNumbers(1,2,3,5,67,5,4,1);
let sum2 = sumOfTwoNumbers(2,3);

console.log(sum1);
console.log(sum2);


function compareNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

let numberArray2 = [3,5,76,8,1,2,9,543,12,7];
let sortedNumberArray2 = numberArray.sort(compareNumbers); //note that this sorts alphabetically instead of numerically

console.log(sortedNumberArray2);