// ============================================================
// CACHE DOM ELEMENTS
// ============================================================

const form = document.querySelector("#signup-form");

const nameInput = document.querySelector("#name");

const phoneInput = document.querySelector("#phone");

const errorEl = document.querySelector("#error");

const signupCount = document.querySelector("#signup-count");

const themeToggle = document.querySelector("#theme-toggle");


// ============================================================
// STORAGE KEY
// ============================================================

const SIGNUPS_KEY = "signupEntries";

const THEME_KEY = "theme";


// ============================================================
// ETHIOPIAN PHONE REGEX
// ============================================================

// Accepts:
//
// 0912345678
// 0911123456
//
// +251912345678
// +251911123456
//
// Also accepts spaces after +251:
//
// +251 912345678

const ethiopianPhoneRegex =
    /^(09\d{8}|\+251\s?9\d{8})$/;


// ============================================================
// QUESTION 1
// THEME TOGGLE + localStorage
// ============================================================


// ------------------------------------------------------------
// Restore saved theme when the page loads
// ------------------------------------------------------------

const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "Light Mode";

}


// ------------------------------------------------------------
// Change theme
// ------------------------------------------------------------

themeToggle.addEventListener("click", function () {

    // Toggle the CSS class
    document.body.classList.toggle("dark");


    // Check which theme is currently active
    const isDark =
        document.body.classList.contains("dark");


    // Save the choice
    if (isDark) {

        localStorage.setItem(THEME_KEY, "dark");

        themeToggle.textContent = "Light Mode";

    } else {

        localStorage.setItem(THEME_KEY, "light");

        themeToggle.textContent = "Dark Mode";

    }

});


// ============================================================
// QUESTION 2
// SAVE() AND LOAD() HELPERS
// ============================================================


// ------------------------------------------------------------
// SAVE
// ------------------------------------------------------------

function save(entries) {

    try {

        // Convert the JavaScript array
        // into a JSON string.

        const json = JSON.stringify(entries);


        // Save the string to localStorage.

        localStorage.setItem(SIGNUPS_KEY, json);

    }

    catch (error) {

        console.error(
            "Could not save data:",
            error
        );

    }

}


// ------------------------------------------------------------
// LOAD
// ------------------------------------------------------------

function load() {

    try {

        // Get the stored string.

        const stored =
            localStorage.getItem(SIGNUPS_KEY);


        // If nothing exists, return an empty array.

        if (stored === null) {
            return [];
        }


        // Convert JSON string back into
        // a JavaScript value.

        const entries = JSON.parse(stored);


        // Make sure the stored value is actually an array.

        if (!Array.isArray(entries)) {
            return [];
        }


        return entries;

    }

    catch (error) {

        // Handles corrupt/invalid JSON.

        console.error(
            "Could not load data:",
            error
        );

        return [];

    }

}


// ============================================================
// QUESTION 6
// SHOW HOW MANY PEOPLE HAVE SIGNED UP
// ============================================================

function updateSignupCount() {

    const entries = load();

    signupCount.textContent = entries.length;

}


// ============================================================
// FORM SUBMISSION
// ============================================================

form.addEventListener("submit", function (event) {

    // --------------------------------------------------------
    // Prevent the browser from refreshing
    // --------------------------------------------------------

    event.preventDefault();


    // Clear previous error
    errorEl.textContent = "";


    // --------------------------------------------------------
    // Read and trim the values
    // --------------------------------------------------------

    const name =
        nameInput.value.trim();

    const phone =
        phoneInput.value.trim();


    // --------------------------------------------------------
    // VALIDATION 1
    // Name
    // --------------------------------------------------------

    if (name.length < 2) {

        errorEl.textContent =
            "Name must be at least 2 characters.";

        return;
    }


    // --------------------------------------------------------
    // VALIDATION 2
    // Ethiopian phone number
    // --------------------------------------------------------

    if (!ethiopianPhoneRegex.test(phone)) {

        errorEl.textContent =
            "Please enter a valid Ethiopian phone number.";

        return;
    }


    // --------------------------------------------------------
    // SUCCESS
    // --------------------------------------------------------

    // Load existing entries
    const entries = load();


    // Create new entry
    const newEntry = {
        name: name,
        phone: phone
    };


    // Add new entry to the array
    entries.push(newEntry);


    // Save the updated array
    save(entries);


    // Clear the form
    form.reset();


    // Update number of signups
    updateSignupCount();


    // Show success message
    errorEl.textContent =
        "Signup successful!";

});


// ============================================================
// RUN WHEN PAGE LOADS
// ============================================================

updateSignupCount();