let computer = {cpu: 12};

let lenovo = {
    screen: "HD",
    __proto__: computer,

};

let topHardware = {};

// console.log(`Lenovo`, lenovo.__proto__);

let genericCar = {tyres: 4};

let tesla = {
    driver: "AI",
}

Object.setPrototypeOf(tesla, genericCar);

console.log(`Tesla`, Object.getPrototypeOf(tesla));
console.log(`Tesla`, tesla.hasOwnProperty("tyres"));

