// ============================================================
// CACHE DOM ELEMENTS
// ============================================================

const statusEl = document.querySelector("#status");

const form = document.querySelector("#converter-form");

const amountInput = document.querySelector("#amount");

const currencySelect = document.querySelector("#currency");

const resultEl = document.querySelector("#result");

const watchlistEl = document.querySelector("#watchlist");


// ============================================================
// STATE
// ============================================================

const state = {

    rates: {},

    watchlist: [],

    currency: "USD",

    amount: 0

};


// ============================================================
// API
// ============================================================

const API_URL =
    "https://open.er-api.com/v6/latest/ETB";


// ============================================================
// LOAD RATES
// ============================================================

async function loadRates() {

    statusEl.textContent = "Loading exchange rates...";

    statusEl.className = "";


    try {

        const response =
            await fetch(API_URL);


        if (!response.ok) {

            throw new Error(
                "Unable to load exchange rates."
            );

        }


        const data =
            await response.json();


        // Store API data in state
        state.rates = data.rates;


        statusEl.textContent =
            "Exchange rates loaded.";

        statusEl.className = "success";


        render();

    }

    catch (error) {

        statusEl.textContent =
            "Could not load exchange rates. Please try again.";

        statusEl.className = "error";

    }

}


// ============================================================
// RENDER
// ============================================================

function render() {

    // --------------------------------------------------------
    // Render currency dropdown
    // --------------------------------------------------------

    currencySelect.innerHTML = "";


    const currencies =
        Object.keys(state.rates);


    currencies.forEach(function (currency) {

        const option =
            document.createElement("option");

        option.value = currency;

        option.textContent = currency;


        if (currency === state.currency) {

            option.selected = true;

        }


        currencySelect.append(option);

    });


    // --------------------------------------------------------
    // Render watchlist
    // --------------------------------------------------------

    watchlistEl.innerHTML = "";


    if (state.watchlist.length === 0) {

        const empty =
            document.createElement("p");

        empty.classList.add("empty");

        empty.textContent =
            "Your watchlist is empty.";

        watchlistEl.append(empty);

    }


    state.watchlist.forEach(function (currency) {

        const item =
            document.createElement("div");

        item.classList.add("watch-item");


        const name =
            document.createElement("span");

        name.textContent = currency;


        const remove =
            document.createElement("button");

        remove.classList.add("remove-btn");

        remove.dataset.currency = currency;

        remove.textContent = "Remove";


        item.append(name);
        item.append(remove);


        watchlistEl.append(item);

    });

}


// ============================================================
// CONVERSION
// ============================================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    const amount =
        Number(amountInput.value);

    const currency =
        currencySelect.value;


    // Validate amount

    if (
        !amountInput.value.trim() ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        resultEl.textContent =
            "Please enter a valid amount greater than zero.";

        return;

    }


    // Update state

    state.amount = amount;

    state.currency = currency;


    // Get exchange rate

    const rate =
        state.rates[currency];


    // Convert ETB to selected currency

    const converted =
        amount * rate;


    resultEl.textContent =
        `${amount.toLocaleString()} ETB = ` +
        `${converted.toFixed(4)} ${currency}`;

});


// ============================================================
// CURRENCY CHANGE
// ============================================================

currencySelect.addEventListener("change", function () {

    state.currency =
        currencySelect.value;

});


// ============================================================
// WATCHLIST DELEGATION
// ============================================================

watchlistEl.addEventListener("click", function (event) {

    if (!event.target.matches(".remove-btn")) {
        return;
    }


    const currency =
        event.target.dataset.currency;


    state.watchlist =
        state.watchlist.filter(function (item) {

            return item !== currency;

        });


    saveState();

    render();

});


// ============================================================
// ADD CURRENCY TO WATCHLIST
// ============================================================

// Add the selected currency when it is changed.
// This is a simple interaction for this exercise.

currencySelect.addEventListener("dblclick", function () {

    const currency =
        currencySelect.value;


    if (!state.watchlist.includes(currency)) {

        state.watchlist.push(currency);

    }


    saveState();

    render();

});


// ============================================================
// SAVE STATE
// ============================================================

function saveState() {

    const data = {

        watchlist: state.watchlist,

        currency: state.currency

    };


    localStorage.setItem(
        "birrWatchState",
        JSON.stringify(data)
    );

}


// ============================================================
// LOAD STATE
// ============================================================

function loadState() {

    try {

        const stored =
            localStorage.getItem("birrWatchState");


        if (stored === null) {
            return;
        }


        const data =
            JSON.parse(stored);


        if (Array.isArray(data.watchlist)) {

            state.watchlist =
                data.watchlist;

        }


        if (typeof data.currency === "string") {

            state.currency =
                data.currency;

        }

    }

    catch (error) {

        console.error(
            "Could not restore saved state."
        );

    }

}


// ============================================================
// START APPLICATION
// ============================================================

loadState();

loadRates();