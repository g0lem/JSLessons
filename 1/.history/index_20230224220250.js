// Commented Line

// Console output
// console.log("Hello World!");

// Declaring variables

// Old: 
var old;

// 2 New ways:
let firstNewWay;
const secondNewWay = 2;


//Data Types in JS

let a = 1; //Number
let b = 'text'; //String

// Arrays/Lists 
let c = [
    'paine',
    'apa',
    'tigari',
]; // String list
let d = [
    1, 2, 3, 4
]; // Number list

let e = [
    1, 2, 'text', 'altceva', 3, 4
];


// Objects / Hashmaps

let obj = {
    'key1': 'some_value',
    'key2': 2,
    'key3': [1,2,3],
};

let Nacho = {
    tipAnimal: 'pisica',
    greutate: 2,
    lungime: 30,
};

// undefined

let ceva;


// true and false

let tru = true;
let fal = false;

// "Truthy"

const doesNachoExist = !!Nacho;
// console.log(doesNachoExist);

// if(Nacho) {
//     console.log("Nacho exists");
// }

let password = 'secret ';

console.log(!!password);

// undefined is falsy

// Conditionals (ifs)
// if(!password) {
//     console.log("Please enter password");
// }
// else {
//     console.log("Password correct");
// }

if(password === 'secret') {
    console.log("Password correct");
}
else {
    console.log("Wrong password");
}

if(1 == 1) {
    console.log('how?')
}

// if(!!password) {
//     console.log("Password correct");
// }


