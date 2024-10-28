// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// boolean

let isActive = true
let isReallyActive = new Boolean(true) //not recommended

// null and undefined

let firstname = null;
let lastname = undefined;

// console.log(firstname);
// console.log(lastname);

//String

let myString = "Hello";
let myStringOne = 'hola';
let username = "saikat";

let oldGreet = myString + " " + "mh saikt";
// console.log(oldGreet);

let greetMessage = `Hello ${username}!`;
let demoOne = `Value is ${2 * 2}`;

// console.log(demoOne);

// console.log(greetMessage);

// symbol

let sm1 = Symbol('saikat');
let sm2 = Symbol('saikat');

console.log(sm1);
console.log(sm1 == sm2);



