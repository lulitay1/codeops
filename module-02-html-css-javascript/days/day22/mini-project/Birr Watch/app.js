// ============================================================
// STATE
// ============================================================

const state = {

    base: "ETB",

    rates: {},

    watchlist: [],

    amount: null,

    currency: "USD",

    loading: true,

    error: ""

};


// ============================================================
// API
// ============================================================

const API =
    "https://open.er-api.com/v6/latest/ETB";


// ============================================================
// CACHE DOM ELEMENTS
// ============================================================

const status =
    document.querySelector("#status");

const select =
    document.querySelector("#currency");

const form =
    document.querySelector("#convert-form");

const amount =
    document.querySelector("#amount");

const result =
    document.querySelector("#result");

const addBtn =
    document.querySelector("#watch");

const watchUl =
    document.querySelector("#watchlist");


// ============================================================
// LOAD RATES
// ============================================================

async function loadRates() {

    state.loading = true;

    state.error = "";

    render();


    try {

        const res =
            await fetch(API);


        // fetch does not reject for HTTP errors,
        // so we check res.ok ourselves.

        if (!res.ok) {

            throw new Error(
                "HTTP " + res.status
            );

        }


        const data =
            await res.json();


        // Store rates in state

        state.rates =
            data.rates;


        // Make sure the saved currency
        // exists in the new API data.

        if (!state.rates[state.currency]) {

            state.currency = "USD";

        }


        state.loading = false;

        state.error = "";

    }

    catch (err) {

        state.loading = false;

        state.error =
            "Could not load rates.";

    }


    render();

}


// ============================================================
// RENDER
// ============================================================

function render() {

    // ========================================================
    // STATUS
    // ========================================================

    if (state.loading) {

        status.textContent =
            "Loading rates…";

    }

    else if (state.error) {

        status.textContent =
            state.error;

    }

    else {

        status.textContent = "";

    }


    // ========================================================
    // CURRENCY DROPDOWN
    // ========================================================

    select.innerHTML = "";


    const codes =
        Object.keys(state.rates);


    codes.forEach(function (code) {

        const option =
            document.createElement("option");


        option.value = code;

        option.textContent = code;


        if (code === state.currency) {

            option.selected = true;

        }


        select.append(option);

    });


    // ========================================================
    // CONVERSION RESULT
    // ========================================================

    if (
        state.amount !== null &&
        state.rates[state.currency]
    ) {

        const rate =
            state.rates[state.currency];


        const converted =
            state.amount * rate;


        result.textContent =
            `${state.amount.toLocaleString()} ETB = ` +
            `${converted.toFixed(2)} ${state.currency}`;

    }

    else {

        result.textContent = "";

    }


    // ========================================================
    // WATCHLIST
    // ========================================================

    renderWatchlist();

}


// ============================================================
// CONVERSION FORM
// ============================================================

form.addEventListener("submit", function (e) {

    e.preventDefault();


    const value =
        amount.value.trim();


    const amt =
        Number(value);


    // Reject empty input

    if (!value) {

        result.textContent =
            "Enter a valid amount.";

        return;

    }


    // Reject non-number, zero and negative numbers

    if (
        !Number.isFinite(amt) ||
        amt <= 0
    ) {

        result.textContent =
            "Enter a valid amount.";

        return;

    }


    // Update state

    state.amount = amt;

    state.currency = select.value;


    // Render from state

    render();

});


// ============================================================
// CURRENCY CHANGE
// ============================================================

select.addEventListener("change", function () {

    // Update state

    state.currency =
        select.value;


    // Save the last selected currency

    save();


    // Re-render

    render();

});


// ============================================================
// ADD TO WATCHLIST
// ============================================================

addBtn.addEventListener("click", function () {

    const currency =
        state.currency;


    // Don't add duplicates

    if (
        state.watchlist.includes(currency)
    ) {

        return;

    }


    // Update state

    state.watchlist.push(currency);


    // Save state

    save();


    // Re-render

    render();

});


// ============================================================
// RENDER WATCHLIST
// ============================================================

function renderWatchlist() {

    // Clear the current list

    watchUl.innerHTML = "";


    // Empty state

    if (state.watchlist.length === 0) {

        const empty =
            document.createElement("li");


        empty.textContent =
            "No currencies yet.";


        watchUl.append(empty);

        return;

    }


    // Render every currency from state

    state.watchlist.forEach(function (currency) {

        const li =
            document.createElement("li");


        const text =
            document.createElement("span");


        const rate =
            state.rates[currency];


        text.textContent =
            `1 ETB = ${rate} ${currency}`;


        const removeBtn =
            document.createElement("button");


        removeBtn.classList.add("rm");

        removeBtn.dataset.currency =
            currency;

        removeBtn.textContent =
            "Remove";


        li.append(text);

        li.append(removeBtn);

        watchUl.append(li);

    });

}


// ============================================================
// DELEGATED WATCHLIST LISTENER
// ============================================================

watchUl.addEventListener("click", function (e) {

    // Only respond to Remove buttons

    if (!e.target.matches(".rm")) {

        return;

    }


    const currency =
        e.target.dataset.currency;


    // Update state

    state.watchlist =
        state.watchlist.filter(function (item) {

            return item !== currency;

        });


    // Save updated state

    save();


    // Re-render

    render();

});


// ============================================================
// LOCAL STORAGE KEY
// ============================================================

const KEY =
    "birrwatch";


// ============================================================
// SAVE
// ============================================================

function save() {

    const data = {

        watchlist: state.watchlist,

        currency: state.currency

    };


    localStorage.setItem(
        KEY,
        JSON.stringify(data)
    );

}


// ============================================================
// LOAD
// ============================================================

function load() {

    try {

        const saved =
            localStorage.getItem(KEY);


        // Nothing saved yet

        if (!saved) {

            return;

        }


        const data =
            JSON.parse(saved);


        // Make sure watchlist is actually an array

        if (
            Array.isArray(data.watchlist)
        ) {

            state.watchlist =
                data.watchlist;

        }


        // Make sure currency is a string

        if (
            typeof data.currency === "string"
        ) {

            state.currency =
                data.currency;

        }

    }

    catch (err) {

        // Ignore corrupt localStorage
        // and keep the default state.

        state.watchlist = [];

        state.currency = "USD";

    }

}


// ============================================================
// INITIALIZE
// ============================================================

async function init() {

    // Restore saved state first

    load();


    // Fetch current live rates

    await loadRates();

}


// Start the application

init();