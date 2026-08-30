# Birr Watch

Birr Watch is a small ETB exchange-rate application built with
HTML, CSS, and vanilla JavaScript.

The project demonstrates the four main stages:

1. Fetching and rendering
2. User interaction and state
3. Currency conversion
4. Local storage persistence

## What It Does

The application:

- Loads live exchange rates.
- Shows a loading message while rates are being fetched.
- Shows an error if the API request fails.
- Allows the user to enter an ETB amount.
- Converts the amount to a selected currency.
- Maintains a currency watchlist.
- Prevents duplicate currencies in the watchlist.
- Allows currencies to be removed.
- Shows an empty state when the watchlist is empty.
- Saves the watchlist and selected currency to localStorage.
- Restores saved information when the page is reloaded.

## API

The application uses the ExchangeRate-API public endpoint:
"https://open.er-api.com/v6/latest/ETB"