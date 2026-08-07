# JavaScript Notes

## Where should you write JS?

JavaScript can be added to an HTML page in three places:

1. **Inline** — directly inside an HTML tag's attribute (e.g. `<button onclick="...">`). Avoid this; it mixes structure with behavior and gets messy fast.
2. **Internal (Embedded)** — inside a `<script>` tag written directly in the HTML file.
3. **External** — inside a separate `.js` file, linked into the HTML with `<script src="...">`.

### Internal JS

Written between `<script>` and `</script>` tags inside the HTML file itself.

```html
<script>
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("h1").innerText = "Bye World";
  });
</script>
```

- Good for tiny, page-specific snippets or quick experiments.
- Downside: can't be reused across pages, and mixes markup with logic in one file.

### External JS

Written in its own `.js` file (e.g. `script.js`) and linked using the `src` attribute:

```html
<script src="./script.js"></script>
```

- Keeps HTML (structure) and JS (behavior) separate — cleaner and easier to maintain.
- The file can be reused across multiple HTML pages.
- Can be cached by the browser, which speeds up page loads on repeat visits.
- **Best practice**, and what we use in this project (`script.js`).

### Where to place the `<script>` tag

- Placing it at the **end of `<body>`** (like `index.html` does) ensures the HTML elements exist in the DOM *before* the script tries to access them (e.g. `document.querySelector("button")`).
- If placed in `<head>`, the script may run before the elements exist, causing errors — unless you wrap the code in `DOMContentLoaded`:

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // safe to access DOM elements here even if script is in <head>
  });
</script>
```

---

## Output: `console.log`, `window.alert`, `alert`

### `console.log()`

- Prints output to the **browser's developer console** (not visible on the page itself).
- Used mainly for **debugging** — checking values, confirming code runs, inspecting objects.

```js
console.log(2 + 2); // 4 — shown only in DevTools console
```

### `window.alert()` / `alert()`

- Shows a **popup dialog box** on the page with a message and an OK button.
- `window` is the global object in the browser; `alert()` is a method on it. Since `window` is the default global scope, `alert("hello world")` and `window.alert("hello world")` do exactly the same thing.
- Execution of the script **pauses** until the user clicks OK.

```js
window.alert("hello world");
alert(); // same thing, window is implied
```

Use `alert` sparingly — it's blocking and disruptive to the user; mostly used for quick testing, not real UI.

---

## Input: `prompt()`

- Shows a popup dialog with a text input box, asking the user for information.
- **Returns** whatever the user typed (as a string), or `null` if they click Cancel.
- Also pauses script execution until the user responds.

```js
prompt("message", "username");
// 1st argument: the message/question shown to the user
// 2nd argument: default value pre-filled in the input box
```

To actually use the input, store it in a variable:

```js
let name = prompt("What is your name?");
console.log(name);
```

---

## Variables: `var`

- The `var` keyword is used to **declare** a variable.
- A variable can be declared first and given a value (**initialized**) later, or both at once.

```js
var age;        // declaration — variable exists, but value is undefined
age = 23;        // initialization — assigning a value

var yourAge = 23; // declaration + initialization in one line
```

### Notes on `var`

- `var` is **function-scoped** (not block-scoped like `let`/`const`), meaning it "leaks" out of `if`/`for` blocks and is only contained within a function.
- `var` variables are **hoisted** — the declaration is moved to the top of its scope automatically, so you can reference the variable before the line it's declared on (it will just be `undefined` until initialized).
- `var` can be **re-declared** with the same name in the same scope without an error — this can cause accidental bugs.
- Modern JavaScript generally prefers `let` (reassignable) and `const` (constant) over `var`, since they are block-scoped and safer. `var` is still important to know since it's the original way of declaring variables in JS and appears often in older code.
