# React Concepts: Components, Props & State

Notes for the 11 AM Web Dev batch. Examples refer to what we built in class: the **Counter** (`react-intro`), the **Timer**, and the **Card list** (`intro`).

---

## 1. Components

A **component** is a JavaScript function that returns JSX (HTML-like syntax that can also contain JavaScript). It is a reusable building block of the UI.

```jsx
const Header = () => {
  return <h1>Hello React</h1>;
};

export default Header;
```

Rules:

- The name **must start with a capital letter** (`Header`, not `header`). Lowercase tags like `<div>` are treated as plain HTML; capitalised ones are components.
- It must return **one root element** (wrap siblings in a `<div>` or a fragment `<>...</>`).
- Use `className` instead of `class`, and put JavaScript inside `{ }`.
- Use a component like a custom tag: `<Header />`.

Components form a **tree**. `main.jsx` renders `<App />`, and `App` renders other components:

```
App
├── Header
└── Counter
```

---

## 2. Props (data passed from parent to child)

**Props** (properties) are the inputs to a component. The parent passes them like HTML attributes, and the child receives them as one object.

```jsx
// Parent
<Card title="Learn React" description="Components, props, state" />

// Child
const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};
```

Key points:

- Props flow **one way only: top to bottom** (parent → child). A child never sends props up to its parent.
- Props are **read-only**. A component must never change its own props.
- The same component with different props gives different output. That is what makes it reusable.
- You can pass strings (`title="hi"`), and anything else inside braces: numbers, arrays, objects (`count={5}`, `user={{ name: "A" }}`).
- Destructuring is a common shortcut: `const Card = ({ title, description }) => ...`

### Rendering lists with `map()`

```jsx
{postData.map((post) => (
  <Card key={post.id} title={post.title} description={post.description} />
))}
```

`key` must be unique and stable per item (prefer an `id` over the array index). React uses it internally and does not pass it to the component.

---

## 3. State (data a component owns and can change)

**State** is data that belongs to a component and **changes over time**. When state changes, React **re-renders** the component so the UI matches.

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // [current value, updater function]

  const increaseHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseHandler}>INCREASE</button>
    </div>
  );
};
```

- `useState(0)` → `0` is the **initial value**.
- `count` is the current value; `setCount` is the only correct way to change it.
- **Never** do `count = count + 1` or `count++`. React won't know anything changed and won't re-render.
- Calling `setCount(...)` triggers a re-render, and the function runs again with the new `count`.
- State updates are not instant inside the same function run. `count` keeps its old value until the next render.
- When the new value depends on the old one, prefer `setCount((prev) => prev + 1)`.
- Each component instance has its **own** state. Two `<Counter />` components count independently.

### State in the Timer

The timer follows the same idea: a `seconds` state plus `setInterval` (inside `useEffect`) that calls `setSeconds((prev) => prev + 1)` every second. Each state change re-renders the component, and the new number appears on screen.

```jsx
import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(id); // cleanup when the component is removed
  }, []); // [] = run once, when the component first appears

  return <h2>{seconds}s</h2>;
};
```

---

## 4. Props vs State

| | Props | State |
|---|---|---|
| Who owns it? | The **parent** | The **component itself** |
| Can the component change it? | No (read-only) | Yes, via the setter (`setX`) |
| Direction | Parent → child | Internal to the component |
| Triggers re-render? | When the parent re-renders with new values | When the setter is called |
| Example | `title`, `description` on `Card` | `count` in `Counter` |

**Putting them together:** a parent holds state and passes it *down* as props. The child just displays it.

```jsx
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Display value={count} />          {/* state → prop, top to bottom */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

const Display = (props) => <h2>{props.value}</h2>;
```

---

## 5. Quick Recap

1. **Component**: a function that returns JSX. Capitalised name, one root element.
2. **Props**: inputs from parent to child. Read-only, one direction (top → bottom).
3. **State**: data owned by a component. Change it only with the setter, and React re-renders.
4. Data moves **down** the tree through props. Changing state re-renders the component and its children.

---

# Assignment: Practice Components, Props & State

**Rules**

- No forms or `<input>` handling. Use **buttons and `onClick` only**.
- Props go **top to bottom only** (parent → child). Do not try to pass anything back up.
- Use functional components and `useState`. Put each component in its own file.
- Do not mutate props or state directly.

Build the tasks below in a fresh Vite project (`npm create vite@latest`, choose React).

## Part 1: Components (warm-up)

Create a small profile page made of these components:

- `Navbar`: shows the app name and 3 static links (Home, About, Contact).
- `Footer`: shows "© 2026 Your Name".
- `App`: renders `Navbar`, some content, and `Footer`.

✅ Goal: understand component files, imports/exports, and the component tree.

## Part 2: Props

Create a `data.js` file with an array of at least 6 books (or movies, or products):

```js
const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", price: 499 },
  // ...
];
export default books;
```

1. Build a `BookCard` component that receives `title`, `author` and `price` as **props** and displays them.
2. In `App`, use `books.map()` to render one `BookCard` per book, with a proper `key`.
3. Build a `Badge` component that receives a `text` prop. Use it **inside** `BookCard` to show "Cheap" if `price < 300`, otherwise "Premium". (`App` → `BookCard` → `Badge` = props two levels deep.)
4. Add a `Title` component that receives a `text` prop and is used for the page heading.

✅ Goal: pass props down, reuse a component many times, and nest components.

## Part 3: State

Build these three small components (each has its own state):

1. **Counter+**: shows a number, with **Increase**, **Decrease** and **Reset** buttons. Do not let it go below 0.
2. **Toggle**: a button that switches text between "ON" and "OFF" (boolean state). The button label and background colour should change too.
3. **Timer**: shows seconds elapsed, with **Start**, **Stop** and **Reset** buttons (`useState` + `useEffect` + `setInterval`, and clean up the interval).

✅ Goal: use `useState` with numbers and booleans, and understand re-rendering.

## Part 4: Props + State together (main task)

Build a **Shopping Cart Summary** using the book data from Part 2.

- `App` holds the state `cartCount` (number of items) and `totalPrice`.
- Each `BookCard` receives its book details **and an `onAdd` function** as props, and shows an **"Add to Cart"** button. When clicked, the parent's state must update. *(Passing a function down as a prop is still top-to-bottom. The child only calls it and never sends data up on its own.)*
- A `CartSummary` component receives `cartCount` and `totalPrice` as **props** and displays them.
- Add a **Clear Cart** button in `App` that resets both values to 0.

Component tree:

```
App  (state: cartCount, totalPrice)
├── Title           (prop: text)
├── CartSummary     (props: cartCount, totalPrice)
└── BookCard × N    (props: title, author, price, onAdd)
    └── Badge       (prop: text)
```

✅ Goal: state lives in the parent, and props carry it down to display components.

## Bonus (optional)

- Add a **"Like"** button on each `BookCard` with its own `liked` state that toggles a ❤️ / 🤍. Each card should like independently.
- Show "Your cart is empty" when `cartCount` is 0, using a conditional (`cartCount === 0 ? ... : ...`).
- Style everything with a plain CSS file.

## Checklist before submitting

- [ ] Every component is in its own file with a capitalised name
- [ ] No prop is modified inside a child
- [ ] State is changed only through its setter function
- [ ] Every `.map()` item has a unique `key`
- [ ] No forms or inputs used
- [ ] No console errors or warnings
