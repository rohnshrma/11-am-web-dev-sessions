# React Optimization - memo, useMemo, useCallback

React optimization means improving performance without changing what the app does.

**Not every re-render is bad.** React re-renders a component when its state or props change. Optimization means preventing *unnecessary* work, not preventing all re-renders.

> **Key rule:** when a parent re-renders, all its children re-render too, even if their props did not change.

Run the demo: `npm install` then `npm run dev`, then open the browser console (F12).

---

## 1. React.memo()

Prevents a component from re-rendering when its props have not changed.

**`Child.jsx`**

```jsx
import React from "react";

const Child = React.memo(({ name, count }) => {
  console.log("child re rendered");
  return (
    <div className="user">
      <h2>{name}</h2>
      <h3>{count}</h3>
    </div>
  );
});

export default Child;
```

**`App.jsx`**

```jsx
import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  console.log("app re rendered");
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name={"john doe"} count={count} />

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "dark" : "light"}
      </button>

      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default App;
```

**What to see in the console:**
- Click the **theme** button: `app re rendered` only. The child's props (`name`, `count`) did not change, so the child is skipped.
- Click **increase**: both `app re rendered` and `child re rendered`, because `count` changed.
- Remove `React.memo` and the child re-renders on every click.

**Note:** React.memo uses shallow comparison.

---

## 2. useMemo()

Caches the result of a calculation.

**`App.jsx`**

```jsx
import React, { useMemo, useState } from "react";

const App = () => {
  console.log("app re rendered");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const result = useMemo(() => {
    console.log("Calculation running");
    return number * 100;
  }, [number]);

  return (
    <div>
      <h2>Result : {result}</h2>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
};

export default App;
```

**What to see in the console:**
- Click **Count**: no `Calculation running`. Count is not in the dependency array.
- Click **Increase Number**: `Calculation running`, because `number` changed.

---

## 3. useCallback()

Caches a function so it keeps the same reference between renders.

**`Child.jsx`**

```jsx
import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("child re rendered");
  return <button onClick={onClick}>Child button</button>;
});

export default Child;
```

**`App.jsx`**

```jsx
import React, { useCallback, useState } from "react";
import Child from "./Child";

const App = () => {
  console.log("app re rendered");

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
};

export default App;
```

**What to see in the console:**
- Click **Count**: `app re rendered` only. The child is skipped.
- Replace `handleClick` with a plain function (no `useCallback`) and the child re-renders on every click.

**Why:**
- Functions are recreated on every render by default.
- A new function means a "new" prop, so `React.memo` would not help.
- `useCallback` keeps the same function reference.
- Use `useCallback` + `React.memo` together.

---

## Summary

| Tool | Purpose |
|---|---|
| React.memo | Prevent unnecessary component renders |
| useMemo | Cache a calculated value |
| useCallback | Cache a function reference |

## Don't optimize blindly

Measure first with the **React DevTools Profiler**. Memoization has a cost too, so only use it where it actually helps.
