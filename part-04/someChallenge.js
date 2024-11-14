// Filter Even Numbers

let numbers = [1, 45, 356, 656, 222, 839, 224, 9922, 93939, 2099292, 993];
let evenNumber = [];
let oddNumber = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumber.push(numbers[i]);
  } else {
    oddNumber.push(numbers[i]);
  }
}
// console.log(evenNumber);
// console.log(oddNumber);

// Sum of Numbers

function sum(n) {
  let sumOfNumbers = 0;
  for (let i = 1; i <= n; i++) {
    sumOfNumbers = sumOfNumbers + i;
  }
  // console.log(sumOfNumbers);
}
sum(5);

// Factorial Calculation

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  // console.log(result);
}

factorial(11);

// Array Looping

// Reverse an Array

function reverseAnArray(array) {
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  // console.log(reverse);
}

reverseAnArray(["Saikat", "Ram", "Khalil"]);

// Reverse an Array using method

let arr = ["Saikat", "Ram", "Khalil"];

let reverseArr = [];

for (let i = 0; i < arr.length; i++) {
  reverseArr = arr.reverse();
}
// console.log(reverseArr);
// console.log(arr);        // interesting

// Find Maximum in Array

function maxValue(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  // console.log(max);
}

maxValue([2, 3, 6, 78, 2, 6, 3, 7, 20, 45, 88, 100, 500]);

// Count Occurrences

function countC(arr) {
  let count = 0;
  for (const element of arr) {
    for (const value of element) {
      if (value === "c" || value === "C") {
        count++;
      }
    }
  }
  console.log(`On this array input c in ${count} times`);
}

// countC(["Calcium", "Cal"])

// Count Occurrences another way

function countOccurrence(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  console.log(count);
}

// countOccurrence(["Saikat", "Ram", "Saikat","Khalil"], "Saikat")

// Count Vowels

function countVowels(arr) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (const element of arr) {
    for (const word of element) {
      if (vowels.includes(word)) {
        count++;
      }
    }
  }
  console.log(`On this array available vowels ${count}`);
}
countVowels(["Saikat", "Ram", "Khalil", "Antor"]);
