// ============================================================
// CACHE DOM ELEMENTS
// ============================================================

const rateBtn = document.querySelector("#rate-btn");
const rateResult = document.querySelector("#rate-result");

const postBtn = document.querySelector("#post-btn");
const postResult = document.querySelector("#post-result");

const networkErrorBtn = document.querySelector("#network-error-btn");
const httpErrorBtn = document.querySelector("#http-error-btn");
const errorResult = document.querySelector("#error-result");

const parallelBtn = document.querySelector("#parallel-btn");
const parallelResult = document.querySelector("#parallel-result");

const loadBtn = document.querySelector("#load-btn");
const status = document.querySelector("#status");
const dataResult = document.querySelector("#data-result");


// ============================================================
// QUESTION 1
// Fetch USD → ETB exchange rate
// ============================================================

async function getExchangeRate() {

    const url =
        "https://open.er-api.com/v6/latest/USD";


    const res = await fetch(url);


    // fetch() does NOT automatically reject
    // when the server returns an HTTP error.
    // Therefore we check res.ok ourselves.

    if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
    }


    // Convert response body from JSON text
    // into a JavaScript object.

    const data = await res.json();


    // Return the ETB exchange rate

    return data.rates.ETB;
}


rateBtn.addEventListener("click", async function () {

    rateResult.textContent = "Loading...";


    try {

        const rate = await getExchangeRate();

        rateResult.textContent =
            `1 USD = ${rate.toFixed(2)} ETB`;

    }

    catch (error) {

        rateResult.textContent =
            `Error: ${error.message}`;

    }

});


// ============================================================
// QUESTION 2
// Rewrite:
// fetch → then(json) → then(render)
// as async/await
// ============================================================

async function loadPost() {

    try {

        // STEP 1
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );


        // Check HTTP status

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }


        // STEP 2
        const data = await res.json();


        // STEP 3
        postResult.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        `;

    }

    catch (error) {

        postResult.textContent =
            `Error: ${error.message}`;

    }

}


postBtn.addEventListener("click", loadPost);


// The original Promise version would look like:
//
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         render(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
//
// async/await makes the same process easier to read:
// fetch → await
// json  → await
// render


// ============================================================
// QUESTION 3
// Network error vs HTTP 404 error
// ============================================================


// ------------------------------------------------------------
// Test 1: Deliberately wrong URL
// ------------------------------------------------------------

networkErrorBtn.addEventListener("click", async function () {

    errorResult.textContent = "Testing wrong URL...";


    try {

        const res = await fetch(
            "https://this-domain-definitely-does-not-exist-12345.com"
        );


        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }


        const data = await res.json();

        console.log(data);

    }

    catch (error) {

        errorResult.textContent =
            `Catch ran: ${error.message}`;

    }

});


// ------------------------------------------------------------
// Test 2: Real URL that returns 404
// ------------------------------------------------------------

httpErrorBtn.addEventListener("click", async function () {

    errorResult.textContent = "Testing HTTP 404...";


    try {

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/999999"
        );


        console.log("res.ok:", res.ok);
        console.log("res.status:", res.status);


        // IMPORTANT:
        //
        // fetch() can successfully receive a response
        // even when the HTTP status is 404.
        //
        // Therefore catch() does NOT automatically run.
        //
        // We must check res.ok.

        if (!res.ok) {
            throw new Error(
                `Request failed with status ${res.status}`
            );
        }


        const data = await res.json();

        console.log(data);

    }

    catch (error) {

        errorResult.textContent =
            `Catch ran because we manually threw the HTTP error: ${error.message}`;

    }

});


// ============================================================
// QUESTION 4
// Promise.all()
// Fetch details for the first two items in parallel
// ============================================================

parallelBtn.addEventListener("click", async function () {

    parallelResult.textContent = "Loading...";


    try {

        // First fetch the list

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );


        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }


        const posts = await res.json();


        // Get the first two posts

        const firstTwo = posts.slice(0, 2);


        // Create two fetch operations.
        //
        // Promise.all() allows both requests
        // to run in parallel.

        const details = await Promise.all(

            firstTwo.map(async function (post) {

                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${post.id}`
                );


                if (!response.ok) {
                    throw new Error(
                        `HTTP error: ${response.status}`
                    );
                }


                return response.json();

            })

        );


        // Render the results

        parallelResult.innerHTML = "";


        details.forEach(function (post) {

            const article = document.createElement("article");

            article.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            parallelResult.append(article);

        });

    }

    catch (error) {

        parallelResult.textContent =
            `Error: ${error.message}`;

    }

});


// ============================================================
// QUESTION 5
// Loading → Success OR Error
// ============================================================

async function loadData() {

    // --------------------------------------------------------
    // STATE 1: LOADING
    // --------------------------------------------------------

    status.textContent = "Loading...";
    status.className = "loading";

    dataResult.textContent = "";


    try {

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );


        // Check HTTP status

        if (!res.ok) {
            throw new Error(
                `Server returned ${res.status}`
            );
        }


        const data = await res.json();


        // ----------------------------------------------------
        // STATE 2: SUCCESS
        // ----------------------------------------------------

        status.textContent = "Data loaded successfully.";
        status.className = "success";


        dataResult.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        `;

    }

    catch (error) {

        // ----------------------------------------------------
        // STATE 3: ERROR
        // ----------------------------------------------------

        status.textContent =
            "Something went wrong.";

        status.className = "error";


        dataResult.textContent =
            error.message;

    }

}


loadBtn.addEventListener("click", loadData);