// Interclasarea vectorilor (listelor, array-urilor)

// We have three lists, a, b, c.
// a and b have elements, c is empty at the beginning
// I want to copy the elements from a in c on the even positions (including 0)
// and the elements from b on the odd positions of c

let a = [1,2,3,4,5,6,7];
let b = [8,9,10,11,12,13,17];
let c = [];

for(let i=0;i<a.length;i++) {
    c.push(a[i]);
    c.push(b[i]);
}

console.log(c);


// Se dă un șir cu n elemente, numere naturale. 
// Determinați diferența în valoare absolută dintre numărul de valori pare din șir și numărul de valori impare din șir. 

let arr = [1,5,7,8,5,3,1,7,8,3,2,7];

function valoareAbsoluta(numar) { //TZA
    if(numar < 0) {
        return -numar;
    }
    return numar;
}

let pareCounter = 0;
let impareCoutner = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        pareCounter++;
    }
    else {
        impareCoutner++;
    }
}

let differeta = pareCounter - impareCoutner;
let result = valoareAbsoluta(differeta);

console.log(result);

// Se citește n număr natural. Calculați suma numerelor naturale mai mici sau egale cu n.

let n = 10;
let sum = 0;

for(let i = 1; i <= n; i++){
    sum = sum + i;
}

console.log(sum)

//Să se scrie un program care citește numărul natural n și determină suma 2+4+..+(2*n).
n = 10;
sum = 0;

for(let i = 0; i <= 2*n; i=i+2){
    sum = sum + i;
}

//2+4+..+(2*n) = 2*(1+2+3+ ... + n)

n = 10;
sum = 0;

for(let i = 1; i <= n; i++){
    sum = sum + 2*i;
}
console.log(sum)

//Să se scrie un program care citește numărul natural n și determină valoarea lui 1*2*3*...*n

n = 10;
let prod = 1;

for(let i = 1; i <= n; i++) {
    prod = prod * i;
}

console.log(prod)

//Se dă numărul natural nenul n. Să se determine produsul primelor n pătrate perfecte nenule.

// 1 = 1^2 = 1*1
// 4 = 2^2 = 2*2
// 9 = 3^2 = 3*3
//16 = 4^2 = 4*4

// 1^2 * 2^2 * 3^2 * ... 

n = 5;
prod = 1;

for(let i = 1; i <= n; i++) {
    let patratPerfect = i*i;
    prod = prod * patratPerfect;
}

console.log(prod)

// Se dă numărul natural nenul n. Să se determine produsul primelor n numere pare nenule.

n = 3;
prod = 1;

for(let i=2; i <= 2*n;i=i+2) {
    prod = prod * i;
}

console.log(prod);