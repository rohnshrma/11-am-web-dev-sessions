# useEffect – Simple Explanation

## What is useEffect?

Normally a React component does only one job: it shows something on the screen based on its state and props.

But sometimes we need to do some extra work that is not about showing things. For example:

- Getting data from a server (API call)
- Setting a timer
- Changing the page title
- Listening to the scroll or resize of the window

This extra work is called a **side effect**, and `useEffect` is the hook where we write it.

Think of it like this: the component is a shop counter, and `useEffect` is the "also do this after the shop opens" list.

## Basic Syntax

```jsx
useEffect(() => {
  // the work you want to do
}, [dependencies]);
```

Two things go inside `useEffect`:

1. A function – the work to be done.
2. A dependency array – it tells React *when* to do that work.

Do not forget to import it first:

```jsx
import { useEffect, useState } from "react";
```

## The Three Ways of Using It

The whole confusion of `useEffect` is only about the second part, the dependency array. There are three cases.

### 1. No dependency array

```jsx
useEffect(() => {
  console.log("I run");
});
```

It runs after **every render**. If any state changes and the component re-renders, this runs again. Use it very carefully, because if you do an API call here it will keep calling the server again and again.

### 2. Empty dependency array `[]`

```jsx
useEffect(() => {
  console.log("I run only once");
}, []);
```

It runs only **one time**, when the component appears on the screen for the first time (this is called *mounting*). This is the most common choice for fetching data when the page loads.

### 3. Array with values `[txt]`

```jsx
useEffect(() => {
  console.log("txt changed");
}, [txt]);
```

It runs once at the start, and after that **only when `txt` changes**. If some other state changes (like `theme`), this will not run.

## Quick Table

| What you write | When it runs |
| --- | --- |
| `useEffect(() => {})` | After every render |
| `useEffect(() => {}, [])` | Only once, at the start |
| `useEffect(() => {}, [txt])` | At the start, and whenever `txt` changes |

## The Example in Our `App.jsx`

Our file has two states:

```jsx
const [theme, setTheme] = useState("light");
const [txt, setTxt] = useState("");
```

- `theme` – decides whether the page is light or dark.
- `txt` – stores whatever the user types in the input box, and shows it in the `<h1>`.

Then we have this `useEffect`:

```jsx
useEffect(() => {
  async function fetchProfile() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
    );
    const data = await response.json();
    console.log(data);
  }

  fetchProfile();
}, [txt]);
```

### Line by line

1. `async function fetchProfile()` – we make a small function inside, because the function we give to `useEffect` itself should not be `async`. So we make a separate async function and call it.
2. `fetch("https://jsonplaceholder.typicode.com/users")` – we ask a free practice website for a list of fake users.
3. `await response.json()` – the server gives the answer in raw form, so we convert it into a normal JavaScript data we can use.
4. `console.log(data)` – we just print it in the browser console to see it.
5. `fetchProfile()` – we actually call the function. Without this line, nothing will happen.
6. `[txt]` – this is the dependency array. It says "run this again whenever `txt` changes".

### What will happen when you run it

- When the page opens, the users list is fetched once and printed in the console.
- Every time you type a letter in the input box, `txt` changes, so the fetch happens again. Type 5 letters, and you will see 5 more prints in the console.
- When you click the **Dark / Light** button, `theme` changes, but `txt` does not. So the component re-renders, but the fetch does **not** happen. You can confirm it because "App rendered" gets printed, but no new users data.

This is the real use of the dependency array: it stops useless work.

### Try it yourself

In `App.jsx`, the other two versions are written in comments. Try each one and watch the console:

- **No array** – the fetch happens even when you click the theme button.
- **`[]`** – the fetch happens only once, typing does nothing.
- **`[txt]`** – the fetch happens on typing, but not on the theme button.

## Common Mistakes

- **Forgetting the dependency array.** The effect runs on every render, and if it also changes state, it can go into an infinite loop.
- **Making the effect callback `async` directly.** Write `useEffect(async () => {})` and React will complain. Make an inner async function like we did.
- **Leaving out a value that the effect uses.** If your effect uses `txt` inside it, `txt` should be in the array.

## One Line to Remember

> `useEffect` = "after the screen is drawn, do this extra work, and repeat it only when the values in the array change."
