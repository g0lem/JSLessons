// Write a program that given a number n prints the sum of the numbers 1 to n

// let n = 100;
// let sum=0;

// for(let i = 1; i <= n; i++) {
//     sum = sum + i;
// }

//Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17


let n = 100;
let sum = 0;

function isDivisibleByThree(number) {
    return number % 3 === 0;
}

function isDivisibleByFive(number) {
    return number % 5 === 0;
}

for(let i = 1; i <= n; i++) {
    if(isDivisibleByThree(i) || isDivisibleByFive(i)) {
        sum = sum + i;
    }
}

// console.log(sum);

// Write a program that given an array prints only the values found on the odd positions of it

let arr = [1,6,5,4,1,612,7,4,3,2,1,9];

function isOdd(number) {
    return !(number % 2 === 0);
}

for(let i = 1; i < arr.length; i=i+2){
    console.log(arr[i]);
}

for(let i = 1; i < arr.length; i++){
    if(isOdd(i)) {
        console.log(arr[i]);
    }
}

console.log('-------------------------------------------------------------------------------')

// write a program that only logs the even numbers in the array

for(let i = 0; i < arr.length; i++) {
    if(!isOdd(arr[i]) ) {
        console.log(arr[i]);
    }
}

// modify the program to write odd next to the number in the array if it's odd and even if it's even
// example :
// 4 - even
// 5 - odd
// 7 - odd

for(let i = 0; i < arr.length; i++) {
    if(!isOdd(arr[i])) {
        console.log(arr[i], ' - even');
    }
    else {
        console.log(arr[i], ' - odd');
    }
}

// Write the digits of the number in reverse order

let nr = 123456789;

while(nr) {
    let lastDigit = nr % 10;
    console.log(lastDigit);
    nr = parseInt(nr/10); // makes sure your number is an integer (numar intreg)
}


//(246)/10 = (2 * 100 + 4*10 + 6)/10 = 2 * 10 + 4 rest 6 = 24 rest 6


// check if an array is a palindrome (it is mirrored)

//example [1,2,3,2,1], [1,2,4,2,1]
console.log('-------------------------------------------------------------------------------');

let palindrome = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];
let isPalindrome = true;

for(let i=0; i < palindrome.length / 2; i++) {
    if(palindrome[i] !== palindrome[palindrome.length - 1 - i]){
        isPalindrome = false;
    }
}
console.log('isPalindrome', isPalindrome);

// HOMEWORK : SOLVE THE EXERCISE USING REVERSE FUNCTION


/**
 * [ number, i 
    * 1,  // 0   length - 9 = (length - 1) - 8
    * 2,  // 1   length - 8 = (length - 1) - 7
    * 3,  // 2   length - 7 = (length - 1) - 6
    * 4,  // 3   length - 6 = (length - 1) - 5
    * 5,  // 4   length - 5 = (length - 1) - 4
    * 4,  // 5   length - 4 = (length - 1) - 3
    * 3,  // 6   length - 3 = (length - 1) - 2
    * 2,  // 7   length - 2 = (length - 1) - 1
    * 1   // 8   length - 1 = (length - 1) - 0
 * ] // length === 9
 */

let i = [...palindrome].reverse();
if (palindrome===i) {
    console.log("yay")
}
else (console.log("nay"))

console.log([1,2] === [1,2]); // false


let palindromeCopy = [...palindrome];
palindromeCopy.reverse();
let isPalindrome2 = true;

for(let i=0; i < palindrome.length; i++) {
    if(palindrome[i] !== palindromeCopy[i]){
        isPalindrome2 = false;
    }
}

console.log(isPalindrome2);




