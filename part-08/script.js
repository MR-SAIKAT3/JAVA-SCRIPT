// Example 1

document
    .getElementById('changeTextButton')
    .addEventListener('click', function(){
        // console.log(this);
        let paragraph = document.getElementById("myParagraph");
        // console.log(paragraph);
        paragraph.textContent = 'The paragraph is change!'
    })

// Example 2 

document
    .getElementById("highlightFirstCity")
    .addEventListener('click', function(){
        let citiesList = document.getElementById("citiesList");
        citiesList.firstElementChild.classList.add('highlight')
        
    })

// Example 3

document.getElementById("changeOrder").addEventListener('click', function(){
    let coffeeType = document.getElementById('coffeeType')
    coffeeType.textContent = 'Espresso'
    // coffeeType.style.background = "brown"
    // coffeeType.style.padding = "5px"
})

// Example 4

document.getElementById("addNewItem").addEventListener('click', function() {

    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";
    let shoppingList = document.getElementById("shoppingList");
    shoppingList.appendChild(newItem)    
})

// Example 5

document.getElementById("removeLastTask").addEventListener('click', function(){
    let taskList = document.getElementById("taskList");
    
    taskList.lastElementChild.remove()
})

// Example 6

document.getElementById("clickMeButton").addEventListener('click', function() {
    alert('Hey there')
})

// Example 7

document.getElementById("teaList").addEventListener('click',function(e){
    if (e.target && e.target.matches('.teaItem')) {
        e.target.classList = "highlight";
        alert('You click on' + e.target.textContent)
    }
})

// Example 8

document.getElementById("feedbackForm").addEventListener('submit', function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
    
})

// Example 9

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded";
})

// Example 10

document.getElementById("toggleHighlight").addEventListener('click', function(){
    let descriptionText = document.getElementById("descriptionText");

    descriptionText.classList.toggle('highlight')
})