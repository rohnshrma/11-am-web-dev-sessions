// ============================================================
// callback.js  -  making a network request + using a callback
// ============================================================
//
// We want to ask a website (an API) for a joke and then print it.
//
// Talking to another server takes time (the internet is slow
// compared to your own code). So the browser does NOT sit and
// wait. It fires the request, carries on with other work, and
// LATER "calls us back" when the answer finally arrives.
//
// The way WE get called back is a function that we hand over.
// That handed-over function is the CALLBACK.

var URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

// This function does the actual asking.
//   URL     -> the web address to hit
//   handler -> the callback: the code to run once we have a result
function sendRequest(URL, handler) {
  // XMLHttpRequest is the old built-in browser tool for talking
  // to a server. (Newer code uses fetch(), but this shows the
  // machinery underneath.)
  var request = new XMLHttpRequest();

  // "readystatechange" fires every time the request moves one step
  // forward (created -> opened -> sent -> downloading -> done).
  request.addEventListener("readystatechange", () => {
    // readyState === 4  means "completely finished".
    // status === 200    means "OK, here is your data".
    if (request.readyState === 4 && request.status === 200) {
      // request.responseText is just plain text.
      // The server sent JSON-shaped text, so JSON.parse turns that
      // text into a real JavaScript object, and then we pull the
      // .joke value out of it.
      //
      // Common callback habit: call handler(error, data).
      // There is no error here, so the first argument is null.
      handler(null, JSON.parse(request.responseText).joke);
    }

    // Finished, but the server did NOT say 200 (e.g. 404, 500).
    if (request.readyState === 4 && request.status !== 200) {
      // Something went wrong: put a message in the ERROR slot,
      // and null in the data slot.
      handler("Failed to fetch the joke", null);
    }
  });

  request.open("GET", URL); // GET = "just give me data", also sets the address
  request.send(); // actually send the request off
}

// Now we USE it. The arrow function below is the callback that
// sendRequest will run for us later, once the joke is ready.
sendRequest(URL, (err, data) => {
  // Always check the error slot first.
  if (!err) console.log(data); // no error -> show the joke
  else console.log(err); // error -> show the message
});
