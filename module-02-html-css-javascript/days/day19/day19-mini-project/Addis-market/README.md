# Addis Market Shopping List

A simple interactive shopping-list application built entirely with
HTML, CSS, and vanilla JavaScript.

This project is the foundation for a larger application that will later
be extended with browser storage and a live API.

## Features

- Add a shopping item with a name and ETB price.
- Prevent the form from reloading the page.
- Validate that the item name and price are provided.
- Dynamically create shopping-list rows using `createElement()`.
- Add new rows using `append()`.
- Mark an item as bought by clicking its row.
- Remove items with a Delete button.
- Use one delegated click listener on the list container.
- Display a live running total of all item prices.
- Update the total when items are added or removed.

## Project Structure

```text
addis-market/
│
├── index.html
├── styles.css
├── app.js
└── README.md