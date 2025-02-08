// Example 1
let ul = document.querySelector("#myList");
function createLi (){
    let li = document.createElement('li')
    li.textContent = "New Item"
    ul.appendChild(li)
}
createLi()

// Example 2

document.querySelector("#changeTextButton").addEventListener("click", function() {
    document.querySelector(".info").textContent = "Hello World"
})


// Example 3

document.querySelector("#toggle-btn").addEventListener("click", function(){
    document.querySelector("#box").classList.toggle("visibility");    
})

// Example 4

let inputs = document.querySelectorAll("input")
inputs.forEach((input) => {
    // console.log(input);
    // console.log(input.value);
    
})

// Example 5


document.querySelector("#highlight-p").addEventListener("click", function() {
    document.querySelectorAll("p").forEach(p => {
        p.classList.add("highlight");        
    })
    
})

// Example 6

document.getElementById('btn').addEventListener("click", function() {
    // console.log("Button Click");
    
})

// Example 7

document.addEventListener("mousemove", function(e){
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById("tracker").textContent = `Mouse Cordinates:X: ${x}, Y: ${y}`
})

// Example 8

document.querySelector("#userForm").addEventListener("submit", function(e) {
    let userName = document.querySelector('#username');
    let error = document.querySelector('.error');
    if (userName.value.trim() === '') {
        e.preventDefault()
        error.textContent = "Username must be fulfilled";
    } else{
        error.textContent = ''
    }
})

// Example 9

let menu = document.querySelector("#menu")

let firstChild = menu.querySelector('li')

if (firstChild) {
    firstChild.style.color = "red"
}

// Example 10

let container = document.querySelector('#container');
let spans = container.querySelectorAll('span');

spans.forEach(span => span.remove());

// Example 11

let table = document.createElement('table');
table.style.borderCollapse = 'collapse'
let example11 = document.querySelector("#example-11");
for (let i = 1; i <= 5; i++) {
    let row = document.createElement('tr')
    for (let j = 1; j <= 3; j++) {
        let cell = document.createElement('td');
        cell.textContent = `Row ${i}, Col ${j}`
        cell.style.border = `1px solid white`
        cell.style.padding = '8px'
        row.appendChild(cell)
    }
    table.appendChild(row)
}

example11.appendChild(table)

// Example 12

let example12 = document.querySelector('#example-12')
let dropdown = document.createElement('select');
dropdown.style.padding = '10px 20px'
dropdown.style.display = 'block'
dropdown.style.margin = '25px'

let options = ['Option 1', 'Option 2', 'Option 3'];

options.forEach(optionText => {
    let option = document.createElement('option');
    option.value = optionText;
    option.textContent = optionText;

    dropdown.appendChild(option)
})

example12.appendChild(dropdown)

// +++++++++++++++++++++++++++++ BOM +++++++++++++++++++++++++++

// Example 13
let userBrowser = document.querySelector(".userBrowser");
function detectBrowser() {
    let userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
        userBrowser.textContent = `User Browser: Chrome`
    } else if(userAgent.includes('Firefox')) {
        userBrowser.textContent = `User Browser: Firefox`
    } else if(userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        userBrowser.textContent = `User Browser: Safari`        
    } else if(userAgent.includes('Edg')){
        userBrowser.textContent = `User Browser: Edg`        
    } else if(userAgent.includes(Opera) || userAgent.includes('OPR')){
        userBrowser.textContent = `User Browser: OPR`        
    } else if(userAgent.includes('Trident') || userAgent.includes('MSIE')){
        userBrowser.textContent = `User Browser: Internet Explorer`                
    } else{
        userBrowser.textContent = `User Browser: Unknown`                

    }
}
detectBrowser()

// Example 14

function openNewWindow(){
    window.open(
        "https://www.google.com",
        "_blank",
        "width=500, height=500"
    )
}

// Example 15 

function displayURLInfo(){
    let url = window.location.href
    let protocol = window.location.protocol
    let hostname = window.location.hostname

    document.getElementById('urlInfo').innerHTML = `
    <p><strong>URL:</strong> ${url}</p>
    <p><strong>Protocol:</strong> ${protocol}</p>
    <p><strong>Hostname:</strong> ${hostname}</p>
    `
}
window.onload = displayURLInfo();

// Example 16

function screenResolution(){
    let width = window.screen.width;
    let height = window.screen.height;
    document.querySelector("#screenResolution").innerHTML = `
    <p><strong>Your Screen Resolution is: </strong> ${width}x${height}</p>
    `
}

window.onload = screenResolution();

console.log(window.screen);
