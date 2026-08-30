// ==========================================
// QUESTION 1
// Select an element, change its text,
// and toggle a CSS class
// ==========================================

const message = document.querySelector("#message");

const changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", function () {

    // Change the text
    message.textContent = "The text has been changed!";

    // Add/remove the CSS class
    message.classList.toggle("highlight");

});


// ==========================================
// QUESTION 2
// Create <li> elements from an array
// ==========================================

const cities = [
    "Addis Ababa",
    "Gondar",
    "Hawassa"
];

const cityList = document.querySelector("#cityList");

cities.forEach(function (city) {

    // Create a new <li>
    const li = document.createElement("li");

    // Put the city name inside the <li>
    li.textContent = city;

    // Add the <li> to the <ul>
    cityList.append(li);

});


// ==========================================
// QUESTION 3
// Event target and event bubbling
// ==========================================

const clickBtn = document.querySelector("#clickBtn");

const buttonContainer = document.querySelector("#buttonContainer");


// Listener on the button
clickBtn.addEventListener("click", function (event) {

    console.log("Button listener");

    console.log("event.target:", event.target);

});


// Listener on the parent div
buttonContainer.addEventListener("click", function (event) {

    console.log("Div listener");

});


// ==========================================
// QUESTION 4
// Event delegation
// ==========================================

const itemList = document.querySelector("#itemList");


// One listener on the parent <ul>
itemList.addEventListener("click", function (event) {

    // Check if the clicked element is a delete button
    if (event.target.classList.contains("delete-btn")) {

        // Find the <li> containing the button
        const item = event.target.parentElement;

        // Remove the <li>
        item.remove();

    }

});


// ==========================================
// QUESTION 5
// Form handling
// ==========================================

const nameForm = document.querySelector("#nameForm");

const nameInput = document.querySelector("#nameInput");

const nameList = document.querySelector("#nameList");


nameForm.addEventListener("submit", function (event) {

    // Prevent the browser from refreshing
    event.preventDefault();


    // Read the input value
    const name = nameInput.value;


    // Don't add an empty value
    if (name.trim() === "") {
        return;
    }


    // Create a new <li>
    const li = document.createElement("li");


    // Put the input value inside the <li>
    li.textContent = name;


    // Add the <li> to the list
    nameList.append(li);


    // Clear the input field
    nameInput.value = "";

});