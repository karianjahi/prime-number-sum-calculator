# prime-number-sum-calculator 🧮✨  
![Repo Banner](https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png)

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub issues](https://img.shields.io/github/issues/karia njahi/prime-number-sum-calculator)
![GitHub stars](https://img.shields.io/github/stars/karia njahi/prime-number-sum-calculator?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/karia njahi/prime-number-sum-calculator)
![Node Version](https://img.shields.io/badge/node-%3E%3D18.0-green)

---

# 🧮 Prime Number Sum Calculator  
A clean, beginner-friendly JavaScript utility that calculates **the sum of all prime numbers less than or equal to a given number**.  
Ideal for learning algorithms, mathematics, and problem-solving fundamentals. 🚀

---

## 📑 Table of Contents

- [📘 Overview](#-overview)
- [✨ Features](#-features)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [🧠 How It Works](#-how-it-works)
- [🧩 Example Usage](#-example-usage)
- [🧪 User Stories](#-user-stories)
- [🎨 Visual Explanation](#-visual-explanation)
- [💡 Future Improvements](#-future-improvements)
- [📜 License](#-license)

---

## 📘 Overview

This project computes:

> **The sum of all prime numbers ≤ a given number N**  

For example:

```js
sumPrimes(10) → 17 // prime numbers ≤ 10 are: 2, 3, 5, 7
```


This project contains:

- a prime-checking function  
- a function to list all primes  
- a function to sum them  

All written in clean, readable JavaScript with no dependencies.

---

## ✨ Features

✔️ Efficient prime checking using square-root optimization  

✔️ Generates all primes up to any number  

✔️ Sums primes using functional programming (`reduce`)  

✔️ Zero dependencies  

✔️ Beginner-friendly and well-documented  

✔️ Works in `Node.js` and browsers  

---

## 📁 Project Structure
```bash
prime-number-sum-calculator/
│
├── LICENSE
├── README.md
└── index.js // main logic file
```


---

## ⚙️ Installation

Clone using SSH (recommended):

```bash
git clone git@github.com:karianjahi/prime-number-sum-calculator.git
```

Or using HTTPS:
```bash
git clone https://github.com/karia njahi/prime-number-sum-calculator.git
```

Navigate into the repo:
```bash
cd prime-number-sum-calculator
```

Run the script:
```bash
node source.js
```

## 🧠 How It Works
### 🟩 1. Check if a number is prime

Efficient, using `√n`:
```js
const isPrime = (num) => {
    if (num < 2) return false
    if (num == 2) return true
    for (let i = 2; i < Math.ceil(num**0.5) + 1; i++){
        if (num % i === 0) return false
    }
    return true
}
```

### 🟩 2. Get all primes up to N
```js
const getAllPrimeNosUpToN = (num) => {
    let primeNos = [];
    for (let i = 0; i <= num; i++) 
        if (isPrime(i)) primeNos.push(i);
    return primeNos;
}
```

### 🟩 3. Sum the primes
```js
const sumPrimes = (num) => {
    const primeNos = getAllPrimeNosUpToN(num);
    return primeNos.reduce((acc, cur) => acc + cur, 0);
}
```

## 🧩 Example Usage
```js
console.log(sumPrimes(10));    // 17
console.log(sumPrimes(29));    // 129
console.log(sumPrimes(977));   // 73156
```

## 🧪 User Stories
✔️ There should be a sumPrimes function

✔️ It should return the sum of all primes ≤ the given number

✔️ If the number is < 2, return 0

All requirements are fully met.

## 🧠 Concept Diagram
```sql
   Number N
       │
       ▼
+---------------+
| isPrime(n)?   |
+---------------+
       │true
       ▼
Collect primes ≤ N
       │
       ▼
  Sum all primes
       │
       ▼
     Result
```

## 📜 License
This project is licensed under the MIT License.
Feel free to use, modify, and learn from it! ❤️
