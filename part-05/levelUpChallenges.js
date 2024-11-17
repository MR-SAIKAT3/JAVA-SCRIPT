/* 
1. Write a function `sumArray(arr)`, that takes an array of numbers as input and returns the sum fo all the numbers in the array.
*/

function sumArray(arr){
    let sum = 0;
    arr.forEach(num => sum += num)
    return sum
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let result = sumArray(numbers)
// console.log(result);


/* 
2. Create a function `generateFuncs()` that returns an array of 5 functions. Each function should return its index in the array when called.
*/

function generateFuncs() {
    const funcs = [];
    for (let i = 0; i < 5; i++) {
        funcs.push(function(){
            return i;
        })
    }
    return funcs;
}

const funcs = generateFuncs()

// console.log(funcs[0]());


/* 
3. Write a function `checkEvenOdd(arr)` that takes an array of numbers and returns a new array where each element is either 'even' or 'odd' based on whether the corresponding number is even or odd.
*/

function checkEvenOdd(arr) {
    return arr.map(num => (num % 2 === 0 ? `even` : `odd`))
}

let numbersOfEvenOdd = [1, 2, 3, 4, 5, 6, 7]

let evenOdd = checkEvenOdd(numbersOfEvenOdd)
// console.log(evenOdd);


/* 
4. Write a function `filterPositive(arr)` that filters out and returns all positive numbers from an array.
*/

const filterPositive = (arr) => arr.filter(num => num > 0)

/* 
5. Write a function `productArray(arr)` that calculates and returns the product of all elements in a given array of numbers.
*/

function productArray(arr) {
    let product = 1;
    for (const num of arr) {
        product *= num
    }
    return product
}

/* 
6. Given an array of functions that each return a number, write a function `applyFuncs(arr)` that loops through the array, calls each function, and returns an array of results.
*/

function applyFuncs(arr){
    return arr.map(funs => funs())
}

const arrFuns = [
    () => 1,
    () => 2,
    () => 3,
    () => 4,
]

let arrResult = applyFuncs(arrFuns)

// console.log(arrResult);


/* 
7. Write a function `findMax(arr)` that takes an array of numbers and returns the maximum number in the array.
*/

function findMax(arr){
    if(arr.length === 0){
        throw new Error (`Array is empty`)
    }
    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max
}

/* 
8. Create a function `createIncrementers(n)` that returns an array of n functions. Each function should increment a unique counter starting from 1.
*/

function createIncrementers(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(function(){
            return i
        })
    }
    return arr
}

/* 
9. Write a function `reverseStrings(arr)` that takes an array of strings and returns a new array with each string reversed.
*/

function reverseStrings(arr){
    return arr.map(str => str.split('').reverse().join(''))
}

let arrStr = ["hellow", "world"]

const newArr = reverseStrings(arrStr)
// console.log(newArr);


/* 
10. Write a function `sumSquares(arr)` that returns the sum of the squares of all the numbers in an array.
*/

function sumSquares(arr) {
    let sum = 0;
    arr.forEach( (num) => {
        sum += num ** 2
    });
    return sum
}

let squarArr = [1, 2, 3, 4, 5, 6]

let sumSquare = sumSquares(squarArr)

// console.log(sumSquare);