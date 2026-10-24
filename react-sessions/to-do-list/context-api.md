# Context API (with our To-Do List code)

## 1. The problem: prop drilling

Earlier, `App` kept the `tasks` state and passed everything down through props.
`AddTask` needed `onAdd`, and `Tasks` needed the list. Then `Tasks` passed the delete function again to every `Task`.

`Header` and others in between sometimes had to carry props they never used. This is called **prop drilling**:
data goes through many components only to reach the one that needs it.

## 2. What is Context?

Context is a shared "box" of data. Any component can open it directly, no matter how deep it sits in the tree.
We don't need to hand the data from parent to child to grandchild.

## 3. What is Context API?

It is React's built-in way to use Context. It has three parts:

| Part | What it does | In our code |
| --- | --- | --- |
| `createContext()` | Makes the box | `const TaskContext = createContext();` in `TaskContext.js` |
| `Provider` | Fills the box and shares it with everything inside it | `<TaskContext.Provider value={{ tasks, addTaskHandler, removeTaskHandler }}>` |
| `useContext()` | Opens the box in any component | `const { tasks } = useContext(TaskContext);` |

## 4. Flow BEFORE (props)

```
App                         (owns tasks, addTask, removeTask with useState)
 |-- Header
 |-- AddTask                <- onAdd passed as prop
 |-- Tasks                  <- tasks + onDelete passed as props
      |-- Task              <- task + onDelete passed again as props
```

Data goes down only one step at a time:

```
App --props--> Tasks --props--> Task
App --props--> AddTask
```

Problems:

- `App` has to know about and pass everything.
- If a new component needs the tasks, we again pass props through the middle ones.
- Middle components carry props they don't use.

## 5. Flow AFTER (context)

```
main.jsx
 +-- TaskProvider           (owns tasks, addTaskHandler, removeTaskHandler)
      +-- App               (just layout, no props)
           |-- Header
           |-- AddTask      <- useContext -> addTaskHandler
           |-- Tasks        <- useContext -> tasks
                |-- Task    <- useContext -> removeTaskHandler
                               (only the single `task` comes by props)
```

Now every component takes what it needs straight from the provider:

```
            +-------------------------------+
            |  TaskProvider                 |
            |  tasks, addTaskHandler,       |
            |  removeTaskHandler            |
            +---------------+---------------+
                            | useContext
        +-------------------+-------------------+
        |                   |                   |
     AddTask              Tasks                Task
  (addTaskHandler)        (tasks)       (removeTaskHandler)
```

## 6. How our code works, step by step

1. `TaskContext.js` creates the context and the `TaskProvider` component. The `tasks` state and both handlers live here.
2. `main.jsx` wraps `<App />` in `<TaskProvider>`. Because of this wrapper, everything inside `App` can reach the context.
3. **Add:** user types, then submits the form in `AddTask`. It calls `addTaskHandler(newTask)` from context.
   `setTasks` updates the state, the provider re-renders, and `Tasks` shows the new task on top.
4. **Show:** `Tasks` gets `tasks` from `useContext` and uses `.map()` to render a `Task` for each.
5. **Delete:** `Task` calls `removeTaskHandler(id)`. The provider uses `.filter()` to drop that task, and the list updates.

```
user submits form
  -> AddTask: addTaskHandler(task)         (from useContext)
  -> TaskProvider: setTasks(prev => [task, ...prev])
  -> context value changes
  -> components using useContext(TaskContext) re-render
  -> Tasks shows the new list
```

## 7. Before vs After, quick table

| | Before (props) | After (context) |
| --- | --- | --- |
| Where is state? | `App` | `TaskProvider` |
| How does data reach a component? | Passed through every parent | `useContext` directly |
| What does `App` do? | Holds state + passes props | Only layout |
| `AddTask` gets function from | `props.onAdd` | `useContext(TaskContext)` |
| Adding a new component that needs tasks | Pass props through the middle | Just call `useContext` |

## 8. Things to remember

- A component must be **inside** the Provider to use the context. Outside it, `useContext` gives `undefined` and destructuring will crash.
- Whenever the `value` changes, all components using that context re-render.
- Use `setTasks((prev) => ...)` so we always work on the latest state.
- Context is good for data many components need (tasks, theme, logged-in user). For data only one child needs, normal props are fine.
- `Task` still gets the single `task` by props. That is correct, as it is specific to that item, not shared data.
