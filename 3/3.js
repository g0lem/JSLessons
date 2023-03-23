// Write a JavaScript program to sum values of an array.

let arr = [1, 3, 5, 15, 69, 420];

let sum = 0;

// sum = 0;  // Step -1

// sum = 0 + arr[0];  // Step 0

// sum = 0 + arr[0] + arr[1]; // Step 1


for(let i=0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum);

// Write a JavaScript program to calculate the average value of array elements.

sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

let average = sum/arr.length;

console.log(average);


// Write a JavaScript program to check if an array contains a specific value.

let a = [1, 3, 5, 15, 69, 420, 5, 5];
let specificValue = 5;
let containsSpecificValue = false;

for(let i = 0; i < a.length; i++) {
    if(specificValue === a[i]) {
        containsSpecificValue = true;
    }
}

if(containsSpecificValue) {
    console.log("da");
}
else {
    console.log("nu");
}

// Write a JavaScript program to check the number of occurences of a value in an array

let numberOfOccurences = 0;

for(let i = 0; i < a.length; i++) {
    if(specificValue === a[i]) {
        numberOfOccurences++; // numberOfOccurences = numberOfOccurences + 1;
    }
}

console.log(numberOfOccurences);

console.log('-------------------------------------------------------------------------');


sum = 0;
for(let number of a) {
    // console.log(number); //a[i]
    sum = sum + number;
}

console.log('-------------------------------------------------------------------------');

// Write a JavaScript program to copy an array by iterating the array.

let b = [];

// for(let i = 0; i < a.length; i++) {
//     b.push(a[i]);
// }

// Write a JavaScript program to reverse an array of numbers.

for(let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
}

console.log(b);

// Write a Java program to find the common elements between two arrays 

let c = [1, 6, 5, 4, 7, 9];
let d = [1, 9, 3, 10, 11, 8];
let commonElements = [];

for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < d.length; j++){
        if(c[i] === d[j]){
            commonElements.push(c[i]);
        }
    }
}

console.log(commonElements);

