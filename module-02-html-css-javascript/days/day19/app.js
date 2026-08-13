"use strict";

let items = [];

const form = document.querySelector("#groceryForm");
const input = document.querySelector("#itemInput");
const list = document.querySelector("#list");
const itemCount = document.querySelector("#itemCount");

function render() {
    list.innerHtml = "";

    items.forEach(item => {
        const li = document.createElement("li");
        li.dataset.id = item.id;

        if (item.done){
            li.classList.add("done");
        }

        li.innerHTML = `
            <span>${item.name}</span>
            <button type="button" data-action="remove">Remove</button>
         `;

    });
    const remaining = items.filter(item => !item.done).length;

         itemCount.textContent = `${remaining} ${remaining === 1 ? "item" : "items"} remaining`;

}
form.addEventListener("submit", event => {
    event.preventDefault();

     const name = input.value.trim();

     if (!name) {
        return;
    }
    // Add the new item to the state
    items.push({
        id: Date.now(),
        name: name,
        done: false
    });
    input.value = "";

    // Update the page
    render();
},
list.addEventListener("click", event =>{
    const button= event.target.closest("button");
    
    if (!button){
        return;
    }

    const li = button.closest("li");
    const id = Number(li.dataset.id);
    if (button.dataset.action === "remove") {

        // Remove the matching item from the array
        items = items.filter(item => item.id !== id);

        // Update the page
        render();
    }
}),
list.addEventListener("click", event => {

    // Don't toggle when clicking the Remove button
    if (event.target.closest("button")) {
        return;
    }

    // Find the <li> that was clicked
    const li = event.target.closest("li");

    // If there isn't an <li>, stop
    if (!li) {
               return;
    }

    // Get its ID
    const id = Number(li.dataset.id);

    // Find the matching item in the array
    const item = items.find(item => item.id === id);

    // Toggle done
    item.done = !item.done;

    // Update the page
    render();
}))

//initial render
render();

