function Person(name) {
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

let saikat = new Person('Saikat');

saikat.greet()