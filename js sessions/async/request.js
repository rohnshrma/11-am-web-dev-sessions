// ============================================================
// request.js  -  the raw version, before we wrapped it in a function
// ============================================================
//
// Same goal as callback.js: ask an API for a joke and print it.
// Here everything is written out straight, with no reusable
// function around it, so you can see every step in order.

var URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

// The main "verbs" you can use when talking to a server:
// GET    -> read / fetch data
// POST   -> create something new
// PUT    -> replace something completely
// PATCH  -> update part of something
// DELETE -> remove something

// XMLHttpRequest = the built-in browser object for making requests.
// (Newer code uses fetch(), but this shows what happens underneath.)

var request = new XMLHttpRequest();

// Listen for progress updates on the request. This runs again and
// again as the request moves through its steps.
request.addEventListener("readystatechange", () => {
  // 4 = done, 200 = server is happy -> read the answer
  if (request.readyState === 4 && request.status === 200) {
    // responseText is JSON text -> parse into an object -> take .joke
    console.log(JSON.parse(request.responseText).joke);
  }
  // done, but the status is not 200 -> treat it as a failure
  if (request.readyState === 4 && request.status !== 200) {
    console.log("Failed to fetch the joke");
  }
});

request.open("GET", URL); // step 1: set the method + the address
request.send(); // step 2: fire it off

// readyState  (the request's "how far along am I?" number)

// 0 : unsent            - request object created, open() not called yet
// 1 : open function has  been called
// 2 : send function has  been called  (headers have come back)
// 3 : data download (partial)         - the response is still arriving
// 4 : completed                       - everything has arrived, we are done
