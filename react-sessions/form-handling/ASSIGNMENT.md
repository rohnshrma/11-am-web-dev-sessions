# Assignment: Build a To-Do App

Practice everything we covered in the `form-handling` app: components, props, state, forms, events, and rendering lists.

**Goal:** build a To-Do app where you can **create**, **read**, **update the status of**, and **delete** tasks.

> Build it yourself in a fresh Vite + React project. Don't copy-paste from `form-handling`. Look at it only when you're stuck.

---

## Setup

```bash
npm create vite@latest todo-app -- --template react
cd todo-app
npm install
npm install uuid
npm run dev
```

---

## What the app must do

| Action | What it means |
| --- | --- |
| **Create (write)** | Fill in a form (title + description) and add a new task to the list. |
| **Read** | Show all tasks in a list, with title, description and status. |
| **Update (status)** | Change a task's status: `Pending`, `In Progress` or `Done`. |
| **Delete** | Remove a task from the list. |

Each task is an object shaped like this:

```js
{
  id: "b1f4...",            // unique id from uuid
  title: "Buy milk",
  description: "2 litres, toned",
  status: "Pending"         // Pending | In Progress | Done
}
```

---

## Suggested component structure

```
App
├── Header          -> app title
├── TaskForm        -> inputs + submit button
└── TaskList        -> shows all tasks (or an empty message)
    └── TaskItem    -> one task card: title, description, status, buttons
```

---

## Requirements

### 1. State lives in `App`
- Keep the `tasks` array in `useState` inside `App`.
- Write three handler functions in `App`: `addTaskHandler`, `updateStatusHandler`, `deleteTaskHandler`.
- Pass them down as props (`onAdd`, `onStatusChange`, `onDelete`).
- Always update state with the **functional form**: `setTasks((prev) => ...)`.

### 2. `TaskForm` (Create)
- Two controlled inputs: **title** and **description**.
- Each input needs its own `onChange` handler (or one shared handler).
- On submit:
  - call `e.preventDefault()`
  - create a task with a `uuid` id and status `"Pending"`
  - send it up with `onAdd(task)`
  - **clear the inputs** after submitting (use `value={...}` on the inputs)
- Don't add empty tasks. Check that the title isn't blank.

### 3. `TaskList` (Read)
- If there are no tasks, show a friendly message like "No tasks yet, add one above."
- Otherwise use `.map()` to render a `TaskItem` for each task.
- **Don't forget `key={task.id}`.**

### 4. `TaskItem` (Update + Delete)
- Show the title, description and current status.
- Add a `<select>` (or three buttons) to change the status. On change, call `onStatusChange(task.id, newStatus)`.
- Add a **Delete** button that calls `onDelete(task.id)`.
- Bonus: cross out the title when the status is `Done`.

### 5. Styling
- Any style you like. Try applying what you learned in class: inline styles from props, a CSS file and `className`.
- The status should be visible at a glance (for example a different colour per status).

---

## Hints

- **Add:** `[newTask, ...prev]`
- **Delete:** `prev.filter((t) => t.id !== id)`
- **Update status:** use `.map()` and return a copy of the matching task with the new status:
  ```js
  prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
  ```
- Never change state directly. Always build a new array or object.

---

## Bonus challenges (optional)

1. **Filter buttons:** All / Pending / In Progress / Done (extra state for the current filter).
2. **Task counter:** "3 of 7 tasks done".
3. **Light/Dark toggle** using a `theme` state passed to a component as a prop.
4. **Edit a task's title/description** (an edit mode inside `TaskItem`).
5. **Save to `localStorage`** so tasks survive a page refresh (use `useEffect`).

---

## Checklist before you submit

- [ ] I can add a task and the form clears afterwards
- [ ] Empty titles are rejected
- [ ] All tasks are listed, and the empty state message shows when there are none
- [ ] I can change a task's status and the UI updates
- [ ] I can delete a task
- [ ] There is no "each child should have a unique key" warning in the console
- [ ] State is updated using `setState((prev) => ...)`
- [ ] Components are in separate files, each with a comment or two explaining it

---

## Concepts you're practising

Components, props, `useState`, controlled inputs, event handling, `preventDefault`, lifting state up, rendering lists with `map` and `key`, and immutable updates with `filter`, `map` and the spread operator (`...`).
