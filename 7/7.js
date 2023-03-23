// Se dau n - 1 numere naturale distincte de la 1 la n intr-un array. Să se gaseasca numărul lipsă.
// Se stie n.

function numarLipsa() {
    let n = 10;
    let arr = [10, 1, 9, 2, 8, 3, 7, 4, 6];
    
    for(let i=1; i <= n; i++) {
        let isNumberFound = false;
        for(let j=0; j < arr.length; j++) {
            if(arr[j] === i) {
                isNumberFound = true;
            }
        }
        if(!isNumberFound) {
            return i;
        }
    }

}
console.log(numarLipsa());


// Se da un array cu numere. Să se determine cate numere prime exista formate din ultimele 2 cifre ale fiecarui număr din array.

function isPrime(number) {
    for(let i=2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

function numerePrime() {
    let arr = [1111, 1111, 1111, 1332, 1444, 1117, 1212];
    let count = 0;
    for(let i=0; i < arr.length; i++) {
        let lastTwoDigits = arr[i] % 100;
        if(isPrime(lastTwoDigits)) {
            count++;
        }
        // console.log(lastTwoDigits, isPrime(lastTwoDigits));
    }
    return count;
}
console.log(numerePrime());


//https://www.pbinfo.ro/probleme/2347/furnici

