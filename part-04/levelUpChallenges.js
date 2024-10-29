/* 
1. Write a 'for' loop that loops through the array '["green tea", "black tea", "chai", "oolong tea"]' and stops the loop when it finds '"chai"'.
    Store all teas before '"chai"' in a new array named 'selectedTeas'.
*/

let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = []

for (let index = 0; index < tea.length; index++) {
    const element = tea[index];
    if (element === "chai") {
        break;
    } else{
        selectedTeas.push(element)
    }
}
// console.log(selectedTeas);

/* 
2. Write a 'for' loop that loops through the array '["London", "New York", "Paris", "Berlin"] and skips '"Paris"'.
    Store the other cities in a new array named 'visitedCities'.
*/

let cities = ["London", "New York", "Paris", "Berlin"]; 

let visitedCities = []

for (let i = 0; i < cities.length; i++) {
    const element = cities[i];
    if (element === 'Paris') {
        continue;
    }
    visitedCities.push(element)
}

// console.log(visitedCities);

/* 
3. Use a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and stop when the number '4' is found.
    Store the numbers before '4' in an array named 'smallNumbers'.
*/

let smallNumbers = [];
let numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    if (num === 4) {
        break
    } else{
        smallNumbers.push(num)
    }
}
// console.log(smallNumbers);

/* 
4. Use a 'for-of' loop to iterate through the array '["chai", "green tea", "herbal tea", "black tea"] and skip '"herbal tea"'.
    Store the other teas in an array named 'preferredTeas'.
*/

let preferredTeas = []
let teas = ["chai", "green tea", "herbal tea", "black tea"]

for (let tea of teas) {
    if (tea === "herbal tea") {
        continue
    } else{
        // preferredTeas.unshift(tea)
        preferredTeas.push(tea)
    }
}
// console.log(preferredTeas);

/* 
5. Use a 'for-in' loop to loop through an object containing city populations.
    Stop the loop when the population of '"Berlin"' is found and store all previous cities' populations in a new object named 'cityPopulaions'. 
*/

let cityPopulaion = {
    "London": 89000000,
    "New York": 84000000,
    "Paris": 22000000,
    "Berlin": 35500000,
}
/* 
key
console.log(Object.keys(cityPopulaion)); 
*/

/* 
value
console.log(Object.values(cityPopulaion));
*/

let cityPopulaions = {};

for (const city in cityPopulaion) {
    /* 
    Key
    console.log(city); 
    */

    /* 
    value
    console.log(cityPopulaion[city]);
    */
    if (city === "Berlin") {
        break;
    }
    cityPopulaions[city] = cityPopulaion[city]
}
// console.log(cityPopulaions);

/* 
6. Use a 'for-in' loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a new object named 'largeCities'.
*/

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Paris": 2200000,
    "Berlin": 3500000,
}

let largeCities = {};

for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCities[city] = worldCities[city]
}
// console.log(largeCities);

/* 
7. Write a 'forEach' loop that iterates through the array '["earl grey", "green tea", "chai", "oolong tea"]'.
    Stop the loop when '"chai"' is found, and store all previous tea types in an array named 'avilableTeas'.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

let avilableTeas = []

teaCollection.forEach((tea) => {
    if (tea === "chai") {
        return
    }
    avilableTeas.push(tea)
})

console.log(avilableTeas);

/* 
8. Write a 'forEach' loop that iterates through the array '["Berlin", "Tokyo", "Sydney", "Paris"]'.
    Skip '"Sydney"' and store the other cities in a new array named 'traveledCities'.
*/

let citiList = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = []

citiList.forEach(function(city) {
    if (city === 'Sydney') {
        return
    }
    traveledCities.push(city)
})

console.log(traveledCities);

/* 
9. Write a 'for' loop that iterates through the array '[2, 5, 7, 9]'.
    Skip the value '7' and multiply the rest by 2. Store the results in a new array named 'doubledNumbers'.
*/

let number = [2, 5, 7, 9];
let doubledNumbers = []

for (let i = 0; i < number.length; i++) {
    num = number[i];
    if (num === 7) {
        continue;
    }
    doubledNumbers.push(num * 2)
}

console.log(doubledNumbers);

/* 
10. Use a 'for-of' loop to iterate through the array '["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]'
    and stop when the length of the current tea name is greate thean 10.
    Store the teas iterated over in an array named 'shortTeas'.
*/

let myTea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas = []

for (const tea of myTea) {
    if (tea.length > 10) {
        break
    }
    shortTeas.push(tea)
}
console.log(shortTeas);
