function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function getPosInt() {
    while (true) {
        let input = prompt("Enter a positive integer");
        let num = Number(input);

        if (!isNaN(num) && num >= 0 && Number.isInteger(num)) {
            return num; 
        } 
    }
}

function findSmallerPrimes(num) {
    let primes = [];
    for (let i = 2; i < num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
let inputNumber = getPosInt();
let primeNumbers = findSmallerPrimes(inputNumber);
alert("For n = " + inputNumber + " prime numbers are " + primeNumbers.join(", "));