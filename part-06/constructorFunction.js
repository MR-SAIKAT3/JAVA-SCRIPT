function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car (make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry")
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari")
// console.log(myNewCar);


function Tea(type) {
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}`
    }
}

let lemoneTea = new Tea("lemon Tea")

// console.log(lemoneTea.describe());

function Animal (species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
// console.log(dog.sound());

let cat = new Animal("Cat")
// console.log(cat.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new Keyword")
    }
    this.name = name
}

let tea = new Drink("Tea");
let coffee = Drink("Coffe")


