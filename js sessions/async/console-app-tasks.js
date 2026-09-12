// ============================================================
// CONSOLE APP TASKS  -  WEATHER APP  +  MOVIESDATABASE LATEST MOVIES
// ------------------------------------------------------------
// Goal: build TWO small NODE.JS CONSOLE apps (no HTML, no CSS,
// no browser at all - everything happens in the terminal using
// console.log and typing into the terminal) that combine
// everything from this async folder:
//   - Promises            (see promise.js)
//   - fetch()              (see fetch.js)
//   - async / await         (see async-await.js)
//   - Promise.all           (see async-await.js)
//
// THIS FILE HAS NO SOLUTIONS. it is a step-by-step task list.
// Build each app in its OWN separate file (e.g. weather-app.js
// and movies-app.js), not inside this file.
// ============================================================

// ============================================================
// BEFORE YOU START - THINGS THAT ARE DIFFERENT IN NODE
// ============================================================
//
// 1. You will run these apps with the terminal command:
//      node weather-app.js
//      node movies-app.js
//    NOT by opening index.html in a browser.
//
// 2. XMLHttpRequest (the thing used in promise.js) only exists
//    in BROWSERS. It does NOT exist in plain Node.js. So for
//    these two apps, use "fetch" instead (like in fetch.js).
//    Check your node version first by typing "node -v" in the
//    terminal. Node 18 and above already has fetch built in,
//    nothing to install. If your version is older than 18,
//    ask about installing "node-fetch" before starting.
//
// 3. A console app usually needs to READ something the user
//    TYPES (like a city name, or a movie search word). Node has
//    a built-in module called "readline" for exactly this. You
//    will need to research/look up how "readline" is used to
//    ask a question in the terminal and get the answer back -
//    this is a good small side-quest before starting Part 1.
//
// 4. Every API key you get in the steps below is PERSONAL to
//    your account. Do not share it publicly (e.g. don't push it
//    to a public GitHub repo). For these practice files it's
//    fine to just paste it into a variable at the top of your file.

// ============================================================
// PART 1  -  WEATHER CONSOLE APP
// ============================================================

// ------------------------------------------------------------
// STEP A - GET YOUR FREE WEATHER API KEY (OpenWeatherMap)
// ------------------------------------------------------------
// 1. Go to https://openweathermap.org/
// 2. Click "Sign in" (top right) then choose "Create an Account".
// 3. Fill in a username, email, and password, tick the terms
//    checkbox, and submit the form.
// 4. Check your email inbox for a verification email from
//    OpenWeatherMap and click the confirmation link inside it.
// 5. Go back to the site and log in with your new account.
// 6. Click your username in the top right corner, then click
//    "My API keys" from the dropdown/menu.
// 7. You should already see one API key auto-generated for you
//    (usually named "Default"). You can use that one, or type a
//    name and click "Generate" to make a new one.
// 8. Copy that API key somewhere safe (a notes file, or straight
//    into your weather-app.js as a variable).
// 9. IMPORTANT: a brand new key can take up to ~2 hours to
//    "activate" on OpenWeatherMap's side. So do this step FIRST,
//    before writing any code, and test it with a simple request
//    while you continue with the other steps below.
//
// The endpoint you'll be calling (this is the "current weather"
// endpoint, free on the free plan) looks like this shape:
//   https://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&appid=YOUR_KEY&units=metric
// (units=metric gives you Celsius instead of Kelvin)

// ------------------------------------------------------------
// STEP B - PROJECT SETUP
// ------------------------------------------------------------
// Task 1.1
// Create a new file called "weather-app.js" in this same folder.
// At the top, store your API key and the base URL in variables.

// Task 1.2
// Research how to require/import Node's built-in "readline"
// module, and how to use it to ask a question in the terminal
// and receive the user's typed answer. Get a small test working
// first: ask "What is your name?" and print "Hello, <name>"
// back, before touching weather at all.

// ------------------------------------------------------------
// STEP C - FIRST WORKING REQUEST (Promises + fetch, like fetch.js)
// ------------------------------------------------------------
// Task 1.3
// Write a function getWeather(city) that:
//   - builds the full URL using the city name and your API key
//   - uses fetch() to call that URL
//   - returns the Promise chain (like fetch.js does): first
//     .then() turns the response into JSON, second .then() logs
//     the whole raw object to the console so you can SEE its
//     shape (what keys does it have? look for "main", "weather",
//     "name", "wind")
//   - has a .catch() that logs an error message
// Call getWeather() once with a real city name and confirm you
// can see real data in your terminal.

// ------------------------------------------------------------
// STEP D - REWRITE USING async/await (like async-await.js)
// ------------------------------------------------------------
// Task 1.4
// Now rewrite getWeather(city) as an ASYNC function that uses
// "await" on the fetch call and on response.json(), wrapped in
// a try/catch instead of .then()/.catch(). This should give you
// the exact same result as Task 1.3, just written differently.

// Task 1.5
// From the full weather object you inspected in Task 1.3, pick
// out only what you actually need and print a clean, readable
// sentence, for example something in the spirit of:
//   "Weather in Delhi: 31°C, clear sky, humidity 40%, wind 3.2 m/s"
// (the exact keys you need live inside .main, .weather[0], and
// .wind on the response object - go find them yourself by
// re-reading the raw object you printed in Task 1.3)

// ------------------------------------------------------------
// STEP E - MAKE IT INTERACTIVE
// ------------------------------------------------------------
// Task 1.6
// Using readline (from Task 1.2), ask the user to type a city
// name in the terminal, then call your async getWeather()
// function with whatever they typed, and print the result.

// Task 1.7
// After showing the weather, ask the user "Check another city?
// (y/n)". If they type "y", ask for a new city and repeat the
// whole thing again. If "n", print "Goodbye!" and close
// readline properly (look up how to close a readline interface
// so the terminal program actually ends instead of hanging).

// ------------------------------------------------------------
// STEP F - ERROR HANDLING
// ------------------------------------------------------------
// Task 1.8
// Test what happens when you type a city name that does not
// exist (like "Xyzxyzxyz"). OpenWeatherMap will respond with a
// 404-style error. Catch this properly and print a friendly
// message like "City not found, please try again" INSTEAD of
// letting the app crash or print a confusing error.

// Task 1.9
// Test what happens if you deliberately break your API key
// (change one character). Make sure your catch block also
// handles this case with a readable message, instead of the
// user seeing raw JSON error output.

// ------------------------------------------------------------
// STEP G - STRETCH / BONUS (combine Promise.all)
// ------------------------------------------------------------
// Task 1.10
// Make an array of 3-4 city names. Using Promise.all (like in
// async-await.js), fetch the weather for ALL of them AT THE
// SAME TIME, and once every request is done, print all the
// results together in one go, one line per city.

// Task 1.11 (harder)
// Let the user type multiple cities separated by commas in one
// line (e.g. "Delhi, Mumbai, Pune"), split that string into an
// array, then reuse your Task 1.10 logic on whatever they typed.

// ============================================================
// PART 2  -  MOVIESDATABASE: LATEST MOVIES CONSOLE APP
// ============================================================

// ------------------------------------------------------------
// STEP A - GET YOUR FREE MOVIESDATABASE API KEY (via RapidAPI)
// ------------------------------------------------------------
// 1. Go to https://rapidapi.com/
// 2. Click "Sign Up" and create an account (you can sign up
//    with Google/GitHub or an email + password).
// 3. Once logged in, use the search bar at the top and search
//    for "MoviesDatabase" (this is the specific API - there are
//    many similarly named ones, make sure it's the one whose
//    description mentions things like movies, actors, and
//    titles data, with endpoints such as /titles).
// 4. Open that API's page. You'll see tabs like "Endpoints",
//    "Playground", "Pricing", etc.
// 5. Click the "Pricing" tab and choose the FREE plan (usually
//    called "Basic" - it comes with a limited number of
//    requests per month/day, which is plenty for practice).
//    Click "Subscribe".
// 6. Go back to the "Endpoints" tab. On the right-hand side you
//    should see a code snippet (it may default to a language
//    like Node/JavaScript - fetch, or cURL). That snippet
//    contains two important headers:
//      X-RapidAPI-Key
//      X-RapidAPI-Host
// 7. Copy YOUR "X-RapidAPI-Key" value - this key is linked to
//    your account and works for every RapidAPI API you're
//    subscribed to, not just this one.
// 8. Before writing any code, use RapidAPI's own "Playground" /
//    "Test Endpoint" button on their site to try an endpoint
//    like "/titles" directly in the browser, so you can SEE what
//    the JSON response actually looks like (what keys exist,
//    how movies are structured, where the title/year/id live).
//    This will save you a lot of guessing later.
//
// Both headers (X-RapidAPI-Key and X-RapidAPI-Host) need to be
// sent with every fetch request you make to this API - look at
// how the sample code snippet on RapidAPI passes them inside a
// "headers" object in the fetch options.

// ------------------------------------------------------------
// STEP B - PROJECT SETUP
// ------------------------------------------------------------
// Task 2.1
// Create a new file called "movies-app.js" in this same folder.
// Store your X-RapidAPI-Key, the X-RapidAPI-Host value, and the
// base URL of the API in variables at the top.

// ------------------------------------------------------------
// STEP C - FIRST WORKING REQUEST (Promises + fetch)
// ------------------------------------------------------------
// Task 2.2
// Write a function getLatestMovies() that:
//   - calls the movies list endpoint you tested in the
//     Playground, using fetch() and passing the required
//     headers object
//   - sorts/limits the results so you're only getting a small
//     handful of recent titles (look in the endpoint's
//     documentation/playground for query parameters that control
//     sorting by year and limiting how many results come back)
//   - returns the Promise chain: first .then() to parse the
//     JSON, second .then() to console.log the WHOLE raw response
//     so you can study its shape
//   - a .catch() that logs a clear error message
// Call it once and confirm you get real movie data back.

// ------------------------------------------------------------
// STEP D - REWRITE USING async/await
// ------------------------------------------------------------
// Task 2.3
// Rewrite getLatestMovies() as an async function using await
// and try/catch instead of .then()/.catch(). Same result as
// Task 2.2, different style.

// Task 2.4
// From the raw response you inspected, find the array that
// actually holds the list of movies (it will be nested inside
// the response object somewhere, not the top-level object
// itself - go look for it). Loop over that array and print just
// the movie title and release year for each one, one per line.

// ------------------------------------------------------------
// STEP E - MAKE IT INTERACTIVE
// ------------------------------------------------------------
// Task 2.5
// Using readline, when the app starts, show the user a small
// menu of two choices:
//   1) Show latest movies
//   2) Search movies by title
//   Type 1 or 2:
// If they choose 1, run your getLatestMovies() function and
// print the results.

// Task 2.6
// If the user chooses option 2, ask them to type a search word
// (e.g. "batman"). Find the search endpoint for this API in the
// Playground/docs (it will need the search text as part of the
// URL or as a query parameter), write a getMoviesBySearch(word)
// async function using the same fetch + headers pattern, and
// print the matching titles.

// ------------------------------------------------------------
// STEP F - ERROR HANDLING
// ------------------------------------------------------------
// Task 2.7
// Search for something guaranteed to have zero results (like
// random gibberish letters). Instead of printing an empty/
// confusing result, detect when the movie list is empty and
// print a friendly "No movies found for that search" message.

// Task 2.8
// Temporarily break your X-RapidAPI-Key (change a character) and
// confirm your catch block handles the failed request nicely
// with a readable message instead of crashing the app.

// ------------------------------------------------------------
// STEP G - STRETCH / BONUS (combine Promise.all)
// ------------------------------------------------------------
// Task 2.9
// From your "latest movies" list (Task 2.4), grab the unique ID
// of the first 3 movies (look for an "id" style field on each
// movie object). Find the "single title by id" endpoint in the
// docs/playground, write a getMovieDetails(id) async function,
// and then use Promise.all to fetch the FULL details of all 3
// movies AT THE SAME TIME. Once all 3 come back, print a short
// summary for each (title, year, and one more detail of your
// choice, like genre or runtime if the API provides it).

// Task 2.10 (harder, fully combining everything)
// Add a 3rd menu option: "Show details for my 3 most recent
// searches". Keep an array in memory that stores every search
// word the user has typed during this run of the app. When they
// choose this option, loop through your saved searches, and for
// EACH one, call getMoviesBySearch() again - but this time do it
// with Promise.all so all the repeated searches fire together
// instead of one after another, then print all results grouped
// by their original search word.

// ============================================================
// WHEN BOTH APPS WORK, ASK YOURSELF (no need to write answers)
// ============================================================
// - Where in your code did you NEED "await" vs where a plain
//   .then() chain would have worked just as well?
// - What was the actual benefit of Promise.all in Task 1.10 /
//   2.9 compared to just awaiting each request one after another
//   in a loop? (hint: think about TIME - open your terminal's
//   clock/a stopwatch and actually compare both ways if you're
//   not sure)
// - What would break in your app if the API changed the shape
//   of its JSON response tomorrow? Where would you have to fix
//   it?
