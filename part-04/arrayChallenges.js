/*
1. Declate an array named 'teaFlavors' that contains the strings '"green tea"', '"black tea"', and '"oolong tea"',
    Access the first element of the array and store it in a variable named 'firstTea' .
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"]
let firstTea = teaFlavors[0]


/* 
2. Declate an array named 'cities' containing '"London"', '"Tokyo"', '"Paris"' and '"New York"'. 
    Access the third element in the array and sored it in a varibles named 'favoriteCity'
 */

let cities = ["London", "Tokyo", "Paris", "New York"]
let favoriteCity = cities[2]


/* 
3. You have an array named 'teaTypes' containing '"herbal tea"', '"white tea"', '"masala chai"'.
    Change the second element of the array to '"jasmine tea".
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea" 

/* 
4. Declate an array named 'citiesVidited' containing '"Mumbai"' and '"Sydney"'
    Add '"Berlin"' to the array using the 'push' method.
*/

let citiesVidited = ["Mumbai", "Sydney"]
// citiesVidited[citiesVidited.length] = "Berlin"
citiesVidited.push("Berlin")

/* 
5. You have an array named 'teaOrders' with '"chai"', '"iced tea"', '"matcha"' and '"earl grey"'.
    Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
let lastOrder = teaOrders.pop()
// console.log(teaOrders);
// console.log(lastOrder);

/* 
6. You have an array named 'popularTeas' containing '"green tea"', '"oolong tea"', and '"chai"'.
    Create a soft copy of this array named 'softCopyTeas'.
*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas
popularTeas.pop()

// console.log(popularTeas);
// console.log(softCopyTeas);

/* 
7. You have an array named 'topCities' containing '"Berlin"', '"Singapore"', '"New York"' .
    Create a hard copy of this array named 'hardCopyCities'
*/

let topCities = ["Berlin", "Singapore", "New York"]
// let hardCopyCities = topCities.slice
let hardCopyCities = [...topCities]
topCities.pop()

/* 
8. You have two arrays: 'europeanCities' containing '"Paris"' and '"Rome" and 'asianCities' containing '"Tokyo"' and '"Bangkok"'.
    Merge these two array into a new array named 'worldCities'.
*/

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]

// let worldCities = europeanCities.concat(asianCities)
let worldCities = [...europeanCities, ...asianCities]

console.log(worldCities);

/* 
9. You have an array named 'teaMenu' containing '"masala chai"', '"oolong tea"', '"green tea"', and '"earl grey"'.
    Find the length of the array and store it in a variable named 'menuLength'.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
const menuLength = teaMenu.length;
console.log(menuLength);

/* 
10. You have an array named 'cityBucktList' containing '"Kyoto"', '"London"', '"Cape Town"', and '"Vancouver"' .
    Check if '"London"' is in the array and store the result in a variable named 'isLondonInList'.
*/

let cityBucktList = ["Kyoto", "London", "Cape Town", "Vancouver"]

let isLondonInList = cityBucktList.includes("London")
console.log(isLondonInList);
