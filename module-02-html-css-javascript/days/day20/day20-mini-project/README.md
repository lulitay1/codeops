# Country Facts Page

A simple single-page application that fetches live country information
from a public API and displays it on the page.

The project is built using only:

- HTML
- CSS
- JavaScript
- Fetch API
- async/await
- DOM manipulation

No framework or external JavaScript library is used.

---

## Features

- Shows Ethiopia by default when the page loads.
- Allows the user to search for a country.
- Displays a loading message while data is being fetched.
- Displays the country's flag.
- Displays the capital.
- Displays the population.
- Displays the region.
- Displays the currencies.
- Formats population numbers with commas.
- Handles countries that cannot be found.
- Handles network/API errors.
- Checks `res.ok` before processing the response.
- Uses `createElement()` to create the displayed facts.

---

## Project Structure

```text
country-facts/
│
├── index.html
├── styles.css
├── app.js
└── README.md

How to Run

No installation or dependencies are required.

Option 1: Open directly
Put all four files in the same folder.
Double-click index.html.
The application will open in your browser.

Option 2: VS Code + Live Server
Open the project folder in VS Code.
Open index.html.
Right-click the file.
Select "Open with Live Server".
API Used