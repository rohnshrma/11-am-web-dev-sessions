// same joke API link as the other two files in this folder
var URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

// this is the exact same sendRequest function from promise.js
// it wraps the old-school XMLHttpRequest in a Promise so we can use .then()/.catch()
// OR (as you'll see below) the newer async/await style on top of it
function sendRequest(URL) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();

    // fires every time the request's status changes (connecting, loading, done, etc)
    request.addEventListener("readystatechange", () => {
      // readyState 4 = fully done, status 200 = success
      if (request.readyState === 4 && request.status === 200) {
        // pull the raw text response apart into a real object, then grab just the "joke" part
        // resolve = "here's the good result" for whoever is waiting on this promise
        resolve(JSON.parse(request.responseText).joke);
      }

      // readyState 4 = fully done, but status is NOT 200 = something went wrong
      if (request.readyState === 4 && request.status !== 200) {
        // reject = "here's the bad news" for whoever is waiting on this promise
        reject("Failed to fetch the joke");
      }
    });

    // set up a GET request (just reading data, not sending/changing anything) to our URL
    request.open("GET", URL);
    // actually fire it off to the server
    request.send();
  });
}

// putting "async" in front of a function is what UNLOCKS the ability to use "await" inside it
// async functions ALWAYS return a promise themselves, even though it doesn't look like it here
async function handleRequest(URL) {
  // try/catch is old-school error handling (works with regular code too, not just async)
  // we wrap our "risky" code (the part that could fail) inside try{}
  try {
    // "await" is the magic word here - it PAUSES this function (and only this function,
    // not the whole program) until the promise from sendRequest() finishes
    // instead of chaining .then() like the other files, we just get the actual result
    // directly into "data", like it was normal non-async code. much easier to read!
    var data = await sendRequest(URL);
    console.log(data);
  } catch (err) {
    // if sendRequest's promise REJECTS (fails) while we were awaiting it,
    // instead of crashing, execution jumps straight into this catch block
    // "err" is whatever value was passed into reject() back in sendRequest
    console.log(err);
  }
}

// Promise.all() is for when you want to fire off MULTIPLE promises AT THE SAME TIME
// and wait until ALL of them are finished, instead of doing them one after another (which is slower)
// here we're asking for two jokes at once
Promise.all([sendRequest(URL), sendRequest(URL)])
  // this .then() only runs once BOTH promises inside the array have resolved successfully
  // the results come back in the SAME ORDER we passed them in, as an array
  // here we're "destructuring" that array straight into two variables: r1 and r2
  .then(([r1, r2]) => console.log("j1", r1, "j2", r2))
  // if EVEN ONE of the promises in Promise.all() rejects, this .catch() runs instead
  // (Promise.all is "all or nothing" - one failure fails the whole group)
  .catch((err) => {
    console.log(err);
  });
