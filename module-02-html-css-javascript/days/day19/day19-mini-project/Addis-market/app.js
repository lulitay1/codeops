// =========================================
// CACHE DOM ELEMENTS
// =========================================

const form = document.querySelector("#add-form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const list = document.querySelector("#list");
const totalEl = document.querySelector("#total");
const emptyMessage = document.querySelector("#empty-message");


// =========================================
// ADD A NEW ROW
// =========================================

function addRow(itemName, itemPrice) {

    // Create the list item
    const li = document.createElement("li");

    // Store the price on the row
    li.dataset.price = itemPrice;


    // Create container for item information
    const itemInfo = document.createElement("div");

    itemInfo.classList.add("item-info");


    // Create item name
    const nameEl = document.createElement("span");

    nameEl.classList.add("item-name");

    nameEl.textContent = itemName;


    // Create item price
    const priceEl = document.createElement("span");

    priceEl.classList.add("item-price");

    priceEl.textContent = `${itemPrice.toFixed(2)} ETB`;


    // Put name and price inside item-info
    itemInfo.append(nameEl);
    itemInfo.append(priceEl);


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.classList.add("del");

    deleteButton.textContent = "Delete";


    // Put everything inside the li
    li.append(itemInfo);
    li.append(deleteButton);


    // Add the row to the list
    list.append(li);


    // Hide empty message
    emptyMessage.hidden = true;
}


// =========================================
// UPDATE TOTAL
// =========================================

function updateTotal() {

    let total = 0;


    // Get all current rows
    const rows = list.querySelectorAll("li");


    // Add the price of each row
    rows.forEach(function (row) {

        total += Number(row.dataset.price);

    });


    // Display the total
    totalEl.textContent = total.toFixed(2);


    // Show empty message if there are no items
    if (rows.length === 0) {
        emptyMessage.hidden = false;
    } else {
        emptyMessage.hidden = true;
    }
}


// =========================================
// FORM SUBMIT
// =========================================

form.addEventListener("submit", function (e) {

    // Prevent page reload
    e.preventDefault();


    // Read and clean the input values
    const itemName = name.value.trim();

    const itemPrice = Number(price.value);


    // Validate both fields
    if (!itemName || !price.value.trim()) {
        alert("Please enter both an item name and a price.");
        return;
    }


    // Make sure the price is valid
    if (!Number.isFinite(itemPrice) || itemPrice <= 0) {
        alert("Please enter a valid price greater than 0.");
        return;
    }


    // Create and add the row
    addRow(itemName, itemPrice);


    // Clear the form
    form.reset();


    // Update the running total
    updateTotal();

});


// =========================================
// DELEGATED LISTENER
// =========================================

list.addEventListener("click", function (e) {

    // DELETE ITEM
    if (e.target.matches(".del")) {

        // Find the row containing the button
        const row = e.target.closest("li");

        // Remove the row
        row.remove();

        // Update total after removing
        updateTotal();

    }


    // TOGGLE BOUGHT STATE
    else if (e.target.matches("li")) {

        // Toggle the bought class
        e.target.classList.toggle("bought");

    }

});