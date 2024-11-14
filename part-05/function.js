/* 
1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and return a string like '"Making green tea"' when called with '"green tea"'.
    Store the result in a variable anmed 'teaOrder'
*/

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
}
let teaOrder = makeTea("green tea")

/* 
2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like '"Order confirmed for chai"'.
    Call the confirmOrder form within 'orderTea' and return this result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`
    }
    return confirmOrder();
}
let orderConfirmation = orderTea('green tea')
// console.log(orderConfirmation);

/* 
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and quantity'.
    Store the result in a variable named 'totalCost'.
*/
const calculateTotal = (price, quantity) => {
    let total = price * quantity;
    return total;
}
let totalCost = calculateTotal(5, 2)
// console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea` as a parameter and call it with the argument `"earl grey"`.
Return the result of calling `makeTea`
*/
function makeTea(typeOfTea) {
    return `MakeTea: ${typeOfTea}`
}

function processTeaOrder (teaFunction) {
    return teaFunction(`earl grey`)
}
let order = processTeaOrder(makeTea)
console.log(order);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
Store the return function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
    return function(teaType) {
        return `Making: ${teaType}`
    }
}
let teaMaker = createTeaMaker()
let result = teaMaker("green tea")
console.log(result);
