// =========================================
// CACHE DOM ELEMENTS
// =========================================

const form = document.querySelector("#signup-form");

const nameInput = document.querySelector("#name");

const phoneInput = document.querySelector("#phone");

const errorEl = document.querySelector("#error");

const signupCount = document.querySelector("#signup-count");


// =========================================
// PHONE REGEX
// =========================================

const PHONE = /^(?:\+251|0)9\d{8}$/;


// =========================================
// STORAGE KEY
// =========================================

const STORAGE_KEY = "signupEntries";


// =========================================
// VALIDATE FORM
// =========================================

function validate(name, phone) {

    // Check name first
    if (name.trim().length < 2) {

        return "Enter your full name.";

    }


    // Check phone second
    if (!PHONE.test(phone)) {

        return "Enter a valid Ethiopian phone number.";

    }


    // Empty string means everything is valid
    return "";
}


// =========================================
// SAVE ENTRIES
// =========================================

function saveEntries(entries) {

    try {

        const json = JSON.stringify(entries);

        localStorage.setItem(STORAGE_KEY, json);

    }

    catch (error) {

        console.error(
            "Could not save signup data:",
            error
        );

    }

}


// =========================================
// LOAD ENTRIES
// =========================================

function loadEntries() {

    try {

        const stored =
            localStorage.getItem(STORAGE_KEY);


        // No saved data
        if (stored === null) {

            return [];

        }


        const entries =
            JSON.parse(stored);


        // Make sure the stored data is an array
        if (!Array.isArray(entries)) {

            return [];

        }


        return entries;

    }

    catch (error) {

        // Handles corrupt JSON
        console.error(
            "Could not load signup data:",
            error
        );

        return [];

    }

}


// =========================================
// UPDATE SIGNUP COUNT
// =========================================

function updateSignupCount() {

    const entries = loadEntries();

    signupCount.textContent = entries.length;

}


// =========================================
// FORM SUBMISSION
// =========================================

form.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();


    // Clear previous error
    errorEl.textContent = "";


    // Read and trim values
    const name =
        nameInput.value.trim();

    const phone =
        phoneInput.value.trim();


    // Validate
    const errorMessage =
        validate(name, phone);


    // If there is an error, show it
    if (errorMessage) {

        errorEl.textContent = errorMessage;

        return;

    }


    // =====================================
    // VALID ENTRY
    // =====================================

    // Get existing entries
    const entries = loadEntries();


    // Create the new entry
    const newEntry = {
        name: name,
        phone: phone
    };


    // Add the new entry
    entries.push(newEntry);


    // Save the updated array as JSON
    saveEntries(entries);


    // Clear the form
    form.reset();


    // Show success message
    errorEl.textContent =
        "Signup successful!";


    // Update the count
    updateSignupCount();

});


// =========================================
// RESTORE DATA ON PAGE LOAD
// =========================================

updateSignupCount();