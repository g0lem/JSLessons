// Matrice / 2D Arrays

/**
 * [1, 2, 3]
 * [4, 5, 6]
 * [7, 8, 9]
 */

let matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

// console.log(matrice[0]);

for(let i = 0; i < matrice.length; i++) {
    for(let j = 0; j < matrice[i].length; j++){
        // console.log(matrice[i][j]);
    }
}

// Sa se scrie o functie care returneaza suma tuturor numerelor din matrice

function sumOfAll(matrice){
    let sum = 0;
    for(let i = 0; i < matrice.length; i++) {
        for(let j = 0; j < matrice[i].length; j++){
            sum = sum + matrice[i][j];
        }
    }
    return sum;
}

// console.log(sumOfAll(matrice));


//Sa se determine suma elementelor pare din matrice

function sumOfEven(matrice) {
    let sum = 0;
    for(let i = 0; i < matrice.length; i++){
        for(let j = 0; j < matrice[i].length; j++) {
            if(matrice[i][j] % 2 === 0) {
                sum = sum + matrice[i][j];
            }
        }
    }
    return sum;
}

// console.log(sumOfEven(matrice));


// Generarea matricelor

// O sa scriem o functie care genereaza o matrice de forma nxm (n linii, m coloane), cu numere consecutive

function generateMatrix(n, m) {
    let matrix = [];
    let counter = 1;
    for(let i=0; i < n; i++) {
        let arr = [];
        for(let j=0; j < m; j++) {
            arr.push(counter);
            counter++;
        }
        matrix.push(arr);
    }
    return matrix;
}

// console.log(generateMatrix(4, 3));


// Sa generam o matrice nxm (n linii, m coloane), iar valoarea fiecarui element este minimul dintre i si j

function generateSpecialMatrix(n,m) {
    let arr = [];
    let matrix = [];
    for(let i=0; i < n; i++) {
        arr = [];
        for(let j=0; j < m; j++) {
            if(i < j) {
                arr.push(i);
            }
            else {
                arr.push(j);
            }
        }
        matrix.push(arr);
    }
    return matrix;
}

// console.log(generateSpecialMatrix(5,5));

//[ [ 0, 0, 0 ], [ 0, 1, 1 ], [ 0, 1, 2 ] ]


// Sa generam o matrice nxm (n linii, m coloane), iar valoarea fiecarui element este produsul dintre i si j

function productMatrix(n,m) {
    let arr = [];
    let matrix = [];
    for(let i=0; i < n; i++) {
        arr = [];
        for(let j=0; j < m; j++) {
            arr.push(i*j);
        }
        matrix.push(arr);
    }
    return matrix;
}

console.log(productMatrix(10, 10));
