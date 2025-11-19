/*
Building a Prime Number Sum Calculator
In this lab, we build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

User Stories:
1. We should have a `sumPrimes` function that accepts a number as an argument.
2. The `sumPrimes` function should return the sum of all prime numbers less than or equal to the provided number.
3. If the input number is less than 2, the function should return 0.
*/

const isPrime = (num) => {
    if (num < 2) return false
    if (num == 2) return true
    for (let i=2; i<Math.ceil(num**0.5) + 1; i++){
        if (num % i === 0) return false
    }
    return true
}

const getAllPrimeNosUpToN = (num) => {
    let primeNos = [];
    for (let i=0; i<num+1; i++) 
        if (isPrime(i)) primeNos.push(i);
    return primeNos
}

const sumPrimes = (num) => {
    const primeNos = getAllPrimeNosUpToN(num);
    return primeNos.reduce((acc, cur) => acc + cur, 0);
    
}

// console.log(isPrime(29))
console.log(sumPrimes(977));