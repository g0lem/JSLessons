// https://www.pbinfo.ro/probleme/255/fibonacci


/** Fibonacci
 * 1 - f1
 * 1 - f2
 * 2 = 1 + 1
 * 3 = 2 + 1
 * 5 = 3 + 2
 * 8 = 5 + 3
 * 13 = 5 + 8
 */

// fn = fn-1 + fn-2
// f3 = f3-1 + f3-2 = f2 + f1

//[1, 1, 2, 3, 5, 8]

function fibonacci(n) {
    let first = 1;
    let second = 1;
    let arr = [
        first,
        second,
    ];

    for(let i=0; i < n-2; i++) {
        let last = arr[arr.length - 1];
        let secondToLast = arr[arr.length - 2];
        let sum = last + secondToLast;
        arr.push(sum);
    }

    return arr;
}

let fibo5 = fibonacci(5);
let fibo10 = fibonacci(10);

console.log(fibo5);
console.log(fibo10);


//https://www.pbinfo.ro/probleme/2820/sir11

/**
 * first = 1
 * second = -1
 * last = fn-1
 * secondToLast = fn-2
 * sum = 1 - 2 * last - secondToLast
 */

function weirdBullshit(n) {
    let first = 1;
    let second = -1;
    let arr = [
        first,
        second,
    ];
    
    for(let i=0; i < n-2; i++) {
        let last = arr[arr.length - 1];
        let secondToLast = arr[arr.length - 2];
        let sum = 1 - 2 * last - secondToLast;
        arr.push(sum);
    }
    return arr.reverse(); 
}

let weird = weirdBullshit(10);
console.log(weird);


// Nr prim
// Un numar este prim daca acesta se divide perfect doar cu 1 si el insusi

// Scrieti o functie care verifica daca un numar este prim

//7
//6 5 4 3 2 

// 2 3 4 5 6



/**
 * 7 6
 * 7 5
 * 7 4
 * 7 3
 * 7 2
 * 
 */



function isPrime(n) {
    for(let i = 2; i < n; i++){
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));

// Sa se scrie o functie care primeste un parametru n (numar) si returneaza suma divizorilor lui n
// divizori = numerele la care se imparte perfect un alt numar
// ex 6 se imparte perfect la 1, 2, 3 si 6, deci 1 + 2 + 3 + 6 = 12, programul va returna 12

function sumaDivizorilor(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumaDivizorilor(6));

// [1, 10] <=> 1, 2, 3, ... , 8, 9, 10
// (1, 10) <=> 2, 3, ... , 8, 9

// [1, 10) <=> 1, 2, 3, ... , 8, 9
// (1, 10] <=> 2, 3, ... , 8, 9, 10


