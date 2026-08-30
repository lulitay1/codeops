// ============================================================
// STATE
// ============================================================

const state = {

    recipes: [],

    cookbook: [],

    search: ""

};


// ============================================================
// CACHE DOM ELEMENTS
// ============================================================

const recipesEl =
    document.querySelector("#recipes");

const searchEl =
    document.querySelector("#search");

const cookbookEl =
    document.querySelector("#cookbook");


// ============================================================
// LOAD RECIPES
// ============================================================

async function loadRecipes() {

    recipesEl.textContent =
        "Loading recipes…";


    try {

        const res =
            await fetch("data/recipes.json");


        if (!res.ok) {

            throw new Error(
                "HTTP " + res.status
            );

        }


        state.recipes =
            await res.json();


        render();

    }

    catch (err) {

        recipesEl.textContent =
            "Could not load the recipes.";

    }

}


// ============================================================
// RENDER
// ============================================================

function render() {

    renderRecipes();

    renderCookbook();

}


// ============================================================
// RENDER RECIPES
// ============================================================

function renderRecipes() {

    const term =
        state.search.toLowerCase();


    const shown =
        state.recipes.filter(function (recipe) {

            return recipe.name
                .toLowerCase()
                .includes(term);

        });


    recipesEl.innerHTML = "";


    // Empty search result

    if (shown.length === 0) {

        const message =
            document.createElement("p");

        message.classList.add("empty");

        message.textContent =
            "No recipes found.";

        recipesEl.append(message);

        return;

    }


    // Render recipes

    shown.forEach(function (recipe) {

        const article =
            document.createElement("article");


        article.classList.add("recipe");


        article.dataset.id =
            recipe.id;


        const title =
            document.createElement("h3");


        title.textContent =
            recipe.name;


        const category =
            document.createElement("p");


        category.classList.add("category");

        category.textContent =
            recipe.category;


        const description =
            document.createElement("p");


        description.textContent =
            recipe.description;


        const button =
            document.createElement("button");


        button.classList.add("save");

        button.textContent =
            "Save to Cookbook";


        article.append(
            title,
            category,
            description,
            button
        );


        recipesEl.append(article);

    });

}


// ============================================================
// SEARCH
// ============================================================

searchEl.addEventListener(
    "input",
    function (e) {

        state.search =
            e.target.value;


        render();

    }
);


// ============================================================
// SAVE RECIPE TO COOKBOOK
// ============================================================

recipesEl.addEventListener(
    "click",
    function (e) {

        if (!e.target.matches(".save")) {

            return;

        }


        const id =
            Number(
                e.target
                    .closest(".recipe")
                    .dataset.id
            );


        const recipe =
            state.recipes.find(
                function (item) {

                    return item.id === id;

                }
            );


        if (!recipe) {

            return;

        }


        // Prevent duplicates

        if (
            state.cookbook.some(
                function (item) {

                    return item.id === id;

                }
            )
        ) {

            return;

        }


        state.cookbook.push(recipe);


        save();


        render();

    }
);


// ============================================================
// RENDER COOKBOOK
// ============================================================

function renderCookbook() {

    cookbookEl.innerHTML = "";


    // Empty state

    if (state.cookbook.length === 0) {

        const message =
            document.createElement("p");


        message.classList.add("empty");

        message.textContent =
            "Your cookbook is empty.";


        cookbookEl.append(message);

        return;

    }


    const list =
        document.createElement("ul");


    state.cookbook.forEach(
        function (recipe) {

            const li =
                document.createElement("li");


            li.dataset.id =
                recipe.id;


            const name =
                document.createElement("span");


            name.textContent =
                recipe.name;


            const removeBtn =
                document.createElement("button");


            removeBtn.classList.add("remove");

            removeBtn.textContent =
                "Remove";


            li.append(
                name,
                removeBtn
            );


            list.append(li);

        }
    );


    cookbookEl.append(list);

}


// ============================================================
// REMOVE FROM COOKBOOK
// ============================================================

// One delegated listener on the parent

cookbookEl.addEventListener(
    "click",
    function (e) {

        if (!e.target.matches(".remove")) {

            return;

        }


        const id =
            Number(
                e.target
                    .closest("li")
                    .dataset.id
            );


        state.cookbook =
            state.cookbook.filter(
                function (recipe) {

                    return recipe.id !== id;

                }
            );


        save();


        render();

    }
);


// ============================================================
// LOCAL STORAGE
// ============================================================

const KEY =
    "habeshaRecipesCookbook";


// ============================================================
// SAVE
// ============================================================

function save() {

    localStorage.setItem(
        KEY,
        JSON.stringify(state.cookbook)
    );

}


// ============================================================
// LOAD
// ============================================================

function load() {

    try {

        const saved =
            localStorage.getItem(KEY);


        if (!saved) {

            return;

        }


        const data =
            JSON.parse(saved);


        if (Array.isArray(data)) {

            state.cookbook =
                data;

        }

    }

    catch (err) {

        state.cookbook = [];

    }

}


// ============================================================
// INITIALIZE
// ============================================================

async function init() {

    // Restore saved cookbook

    load();


    // Fetch recipe data

    await loadRecipes();

}


// Start application

init();