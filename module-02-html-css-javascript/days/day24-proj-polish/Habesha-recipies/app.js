// ============================================================
// CONSTANTS
// ============================================================

const DATA_URL = "data/recipes.json";

const STORAGE_KEY = "habeshaRecipesCookbook";

const PHONE_REGEX = /^(?:\+251|0)9\d{8}$/;


// ============================================================
// STATE
// ============================================================

const state = {

    recipes: [],

    cookbook: [],

    search: "",

    loading: false,

    error: ""

};


// ============================================================
// CACHE DOM ELEMENTS
// ============================================================

const recipesEl =
    document.querySelector("#recipes");

const searchEl =
    document.querySelector("#search");

const cookbookEl =
    document.querySelector("#cookbook-list");

const statusEl =
    document.querySelector("#status");

const contactForm =
    document.querySelector("#contact-form");

const nameEl =
    document.querySelector("#contact-name");

const phoneEl =
    document.querySelector("#contact-phone");

const messageEl =
    document.querySelector("#message");

const formErrorEl =
    document.querySelector("#form-error");

const formSuccessEl =
    document.querySelector("#form-success");


// ============================================================
// LOAD RECIPES
// ============================================================

async function loadRecipes() {

    state.loading = true;

    state.error = "";

    render();


    try {

        const response =
            await fetch(DATA_URL);


        // Guard against HTTP errors.

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const data =
            await response.json();


        // Guard against invalid data.

        if (!Array.isArray(data)) {

            throw new Error(
                "Recipe data is not an array."
            );

        }


        state.recipes = data;

        state.loading = false;

        state.error = "";

    }

    catch (error) {

        console.error(
            "Failed to load recipes:",
            error
        );

        state.loading = false;

        state.error =
            "Sorry, we could not load the recipes. Please try again.";

    }


    render();

}


// ============================================================
// MAIN RENDER
// ============================================================

function render() {

    renderStatus();

    renderRecipes();

    renderCookbook();

}


// ============================================================
// RENDER LOADING / ERROR STATES
// ============================================================

function renderStatus() {

    if (state.loading) {

        statusEl.textContent =
            "Loading recipes…";

        return;

    }


    if (state.error) {

        statusEl.textContent =
            state.error;

        return;

    }


    statusEl.textContent = "";

}


// ============================================================
// GET FILTERED RECIPES
// ============================================================

function getFilteredRecipes() {

    const term =
        state.search
            .trim()
            .toLowerCase();


    return state.recipes.filter(
        function (recipe) {

            const name =
                recipe?.name?.toLowerCase() || "";


            const category =
                recipe?.category?.toLowerCase() || "";


            return (
                name.includes(term) ||
                category.includes(term)
            );

        }
    );

}


// ============================================================
// RENDER RECIPES
// ============================================================

function renderRecipes() {

    recipesEl.innerHTML = "";


    // Don't render recipes while loading.

    if (state.loading) {

        return;

    }


    // Don't render recipes after an error.

    if (state.error) {

        return;

    }


    const recipes =
        getFilteredRecipes();


    // Empty state.

    if (recipes.length === 0) {

        const empty =
            document.createElement("p");


        empty.classList.add("empty");

        empty.textContent =
            "No recipes found.";

        recipesEl.append(empty);

        return;

    }


    recipes.forEach(
        function (recipe) {

            const article =
                createRecipeCard(recipe);


            recipesEl.append(article);

        }
    );

}


// ============================================================
// CREATE RECIPE CARD
// ============================================================

function createRecipeCard(recipe) {

    const article =
        document.createElement("article");


    article.classList.add("recipe");


    article.dataset.id =
        recipe.id;


    const title =
        document.createElement("h3");


    title.textContent =
        recipe.name || "Unnamed recipe";


    const category =
        document.createElement("p");


    category.classList.add("category");

    category.textContent =
        recipe.category || "Recipe";


    const description =
        document.createElement("p");


    description.textContent =
        recipe.description ||
        "No description available.";


    const button =
        document.createElement("button");


    button.type = "button";

    button.classList.add("save");


    const alreadySaved =
        isInCookbook(recipe.id);


    button.textContent =
        alreadySaved
            ? "Saved"
            : "Save to Cookbook";


    button.disabled =
        alreadySaved;


    article.append(
        title,
        category,
        description,
        button
    );


    return article;

}


// ============================================================
// SEARCH
// ============================================================

searchEl.addEventListener(
    "input",
    function (event) {

        state.search =
            event.target.value;


        renderRecipes();

    }
);


// ============================================================
// RECIPE LIST DELEGATION
// ============================================================

recipesEl.addEventListener(
    "click",
    function (event) {

        if (!event.target.matches(".save")) {

            return;

        }


        const card =
            event.target.closest(".recipe");


        // Guard against missing card.

        if (!card) {

            return;

        }


        const id =
            Number(card.dataset.id);


        saveRecipe(id);

    }
);


// ============================================================
// SAVE RECIPE
// ============================================================

function saveRecipe(id) {

    const recipe =
        findRecipe(id);


    // Guard against missing recipe.

    if (!recipe) {

        return;

    }


    // Prevent duplicates.

    if (isInCookbook(id)) {

        return;

    }


    state.cookbook.push(recipe);

    saveCookbook();

    render();

}


// ============================================================
// FIND RECIPE
// ============================================================

function findRecipe(id) {

    return state.recipes.find(
        function (recipe) {

            return recipe.id === id;

        }
    );

}


// ============================================================
// CHECK COOKBOOK
// ============================================================

function isInCookbook(id) {

    return state.cookbook.some(
        function (recipe) {

            return recipe.id === id;

        }
    );

}


// ============================================================
// RENDER COOKBOOK
// ============================================================

function renderCookbook() {

    cookbookEl.innerHTML = "";


    // Empty state.

    if (state.cookbook.length === 0) {

        const empty =
            document.createElement("p");


        empty.classList.add("empty");

        empty.textContent =
            "Your cookbook is empty.";

        cookbookEl.append(empty);

        return;

    }


    const list =
        document.createElement("ul");


    state.cookbook.forEach(
        function (recipe) {

            // Guard against bad saved data.

            if (!recipe || recipe.id === undefined) {

                return;

            }


            const item =
                document.createElement("li");


            item.dataset.id =
                recipe.id;


            const name =
                document.createElement("span");


            name.textContent =
                recipe.name || "Unnamed recipe";


            const removeButton =
                document.createElement("button");


            removeButton.type = "button";

            removeButton.classList.add("remove");

            removeButton.textContent =
                "Remove";


            item.append(
                name,
                removeButton
            );


            list.append(item);

        }
    );


    cookbookEl.append(list);

}


// ============================================================
// COOKBOOK DELEGATION
// ============================================================

cookbookEl.addEventListener(
    "click",
    function (event) {

        if (!event.target.matches(".remove")) {

            return;

        }


        const item =
            event.target.closest("li");


        // Guard against missing item.

        if (!item) {

            return;

        }


        const id =
            Number(item.dataset.id);


        removeRecipe(id);

    }
);


// ============================================================
// REMOVE RECIPE
// ============================================================

function removeRecipe(id) {

    state.cookbook =
        state.cookbook.filter(
            function (recipe) {

                return recipe.id !== id;

            }
        );


    saveCookbook();

    render();

}


// ============================================================
// SAVE COOKBOOK
// ============================================================

function saveCookbook() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state.cookbook)
        );

    }

    catch (error) {

        console.error(
            "Could not save cookbook:",
            error
        );

    }

}


// ============================================================
// LOAD COOKBOOK
// ============================================================

function loadCookbook() {

    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);


        // Nothing saved yet.

        if (!saved) {

            return;

        }


        const data =
            JSON.parse(saved);


        // Guard against corrupt data.

        if (!Array.isArray(data)) {

            return;

        }


        state.cookbook =
            data;

    }

    catch (error) {

        console.error(
            "Could not load cookbook:",
            error
        );

        state.cookbook = [];

    }

}


// ============================================================
// VALIDATE CONTACT FORM
// ============================================================

function validateContactForm(
    name,
    phone,
    message
) {

    // Guard: missing name.

    if (!name) {

        return "Please enter your name.";

    }


    // Guard: name too short.

    if (name.length < 2) {

        return "Name must contain at least two characters.";

    }


    // Guard: invalid phone.

    if (!PHONE_REGEX.test(phone)) {

        return (
            "Enter a valid Ethiopian phone number " +
            "(09xxxxxxxx or +2519xxxxxxxx)."
        );

    }


    // Guard: missing message.

    if (!message) {

        return "Please enter a message.";

    }


    return "";

}


// ============================================================
// CONTACT FORM
// ============================================================

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // Clear previous messages.

        formErrorEl.textContent = "";

        formSuccessEl.textContent = "";


        const name =
            nameEl.value.trim();


        const phone =
            phoneEl.value.trim();


        const message =
            messageEl.value.trim();


        const error =
            validateContactForm(
                name,
                phone,
                message
            );


        // Guard: validation failed.

        if (error) {

            formErrorEl.textContent =
                error;

            return;

        }


        submitContactMessage(
            name,
            phone,
            message
        );

    }
);


// ============================================================
// SUBMIT CONTACT MESSAGE
// ============================================================

function submitContactMessage(
    name,
    phone,
    message
) {

    // This represents a successful
    // submission for this front-end project.

    console.log("Message submitted:", {
        name,
        phone,
        message
    });


    formSuccessEl.textContent =
        "Thank you! Your message has been sent successfully.";


    contactForm.reset();

}


// ============================================================
// INITIALIZE APP
// ============================================================

async function init() {

    // Restore saved cookbook first.

    loadCookbook();


    // Render the empty cookbook immediately.

    render();


    // Then fetch recipe data.

    await loadRecipes();

}


// Start application.

init();