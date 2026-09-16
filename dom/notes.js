// ============================================================
// NOTES: How to ADD / APPEND elements to a webpage using JS
// ============================================================
//
// Think of your webpage (the HTML) like a house made of rooms (elements).
// Right now, all the rooms are already built when the page loads.
// But sometimes YOU want to build a NEW room while people are already
// inside the house (i.e. add new HTML while the page is running,
// without reloading it). That's what "adding" or "appending" an
// element means in JavaScript.
//
// There are basically 3 steps to add something new to the page:
//   1) CREATE the element (build the room, but it's still sitting outside)
//   2) FILL it with content / attributes (put furniture in the room)
//   3) APPEND it to the page (carry the room inside and attach it to the house)
//
// If you skip step 3, nothing shows up on the page. You can create
// as many elements as you want in JS, but until you "append" them
// somewhere that already exists in the HTML, the browser has no idea
// they exist visually.

// ------------------------------------------------------------
// STEP 1: Creating an element
// ------------------------------------------------------------
// document.createElement("tagname") makes a brand new, empty element.
// It is NOT on the page yet. It's just floating in memory.

// const newPara = document.createElement("p");
// console.log(newPara); // shows <p></p> but you won't see it on the page

// ------------------------------------------------------------
// STEP 2: Putting content / attributes into it
// ------------------------------------------------------------
// Now that we have our empty <p>, let's put text inside it,
// and maybe give it a class so we can style it later.

// newPara.innerText = "Hello, I am a new paragraph!";
// newPara.classList.add("my-new-para");

// ------------------------------------------------------------
// STEP 3: Appending it to the page (this is the important part)
// ------------------------------------------------------------
// "Appending" simply means: pick a parent element that ALREADY
// exists on the page, and stick our new element inside it, usually
// at the end (like the last child).

// const container = document.querySelector("#main"); // pick an existing box
// container.appendChild(newPara); // now it actually shows up on the page!

// Full example, all together:
//
// const container = document.querySelector("#main");
// const newPara = document.createElement("p");
// newPara.innerText = "Hello, I am a new paragraph!";
// container.appendChild(newPara);
//
// Read it like a sentence: "Create a paragraph, put text in it,
// then append (attach) it inside the container."

// ------------------------------------------------------------
// appendChild() vs append() -- what's the difference?
// ------------------------------------------------------------
// appendChild(el)
//   - The OLD, classic way (works in every browser, even ancient ones).
//   - Can ONLY take one actual element at a time (an actual DOM node).
//   - You cannot pass plain text directly, it has to be a real element.
//
// append(el)
//   - The NEWER, more flexible way.
//   - Can take MULTIPLE things at once, separated by commas.
//   - Can take plain text directly (as a string), no need to wrap it
//     in a text node yourself.
//   - Slightly less browser support than appendChild (but fine for any
//     modern browser you'll use in class or on the web today).
//
// Example showing the difference:
//
// const box = document.querySelector("#main");
//
// // appendChild -- only one element node at a time
// const span1 = document.createElement("span");
// span1.innerText = "one";
// box.appendChild(span1);
//
// // append -- can drop in plain text AND multiple items in one go
// const span2 = document.createElement("span");
// span2.innerText = "two";
// box.append("some plain text, ", span2, " -- done!");
//
// So basically: append() is the more convenient/modern cousin of
// appendChild(). If you're not sure which to use, append() is usually
// the safer / easier pick for beginners.

// ------------------------------------------------------------
// A couple of other ways to "add" stuff to the page (good to know)
// ------------------------------------------------------------
//
// 1) prepend(el)
//    Same idea as append, but sticks the new element at the
//    BEGINNING of the parent instead of the end.
//
//    const box = document.querySelector("#main");
//    const first = document.createElement("p");
//    first.innerText = "I go first!";
//    box.prepend(first);
//
// 2) insertAdjacentHTML(position, htmlString)
//    Lets you inject raw HTML text directly at a specific position,
//    without manually creating elements one by one. Handy for quick
//    stuff, but be careful with user input here (can be risky/unsafe
//    if you dump untrusted text in this way).
//
//    const box = document.querySelector("#main");
//    box.insertAdjacentHTML("beforeend", "<p>Quick paragraph!</p>");
//
//    Position options:
//      "beforebegin" -> right before the box itself
//      "afterbegin"  -> just inside the box, before its first child
//      "beforeend"   -> just inside the box, after its last child
//      "afterend"    -> right after the box itself
//
// ------------------------------------------------------------
// TL;DR (the one thing to remember)
// ------------------------------------------------------------
// Creating an element = building something in memory (invisible).
// Appending an element = actually placing it inside the page (visible).
// You always need BOTH steps -- create, then append -- or nothing
// will show up.


// ============================================================
// TASKS: Build an OpenWeatherMap Weather App
// ============================================================
// Goal: user types a city name into a form, submits it, we validate
// the input, fetch live weather data for that city, and display it
// on the page. No solution code here -- just the steps to follow.
//
// 1. Setup
//    - Go to openweathermap.org, create a free account.
//    - Generate an API key from your account dashboard (may take a
//      few minutes to activate after creating it).
//    - Read their "Current Weather Data" API docs to see what the
//      request URL looks like and what parameters it needs (city
//      name, API key, units, etc).
//
// 2. Build the HTML form
//    - Add a <form> with one text <input> for the city name.
//    - Add a <button type="submit"> to submit the form.
//    - Add an empty element (like a <p> or <span>) to show
//      validation error messages.
//    - Add an empty container (like a <div>) where the weather
//      results will be displayed once fetched.
//
// 3. Listen for form submission
//    - Select the form in JS and add a "submit" event listener.
//    - Prevent the default form submission behavior (page refresh).
//
// 4. Validate the input BEFORE fetching anything
//    - Check that the city input is not empty / not just spaces.
//    - Decide what counts as invalid (numbers only? special
//      characters? too short?) and show a clear error message if
//      the input fails validation.
//    - Stop the function early (return) if validation fails, so you
//      don't waste an API call on bad input.
//    - Clear old error messages and old results each time the form
//      is submitted, so stale messages don't confuse the user.
//
// 5. Build the request URL
//    - Combine the base API URL, the city name entered by the user,
//      your API key, and any unit preference (metric/imperial) into
//      one valid URL string.
//    - Think about what happens if the city name has spaces (e.g.
//      "New York") -- the URL needs to handle that safely.
//
// 6. Fetch the data
//    - Use fetch() (or async/await) to send a request to the
//      OpenWeatherMap API with the URL you built.
//    - Handle the response: convert it to JSON.
//
// 7. Handle errors from the API itself
//    - What happens if the user types a city that doesn't exist?
//      OpenWeatherMap will send back an error response -- check for
//      this (e.g. a non-200 status or an error field in the JSON)
//      and show a friendly message instead of crashing or showing
//      nothing.
//    - Also think about network failures (no internet, API down) and
//      how you'd inform the user.
//
// 8. Display the results
//    - Once you get valid weather data back, pull out the pieces you
//      care about (city name, temperature, weather description,
//      humidity, icon, etc).
//    - Create/update elements in the results container to show this
//      information on the page (this is where "create + append"
//      from the notes above comes in handy!).
//    - Make sure old results get cleared out before showing new ones,
//      so you don't just keep stacking results on top of each other.
//
// 9. Polish / extra touches (optional, do after the core app works)
//    - Show a "loading..." message while the fetch is happening.
//    - Disable the submit button while a request is in progress so
//      users can't spam-click it.
//    - Style it a little so it's easier to read at a glance.
//    - Reset/clear the input field after a successful search.
//
// 10. Test it thoroughly
//    - Try a valid city name.
//    - Try an empty submission.
//    - Try a city that doesn't exist (e.g. "asdkjaskd").
//    - Try a city with multiple words (e.g. "Los Angeles").
//    - Try turning off your internet and see what happens.
