/* 
1. Create a Car class with brand, model, and year properties. Add a method getDetails that returns a string like "Toyota Corolla (2020)".
*/

class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `${this.brand} ${this.model} ${this.year}`
    }
}

let toyota = new Car ("Toyota", "Corolla", 2020)

/* 
2. Write a Book class with title, author, and pages properties. Create an instance of the class and log the properties to the console.
*/

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

let myBook = new Book("JavaScript", "MH Saikat", 350)

/* 
3. Create a Calculator class with methods add, subtract, multiply, and divide. Each method should take two numbers and return the result.
*/

class Calculator {
    add(a, b){
        return a + b;
    }

    subtract(a, b){
        return a - b;
    }
    
    multiply(a, b){
        return a * b;
    }

    divide(a, b){
        return a / b;
    }
}

let calc = new Calculator()

/* 
4. Create a Shape class with a getArea method that returns 0 by default. Then create a Rectangle class that extends Shape and overrides the getArea method to return the area of the rectangle.
*/

class Shape {
    getArea(){
        return 0
    }
}

class Reactangle extends Shape{
    constructor(width, height){
        super()
        this.width = width;
        this.height = height;
    }

    getArea(){
        return `${this.width * this.height}`
    }
}
let shape = new Shape()
let rectangle = new Reactangle(25, 10)

/* 
5. Write a BankAccount class with a private #balance field. Add deposit and withdraw methods to manage the balance, and a getBalance method to check the current balance.
*/

class BankAccount{
    #balance;
    constructor(){
        this.#balance = 0;
    }
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount){
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance(){
        return this.#balance
    }
}

let account = new BankAccount()

account.deposit(12500)
account.withdraw(500)

// console.log(account.getBalance());


/* 
6. Create a MathUtils class with a static method factorial(n) that calculates and returns the factorial of a number.
*/

class MathUtils{
    static factorial(n){
        if (n < 0) {
            throw new Error("Factorial is not defined for negative numbers.");
        } else if(n === undefined){
            throw new Error("Factorial is not defined for Undefined.");            
        }
        let result = 1;
        for (let i = 1; i <= n; i++) {
             result *= i;
        }
        return `Factorial of ${n} is ${result}`
    }
}
// console.log(MathUtils.factorial(0));

/* 
7. Create a Transport class with a move method that logs "Moving...". Then create two subclasses, Car and Plane, which override the move method to log "Driving..." and "Flying...", respectively. Demonstrate polymorphism by calling move on instances of both classes.
*/

class Transport {
    move(){
        return `Moving....`
    }
}

class Cars extends Transport {
    move(){
        return `Driving...`
    }
}

class Plane extends Transport {
    move(){
        return `Flying...`
    }
}

// Polymorphism Example

const transport = [new Cars(), new Plane(), new Transport()]
// transport.forEach(item => console.log(item.move()))

/* 
8. Implement an abstract Employee class with a method calculateSalary. Create two subclasses, Manager and Developer, and implement their own versions of calculateSalary.
*/

class Employee {
    constructor(name){
        if (new.target === Employee) {
            throw new Error("Cannot instantiate abstract class Employee directly.")
        }
        this.name = name;
    }
    calculateSalary(){
        throw new Error('calculateSalary method must be implemented by subclasses')
    }
}

class Manager extends Employee{
    constructor(name, baseSalary, bonus) {
        super(name);
        this.baseSalary = baseSalary;
        this.bonus = bonus
    }

    calculateSalary(){
        return `${this.name}'s Salary: ${this.baseSalary + this.bonus}`
    }
}

class Developer extends Employee{
    constructor(name, hourlyRate, hoursWorked){
        super(name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked
    }

    calculateSalary(){
        return `${this.name}'s Salary: ${this.hourlyRate + this.hoursWorked}`;
    }
}


/* 
9. Write a Person class with a private _age property. Use getters and setters to ensure age is a non-negative number.
*/

class Person {
    #age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get age() {
        return this.#age;
    }
    
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative")
        }
        this.#age = value
    }
}

/* 
10. Implement a singleton pattern using a Logger class that ensures only one instance of the class exists, regardless of how many times it's instantiated.
*/

/* 
11. Create a User class dynamically with additional methods like isAdmin or isGuest based on a configuration object.
*/

/* 
12. Implement a Flyable mixin with a fly method and a Swimmable mixin with a swim method. Use these mixins in a Bird and Fish class.

*/