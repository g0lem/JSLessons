//1. Scrieti o functie care primeste ca parametru un array. Sa se determine numarul minim  (valoarea) pozitiv (mai mare sau egal cu 0) al array-ui

// let array = [-100,15,58,4,0,27,88,26,84,9, -1, -100];
// let smallest = Infinity;

// for (let i=0; i<array.length; i++){
//     if (smallest > array[i] && array[i] >= 0){
//         smallest = array[i];
//     }

// }

// console.log(smallest);

//2. Sa se scrie o functie care primeste ca parametru un array. Sa se determine cele doua cele mai mari valori din acesta. (cel mai mare si al doilea cel mai mare)

//second rezolvare

// let array = [15,58,4,0,27,88,26,99];
// let biggest = array[0];
// let secondbiggest = array[0];

// for (let i=0; i < array.length; i++) {
//     if (array[i] > biggest) {
//         secondbiggest = biggest;
//         biggest = array[i];
//     }

// }

// console.log(biggest, secondbiggest);

// // 3. Sa se scrie o functie care primeste ca parametru un array si returneaza toate numerele prime din acesta (in alt array).

// let array = [15,58,4,3,7,88,5,84,9];
// let prime = [];

// function isPrime(array) {
//     let identifier = array / 2;
//     for (let j = 2; j <= identifier; j++) {
//         if ((array % j) == 0) { 
//             return false;
//         } 
//     }
//      return true;
// }
// for (let i = 0; i < array.length; i++) {
//     if (isPrime(array[i])) {
//         prime.push(array[i])
//     }
// }

// console.log(prime);


// // 4. Scrieti o functie care primeste ca parametru n (un numar) si returneaza produsul primelor n numere impare. 

// n = 4;
// prod = 1;

// for(let i=1; i <= 2*n; i=i+2) {
//     prod = prod * i;
// }

// console.log(prod);