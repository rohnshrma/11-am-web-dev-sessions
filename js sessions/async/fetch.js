// same idea as before - this is the address of an API that hands back a random programming joke
var URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

// fetch() is the MODERN, built-in way to make requests (basically replaced XMLHttpRequest)
// it's way less code because fetch already returns a Promise for you automatically
// no need to manually create a "new Promise" or listen for readystatechange like in promise.js
fetch(URL)
  // the FIRST .then() runs once we get a response back from the server
  // BUT here's the tricky/important part: "response" is not the actual data yet,
  // it's more like an envelope - we know mail arrived, we just haven't opened it
  .then((response) => {
    // response.json() reads the body of that response and turns it from raw text into a real JS object
    // this itself takes a tiny bit of time, so it ALSO returns a Promise
    // that's why we return it here - so the NEXT .then() in the chain waits for it to finish
    return response.json();
  })
  // the SECOND .then() only runs after response.json() has finished doing its thing
  // "data" here is now the actual usable JS object (the opened envelope with the letter inside)
  .then((data) => {
    // just printing the whole joke object to the console so we can see what came back
    console.log(data);
  })
  // .catch() is our safety net - if ANYTHING goes wrong anywhere above (bad internet, bad URL,
  // server error, json parsing fails, etc), it gets caught here instead of crashing the app
  .catch((error) => {
    console.log(error);
  });
