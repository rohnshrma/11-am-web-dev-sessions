# Assignment: Recipe Box (a CRUD app in React)

You've already built the **To-Do List** in class. This is the same idea with a bit more going on: instead of tasks, you'll manage **recipes**, and on top of adding and deleting you'll also be able to **edit** them.

**CRUD** just means the four basic things any app does with data:

| Letter | Means  | In this app                         |
| ------ | ------ | ----------------------------------- |
| **C**  | Create | Add a new recipe from the form      |
| **R**  | Read   | Show all recipes as cards           |
| **U**  | Update | Click Edit, change it, save it      |
| **D**  | Delete | Click Delete, the card disappears   |

---

## Getting started

```bash
cd recipe-app
npm install
npm run dev
```

Open the link Vite gives you. You'll see a finished-looking page that doesn't do anything yet. That's on purpose.

### What you've been given

- `src/App.jsx`: the whole page as plain markup with two fake recipes typed in by hand. No state, no handlers, nothing.
- `src/App.css`: all the styling. **You shouldn't need to write any CSS.** Keep the class names from `App.jsx` and things will look right.
- `src/components/`: empty. This is where your components go.
- `uuid` is already in `package.json`, same as the to-do list.

---

## What a recipe looks like

Every recipe in your app should be an object shaped like this:

```js
{
  id: "a1b2c3...",          // from uuidv4()
  title: "Masala Omelette",
  category: "Breakfast",    // Breakfast | Lunch | Dinner | Dessert
  cookTime: "15",           // number inputs still give you a string!
  ingredients: "2 eggs, 1 onion, ...",
  instructions: "Whisk the eggs, ..."
}
```

Notice the `name` attribute on each form field in `App.jsx` already matches these keys (`title`, `category`, `cookTime`, `ingredients`, `instructions`). That's not an accident. Think back to how one `changeHandler` handled both inputs in `AddTask`.

---

## Component plan

Break `App.jsx` up like this (the comments in `App.jsx` show you where each piece starts):

```
App                 -> holds the list of recipes (and later, which one is being edited)
├── Header          -> just the title, no props needed
├── RecipeForm      -> the form; used for adding AND editing
└── Recipes         -> the list, or the empty message
    └── Recipe      -> one card
```

Compare this with the to-do list:

| To-Do List | Recipe Box   |
| ---------- | ------------ |
| `Header`   | `Header`     |
| `AddTask`  | `RecipeForm` |
| `Tasks`    | `Recipes`    |
| `Task`     | `Recipe`     |

---

## Part 1: Components (no logic yet)

1. Create `Header.jsx`, `RecipeForm.jsx`, `Recipes.jsx` and `Recipe.jsx` inside `src/components/`.
2. Move the matching chunk of markup out of `App.jsx` into each one.
3. Import them back into `App.jsx` and use them.

**Check:** the page should look exactly the same as before. If it doesn't, you probably dropped a `className` along the way.

---

## Part 2: Read (show recipes from state)

1. In `App`, create a piece of state that holds an **array of recipes**. Start it as an empty array.
2. Pass that array down to `Recipes` as a prop.
3. In `Recipes`, use `.map()` to turn each recipe into a `<Recipe />`. Don't forget the `key`.
4. In `Recipe`, show the recipe's real data instead of the hard-coded text.
5. If the array is empty, show the empty-state message instead of the list (it's in a comment in `App.jsx`).
6. Make the count badge ("2 recipes") show the real number.

> **Tip:** while testing, you can start your state with one or two recipe objects typed in by hand, then switch back to `[]` once adding works.

---

## Part 3: Create (add a recipe)

1. In `RecipeForm`, manage the form fields with **`useReducer`**, just like we did in `AddTask`.
   - Make an `initialState` object with all five fields. Give `category` a sensible default like `"Breakfast"`, because a `<select>` always has something picked.
   - Write a reducer that updates one field at a time, plus a `"reset"` action.
2. Turn every field into a **controlled input**: give it a `value` from state and an `onChange`.
   - `<select>` and `<textarea>` work exactly the same way as `<input>` here.
   - You should only need **one** `changeHandler` for all five fields.
3. Handle the form's submit:
   - Stop the page from reloading.
   - Send the new recipe (with a `uuidv4()` id) up to `App` through a function prop (like `onAdd`).
   - Reset the form.
4. In `App`, write the handler that adds the new recipe to the array **without changing the old array** (make a new one).

**Bonus check:** don't let someone add a recipe with an empty title.

---

## Part 4: Delete

1. In `App`, write a handler that takes an `id` and removes that recipe from the array.
2. Pass it down: `App` → `Recipes` → `Recipe`.
3. Hook it up to the Delete button on each card.

You've done this exact thing in the to-do list. Use the same array method.

---

## Part 5: Update (edit a recipe)

This is the new part, so take it slowly.

**The idea:** clicking Edit on a card loads that recipe into the form. The form switches to "edit mode". Submitting saves the changes to the same recipe (same `id`) instead of making a new one.

1. **Remember who's being edited.** `App` needs a second piece of state that tells it which recipe is being edited (or that nothing is). Think about what the "nothing" value should be.
2. **Edit button.** Clicking Edit on a card should set that state. Pass a function down to the card like you did for delete.
3. **Fill the form.** `RecipeForm` needs to know about the recipe being edited, so pass it in as a prop. Your reducer's starting value can come from that prop instead of `initialState`.
   - **New concept: the `key` trick.** `useReducer` only reads its starting value **once**, when the component first appears. To make React throw away the old form and build a fresh one with the new starting values, give `<RecipeForm />` a `key` that changes whenever you start editing a different recipe (or stop editing). It's the same `key` you've been putting on list items, just used to say "this is a different form now."
4. **Saving.** When the form is submitted in edit mode, send the updated recipe up to `App` (keep its original `id`). In `App`, build a new array where that one recipe is swapped for the updated one and the rest stay as they are.
   - Hint: you used `.filter()` to remove an item. Which array method gives you back an array of the **same length** with one item swapped out?
5. **Done editing.** After saving, or when Cancel is clicked, go back to "not editing".
6. **Make it look right** using the classes that are already styled:
   - Form gets `is-editing`, the title becomes "Edit Recipe", and the button says "Update Recipe".
   - The Cancel button only shows while editing.
   - The card being edited gets `is-editing` too.

> **Hint for classes:** `className` is just a string, so you can build it with a template string and a condition inside `${ }`.

---

## Bonus (optional)

- **Category filter:** make the chips work. Keep the selected category in state, give the right chip the `active` class, and only show matching recipes. "All" shows everything. (Should you store a second filtered array in state, or work it out while rendering? Think about which one can't get out of sync.)
- **Ingredients as a list:** show ingredients as a `<ul>` by splitting the text on commas.
- **Confirm delete:** ask "Are you sure?" before deleting.

---

## Concepts you'll be using

Everything here was covered in the to-do list except the `key` trick for resetting the form.

| Concept                                   | Where it shows up here                                    |
| ----------------------------------------- | --------------------------------------------------------- |
| Components & `export default`             | Header, RecipeForm, Recipes, Recipe                       |
| Props (data down)                         | the recipes array, a single recipe, the recipe being edited |
| Functions as props (events up)            | `onAdd`, `onDelete`, `onEdit`, `onUpdate`, `onCancel`     |
| `useState`                                | the recipes array, which recipe is being edited           |
| `useReducer` (state, action, dispatch)    | the form fields                                           |
| Controlled inputs                         | every input, the select and both textareas                |
| One handler for many fields (`[name]`)    | `changeHandler` in RecipeForm                             |
| `e.preventDefault()`                      | form submit                                               |
| Spread `...` to copy objects/arrays       | adding, updating, reducer                                 |
| `uuid` for ids                            | every new recipe                                          |
| `.map()` + `key`                          | rendering cards, and updating one recipe                  |
| `.filter()`                               | deleting (and the bonus filter)                           |
| Conditional rendering                     | empty state, edit mode, Cancel button                     |

---

## Before you submit, check that

- [ ] There's no hard-coded recipe left in the markup
- [ ] Adding a recipe shows a new card and clears the form
- [ ] Deleting removes only the right card
- [ ] Edit fills the form, Update saves to the **same** card, and no duplicate appears
- [ ] Cancel leaves the recipe unchanged and empties the form
- [ ] The count badge and the empty message are always correct
- [ ] No red errors or "unique key" warnings in the browser console
- [ ] `npm run lint` passes

Good luck, and feel free to add your own favourite recipes while testing.
