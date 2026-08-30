// =========================================
// CACHE DOM ELEMENTS
// =========================================

const form = document.querySelector("#search-form");

const countryInput = document.querySelector("#country-input");

const out = document.querySelector("#facts");


// =========================================
// RENDER A FACT
// =========================================

function renderFact(parent, label, value) {

    // Create the fact row
    const article = document.createElement("article");

    article.classList.add("fact");


    // Create the label
    const labelEl = document.createElement("span");

    labelEl.classList.add("fact-label");

    labelEl.textContent = label;


    // Create the value
    const valueEl = document.createElement("span");

    valueEl.classList.add("fact-value");

    valueEl.textContent = value;


    // Add label and value to the row
    article.append(labelEl);
    article.append(valueEl);


    // Add the row to the parent
    parent.append(article);
}


// =========================================
// SHOW COUNTRY
// =========================================

async function showCountry(countryName) {

    // =====================================
    // LOADING STATE
    // =====================================

    out.innerHTML = "";

    const loading = document.createElement("p");

    loading.classList.add("loading");

    loading.textContent = "Loading…";

    out.append(loading);


    try {

        // =================================
        // FETCH DATA
        // =================================

        const encodedCountry = encodeURIComponent(countryName);

        const res = await fetch(
            `https://restcountries.com/v3.1/name/${encodedCountry}`
        );


        // =================================
        // CHECK HTTP STATUS
        // =================================

        if (!res.ok) {
            throw new Error("Country not found");
        }


        // =================================
        // CONVERT JSON
        // =================================

        const countries = await res.json();


        // The API returns an array.
        // We use the first matching country.

        const country = countries[0];


        // =================================
        // CLEAR LOADING STATE
        // =================================

        out.innerHTML = "";


        // =================================
        // COUNTRY HEADER
        // =================================

        const countryHeader =
            document.createElement("div");

        countryHeader.classList.add("country-header");


        // Flag
        const flag = document.createElement("img");

        flag.src = country.flags.svg;

        flag.alt = `Flag of ${country.name.common}`;


        // Country name
        const countryTitle =
            document.createElement("h2");

        countryTitle.textContent =
            country.name.common;


        countryHeader.append(flag);
        countryHeader.append(countryTitle);

        out.append(countryHeader);


        // =================================
        // FACTS LIST
        // =================================

        const factsList =
            document.createElement("div");

        factsList.classList.add("facts-list");


        // ---------------------------------
        // Capital
        // ---------------------------------

        const capital =
            country.capital?.[0] || "N/A";

        renderFact(
            factsList,
            "Capital",
            capital
        );


        // ---------------------------------
        // Population
        // ---------------------------------

        const population =
            country.population.toLocaleString();

        renderFact(
            factsList,
            "Population",
            population
        );


        // ---------------------------------
        // Region
        // ---------------------------------

        renderFact(
            factsList,
            "Region",
            country.region
        );


        // ---------------------------------
        // Currencies
        // ---------------------------------

        const currencyNames =
            country.currencies
                ? Object.values(country.currencies)
                    .map(function (currency) {
                        return `${currency.name} (${currency.symbol || ""})`;
                    })
                    .join(", ")
                : "N/A";


        renderFact(
            factsList,
            "Currencies",
            currencyNames
        );


        // Add facts to the page
        out.append(factsList);

    }


    // =====================================
    // ERROR STATE
    // =====================================

    catch (error) {

        out.innerHTML = "";


        const errorMessage =
            document.createElement("p");

        errorMessage.classList.add("error");

        errorMessage.textContent =
            error.message === "Country not found"
                ? "Country not found. Please check the country name and try again."
                : "Unable to load country data. Please check your connection and try again.";


        out.append(errorMessage);

    }

}


// =========================================
// SEARCH FORM
// =========================================

form.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();


    // Read and clean input
    const countryName =
        countryInput.value.trim();


    // Validate input
    if (!countryName) {

        out.innerHTML = "";

        const message =
            document.createElement("p");

        message.classList.add("error");

        message.textContent =
            "Please enter a country name.";

        out.append(message);

        return;
    }


    // Fetch and display country
    showCountry(countryName);

});


// =========================================
// DEFAULT COUNTRY
// =========================================

// Show Ethiopia when the page first loads.

showCountry("Ethiopia");