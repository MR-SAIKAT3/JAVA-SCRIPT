let car = {
    make:"Toyota",
    model:"camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    }
}

// console.log(car.start());

function Person (name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John", "20")
// console.log(john);

function Animal (type) {
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.hites = function(){
    return `Custom method ${this}`
}

let myArr = [1, 2, 3]
let myNewArr = [1, 2, 3, 4, 5]

// console.log(myArr.hites());
// console.log(myNewArr.hites());

class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive(){
        return `${this.make}: This is an Inheritance example`
    }
}

let myCar = new Car("Toyota", "Corolla")



// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla")
// console.log(vehOne.make);

// Encapsulation

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return `$${this.#balance}`
    }
}

let newAccount = new BankAccount()
newAccount.deposit(12454545);

// console.log(newAccount.getBalance());

// Abstraction

class CoffeMachine {
    start(){
        //DB Call
        return `Starting the machine...`
    }

    brewCoffee(){
        //
        // 
        return `Brewing coffee`
    }
    pressStartButton(){
        let msgone = this.start()
        let msgTwo = this.brewCoffee()

        return `${msgone} + ${msgTwo}`
    }
}

let myMachine = new CoffeMachine()

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {

    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird {

    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());


// static method

class Calculator {
    static add(a, b){
        return a + b
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2, 3));

// console.log(Calculator.add(1, 3));


// getters and setters

class Employee{
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }

    get salary() {
        return this._salary
    }

    set salary(value) {
        if (value < 0) {
            throw new Error("Invalid Salary")
        }
        this._salary = value
    }
}

let emp = new Employee("Saikat", -1200)
console.log(emp);

class Employe{
    #salary
    constructor(name, salary){
        if (salary < 0) {
            throw new Error("Salary cannot be in negative")
        }
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if (value < 0) {
            console.error("Invalid Salary")
        } else{
            this._salary = value
        }
    }
}

let empp = new Employe("Alice", 50000)
// console.log(empp._salary);
// empp.salary = -5000



