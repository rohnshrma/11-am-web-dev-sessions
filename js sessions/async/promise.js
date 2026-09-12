// this is the link (API) we're going to ask for a joke.
// think of it like a website address that gives you a random programming joke back
var URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

// we're making our own function that goes and fetches the joke.
// the whole point of wrapping this in a function is so we can reuse it (call it as many times as we want)
function sendRequest(URL) {
  // a Promise is basically a "pinky promise" object in JS.
  // it says "I don't have your data right now, but I PROMISE I'll either give it to you (resolve)
  // or tell you it failed (reject) at some point in the future."
  // this matters because talking to a server takes time (maybe half a second, maybe 5 seconds)
  // and JS doesn't want to just sit there frozen waiting for the answer.
  return new Promise((resolve, reject) => {
    // XMLHttpRequest (XHR) is the OLD school way browsers talk to servers, before "fetch" existed.
    // you'll still see it in older code / interviews, so good to know it exists
    var request = new XMLHttpRequest();

    // this is like saying "hey request, keep me updated every time your status changes"
    // "readystatechange" fires multiple times during the request's lifetime (connecting, sending, receiving, done etc)
    request.addEventListener("readystatechange", () => {
      // readyState === 4 means "the request is completely done" (data fully received)
      // status === 200 means "success" (the server said everything went fine)
      // so this line means: "if we're fully done AND it worked..."
      if (request.readyState === 4 && request.status === 200) {
        // request.responseText is the raw data we got back, but it comes as TEXT (a string)
        // JSON.parse turns that string into an actual JS object we can use dot-notation on
        // .joke just grabs the "joke" property out of that object (that's how this specific API structures its data)
        // resolve(...) is us keeping our promise -> "here's your data, promise fulfilled successfully"
        resolve(JSON.parse(request.responseText).joke);
      }

      // if we're fully done BUT the status is NOT 200 (like 404 not found, or 500 server error)
      if (request.readyState === 4 && request.status !== 200) {
        // reject(...) is the "bad news" version of resolve -> "sorry, this promise did not work out"
        // whatever you pass to reject is what shows up in .catch() later
        reject("Failed to fetch the joke");
      }
    });

    // .open() sets up the request: what type it is (GET = "just give me data, don't change anything")
    // and where it's going (our URL)
    // this does NOT send it yet, it just prepares it
    request.open("GET", URL);

    // .send() actually fires the request off to the server
    // everything after this line runs WITHOUT waiting for the server to answer (this is the "async" part)
    request.send();
  });
}

// here we actually call our function and pass in the URL
// since sendRequest returns a Promise, we get to chain .then() and .catch() onto it
sendRequest(URL)
  // .then() runs ONLY if the promise was resolved (success case)
  // "data" here is whatever we passed into resolve(...) above (the joke text)
  .then((data) => console.log(data))
  // .catch() runs ONLY if the promise was rejected (failure case)
  // "err" here is whatever we passed into reject(...) above
  .catch((err) => console.log(err));
