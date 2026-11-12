# Implementation Guide: Inventory Manager Frontend

Read `README.md` first for the setup, and keep `API.md` open in another tab. You will need it often.

This guide does not give you the full code. It tells you **what to build, in what order, and which class topic to look back at**. Where it helps, there is a small hint. The rest you have to write yourself, that is the whole point.

---

## Before you start: the plan in one picture

```
main.jsx
└── BrowserRouter
    └── InventoryProvider            <- all data + API calls live here
        └── App
            ├── Navbar
            └── Routes
                ├── /                 Dashboard
                │     ├── SummaryCards
                │     ├── SearchFilter
                │     └── ProductCard (many)
                ├── /add              AddProduct   -> ProductForm
                ├── /edit/:id         EditProduct  -> ProductForm
                ├── /products/:id     ProductDetail
                └── *                 NotFound
```

Folders (create these files as you go):

```
src/
├── main.jsx
├── App.jsx
├── App.css                   (given)
├── context/
│   └── InventoryContext.jsx
├── components/
│   ├── Navbar.jsx
│   ├── SummaryCards.jsx
│   ├── SearchFilter.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   └── Message.jsx           (loading / error / empty text)
└── pages/
    ├── Dashboard.jsx
    ├── AddProduct.jsx
    ├── EditProduct.jsx
    ├── ProductDetail.jsx
    └── NotFound.jsx
```

> The context file must be `.jsx`, not `.js`, because it has JSX inside it. We faced this exact problem with `TaskContext` in class.

### Which topic is used where

| Topic from class | Where you will use it |
| --- | --- |
| Components, props, `map` + `key` | `ProductCard`, Dashboard list |
| `useState` | search text, category filter, error message, loading |
| `useReducer` | form fields in `ProductForm` |
| Controlled inputs | every field in the form |
| Context API | `InventoryContext` |
| `useEffect` + axios | loading the products when the app opens, loading one product on edit/detail page |
| `react-router-dom` | pages, `Link`, `NavLink`, `useParams`, `useNavigate` |
| `useMemo` | summary numbers, filtered list |
| `React.memo` + `useCallback` | `ProductCard` and the functions passed to it |

---

## Step 1: Setup and first look

1. Start the backend (`npm run dev`) and the frontend (`npm run dev`).
2. Open the app. You should see "Inventory Manager" and the line "Backend is ready".
3. Open `src/App.css` and just scroll through it. See the class names like `product-card`, `badge`, `btn primary`. You will use these. A full list is at the bottom of this guide.

**Checkpoint:** both servers running, no red errors in the browser console.

---

## Step 2: Routing skeleton (static pages first)

Go back to the `mpa` project if you need to revise.

1. In `main.jsx`, wrap `<App />` in `<BrowserRouter>`.
2. Create the five pages with only a heading each (`<h2>Dashboard</h2>`, `<h2>Add Product</h2>` and so on).
3. In `App.jsx`, set up `<Routes>`:
   - `/` goes to Dashboard
   - `/add` goes to AddProduct
   - `/edit/:id` goes to EditProduct
   - `/products/:id` goes to ProductDetail
   - `*` goes to NotFound
4. Build `Navbar` with the classes `navbar`, `navbar-inner`, `brand`, `links`. Use `NavLink` for the links "Dashboard" and "Add Product". `NavLink` adds the class `active` by itself, and the CSS already styles it.
5. Put `Navbar` above `<Routes>`, and put the page content inside `<div className="container">`.

**Checkpoint:** clicking the links changes the page without a reload. Typing `/random` in the address bar shows your NotFound page.

---

## Step 3: Context with data loading

This is the heart of the app. Go back to `tdl-mern/frontend/src/context/TaskContext.js`. You already have a half written provider there with the `useEffect` and `axios.get`. Do the same thing here.

1. Create `context/InventoryContext.jsx`.
2. `createContext()` and export it.
3. Write `InventoryProvider` that keeps three pieces of state:
   - `products` (array, starts empty)
   - `loading` (boolean, starts `true`)
   - `error` (string, starts empty)
4. Inside a `useEffect` with an empty dependency array, fetch `GET /api/products` and put the result in `products`. Use `try / catch / finally`. Set `loading` to `false` in `finally`.
5. Put `API_URL` and a small `getErrorMessage(err)` helper at the top of the file, like in `TaskContext`.
6. Pass `{ products, loading, error }` through `value`, and render `{children}`.
7. Wrap `<App />` with `<InventoryProvider>` in `main.jsx` (inside `BrowserRouter` is fine).

> **Why `useEffect` and not just calling axios in the component body?** Think about what happens if you call `setProducts` during render. If you cannot answer this, open `react-intro` and read the `useEffect` notes again.

**Checkpoint:** temporarily add `console.log(products)` in the provider. You should see the array with your seeded products. Stop the backend and reload: `error` should get a message instead of crashing the page.

---

## Step 4: Show the products (Read)

1. Create a small `Message` component. It takes `type` ("loading", "error" or "empty") and `children`, and renders `<div className="loading">` / `<div className="error">` / `<div className="empty">`.
2. In `Dashboard`, read `products`, `loading`, `error` with `useContext`.
   - if `loading`, show "Loading products..."
   - else if `error`, show the error
   - else if there are no products, show "No products found"
   - else map the products into `<ProductCard product={p} key={p._id} />` inside `<div className="product-grid">`
3. Build `ProductCard`. Show name, category (as a `badge`), price, quantity, and **total value** (price x quantity). Use the classes `product-card`, `meta`, `price`, `total`, `desc`.
4. Format money using `toLocaleString("en-IN")` and the rupee sign, for example `₹4,999`.

**Checkpoint:** you see 8 cards. Add one product from Postman or curl, refresh the page, and see 9.

---

## Step 5: Low stock and out of stock styling

Still inside `ProductCard`. No new topic here, it is just conditional rendering like the theme `Card` in `intro`.

- quantity is `0`: add the class `out` to the card, show a badge `Out of stock` (class `badge out`)
- quantity is `1` to `5`: add the class `low`, show a badge `Low stock` (class `badge low`)
- otherwise: nothing extra

Build the className string carefully. A template literal works well:

```jsx
<div className={`product-card ${status}`}>
```

where `status` is a variable you work out above the `return`. Work it out as a plain variable. Do not put it in state (you will see why in the questions at the end).

**Checkpoint:** from the seeded data, "Gel Pen" is red, and Cotton T-Shirt, USB-C Cable, Office Chair are yellow.

---

## Step 6: Delete

1. In the provider, write `deleteProduct(id)`:
   - call `axios.delete(`${API_URL}/${id}`)`
   - on success, remove it from state with `.filter()`, using `setProducts(prev => ...)`
   - on failure, set `error`
2. Add it to `value`.
3. In `ProductCard`, add a Delete button (`btn danger`) inside `<div className="actions">`.
4. Ask for confirmation before deleting. Think about it: `window.confirm` is the simplest way, and it is fine here.

> Important thing to understand: you update the state **after** the server says OK, using the server's answer. Do not just remove from state and hope the server worked.

**Checkpoint:** delete a card, refresh the page, and it should stay deleted (proof that it really went to the database).

---

## Step 7: Stock buttons (+ and -)

1. In the provider, write `changeStock(id, change)`:
   - `axios.patch(`${API_URL}/${id}/stock`, { change })`
   - the response is the **updated product**. Replace that product in state using `.map()`: if the `_id` matches, return the server's version, else return the old one.
2. In `ProductCard`, add the stepper: a `div.stock` with a minus button, `span.qty`, a plus button.
3. Disable the minus button when quantity is `0`.
4. If the server returns an error (it will, if you somehow go below 0), show it using the `error` state.

**Checkpoint:** press `+` and `-`, the number changes, and the card colour changes at 5 and at 0 without any extra code from you. If that happens, you did Step 5 correctly.

---

## Step 8: Add product (Create)

This is where `useReducer` comes back. Look at `AddTask` in `to-do-list/src/components` and copy the *pattern*, not the code.

### 8a. Build `ProductForm`

It will be used for both Add and Edit, so make it reusable:

- props: `initialValues` (optional), `onSubmit` (function), `buttonText` (string)
- the form state is an object: `{ name, category, price, quantity, description }`
- one reducer, where the action `type` is the field name and `payload` is the value, plus a `RESET` action. This is how `AddTask` did it, so one `changeHandler` handles every input using `e.target.name` and `e.target.value`.
- inputs are controlled (`value` + `onChange`)
- `category` is a `<select>` with the six categories from `API.md` and a first option "Select category" with an empty value
- `price` and `quantity` are `type="number"`
- `description` is a `<textarea>`
- use `form-group`, `form`, `form-actions` classes

### 8b. Validate before sending

Before calling `onSubmit`, check and set an error message in a `useState`. Show it in `<div className="error">`. The rules:

- name empty or only spaces: "Name is required"
- no category chosen: "Please select a category"
- price empty or 0 or less: "Price must be more than 0"
- quantity empty or less than 0: "Quantity cannot be negative"

The server checks the same things, but a good form tells the user before making a network call.

Remember: values from inputs are strings. Convert `price` and `quantity` using `Number(...)` before you send.

### 8c. Provider function and the page

1. In the provider, write `addProduct(data)`: `axios.post(API_URL, data)`, then add the returned product to state, using `setProducts(prev => [res.data, ...prev])`.
2. If the API call fails, the form should not clear and the user should see the message. So `addProduct` needs to tell the form whether it worked. Think about what a function can return, or throw. Decide and be ready to explain your choice.
3. In `AddProduct` page, render `<ProductForm onSubmit={...} buttonText="Add Product" />`. On success, use `useNavigate` to go back to `/`.

**Checkpoint:** add a product, you land on the dashboard and see it at the top. Try submitting an empty form: you see the validation error and no request is made (check the Network tab).

---

## Step 9: Summary cards

Use the classes `summary`, `summary-card`, `label`, `value`. Add `warn` or `danger` to `summary-card` for the low stock and out of stock cards.

Show five cards:

1. Total products
2. Total units in stock
3. Total inventory value (sum of price x quantity)
4. Low stock items
5. Out of stock items

Two ways to get these numbers:

- **A.** call `GET /api/products/stats`
- **B.** calculate from the `products` array you already have

Do **B**, using `useMemo` so the calculation reruns only when `products` changes. With A you would have to call the API again after every add, delete and stock click, which is extra work and an extra request. With B they update on their own.

> If you want to see the difference in action, add a `console.log("calculating...")` inside the `useMemo` callback and check how often it prints. Then do the same without `useMemo`. This is what we did in `OPTIMZATION`.

**Checkpoint:** press `+` on a product. The "Total units" and "Total value" cards change immediately.

---

## Step 10: Edit product (Update)

Two pieces here: a page that gets the id from the URL, and the form filled with old values.

1. Add an Edit button to `ProductCard`. Use `<Link to={`/edit/${product._id}`} className="btn">`.
2. In `EditProduct`, get the id with `useParams()`.
3. Get that product's current data. You have two options:
   - find it in `products` from context, using `.find()`
   - call `GET /api/products/:id` in a `useEffect`

   Think about what happens if the user opens `/edit/<id>` directly by typing in the address bar, or refreshes the page. Is `products` already filled at that moment? Which option is safer? Choose one and be ready to explain it. (Hint: if you pick the `find` option, you must handle the time when `products` is still empty.)
4. In the provider, write `updateProduct(id, data)`: `axios.put(`${API_URL}/${id}`, data)`, then replace that product in state using `.map()`.
5. Pass the old values into the form as `initialValues`. Your reducer should start with those values instead of empty ones.

> **The classic trap.** You pass `initialValues`, but they arrive a little *after* the first render, since the product is still loading. `useReducer`'s initial state is only used **once**. So the form stays empty. There are two clean ways out: do not render `ProductForm` until the product is ready, or give `ProductForm` a `key` so React makes a fresh one. This is the same idea as the `key` hint in the old Context assignment. Pick one, and explain why it works.

6. Button text should say "Update Product". Add a Cancel button (`btn`) that goes back using `useNavigate(-1)` or a `Link`.
7. After a successful update, navigate back to `/`.

**Checkpoint:** change the price of a product, press Update, and see the new price on the dashboard. Refresh the page, the new price is still there.

---

## Step 11: Product detail page

1. Add a View button or make the product name a `Link` to `/products/${product._id}`.
2. In `ProductDetail`, read the id with `useParams()` and fetch the product with `GET /api/products/:id` inside `useEffect`. Keep its own `loading`, `error` and `product` state in this page. (Why local state here and not context? Because only this page needs it.)
3. If the server says `404`, show "Product not found" with a link back to the dashboard.
4. Show everything: name, category, price, quantity, description, total value, created date.
5. The dependency array of your `useEffect` should contain `id`. Why? Try removing it and see what happens when you go from one product's page to another.

**Checkpoint:** open `/products/abc` (invalid id). You should see a proper message, not a blank screen.

---

## Step 12: Search and category filter

Use `SearchFilter` with the classes `toolbar` for the wrapper, an `<input>` for search and a `<select>` for category (with an "All categories" option).

1. Keep `search` and `category` in `useState` in the **Dashboard**.
2. Filter the list **during render** with `useMemo` and `.filter()`. Do not touch the real `products` in context.
3. If the filter returns nothing, show "No products match your search".

> The API also supports `?search=` and `?category=`, and you may use it. But for a small shop with a few hundred products, filtering what you already have on the client is simpler and feels faster. Think about when it would stop being a good idea.

**Checkpoint:** type "pen" and only the pen shows. Pick "Grocery" and only rice shows. The summary cards at the top should **not** change while filtering (they describe the whole inventory).

---

## Step 13: Optimization pass

Now apply what we did in `OPTIMZATION`. Do this only after everything above works.

1. Wrap `ProductCard` in `React.memo`.
2. Your context functions (`deleteProduct`, `changeStock`) get recreated on every render of the provider, so `memo` is useless unless they are stable. Wrap them in `useCallback`. Since you used `setProducts(prev => ...)`, you can keep the dependency array empty. Check this: is it really safe in all of them?
3. Verify it worked. Add `console.log("render", product.name)` inside `ProductCard`. Type in the search box, and notice how many cards print. Then press `+` on one card. Only that one product should re-render, the other cards should stay quiet.

Remove the console logs after this.

**Checkpoint:** clicking `+` on one card logs only one "render".

---

## Step 14: Polish and error handling

Go through this checklist. Small things like these separate a project from an assignment.

- [ ] While data is loading, the page shows a loading message (not an empty screen)
- [ ] If the backend is off, a clear error is shown ("Could not load products. Is the backend running on port 5000?")
- [ ] Buttons are disabled while a request is in progress (at least on the form submit)
- [ ] Delete asks for confirmation
- [ ] No warnings in the console, especially no "each child should have a unique key"
- [ ] You use `product._id` and not `product.id`
- [ ] No leftover `console.log`
- [ ] The app works after a full page refresh on `/edit/<id>` and `/products/<id>`

---

## Bonus (optional)

1. **Low stock threshold:** show a small warning strip on top of the dashboard: "3 products are running low" with a button that filters the list to only those.
2. **Sort:** a dropdown to sort by name, price, or quantity.
3. **Server side search:** replace client side filtering with a call to `GET /api/products?search=...`. You will need a debounce, so think about how `useEffect` cleanup can help.
4. **Replace `useState` with `useReducer` inside the provider** and handle actions like `SET_PRODUCTS`, `ADD`, `UPDATE`, `DELETE`.
5. **Theme toggle** with a second context.

---

## Submission

1. The app runs with `npm run dev` for the frontend, with no errors in the console.
2. Create a file `frontend/answers.md` and write the answers to the questions below, in your own words. A copied answer is easy to spot.
3. Push your work inside the `inventory-management/frontend` folder. Do not push `node_modules`.

### Questions (write in `answers.md`)

1. Why do the products and the API functions live in context and not in `App`?
2. Why is `useEffect` needed for the first `axios.get`? What would go wrong without it?
3. After deleting a product, why do we update state from the server's reply instead of just refreshing the whole list?
4. The summary numbers are calculated with `useMemo` and not stored in their own `useState`. Why? What bug can happen if you store them?
5. In the edit page, how did you make the form show the old values? What happens if you skip your fix?
6. What does `React.memo` do, and why was it not enough without `useCallback`?
7. What is the difference between `useParams` and `useNavigate`?
8. The backend returns `_id` and not `id`. Where in your code does this matter?

---

## Appendix: CSS class names

| Where | Classes |
| --- | --- |
| Page wrapper | `container` |
| Navbar | `navbar`, `navbar-inner`, `brand`, `links` (and `active` is added by `NavLink`) |
| Summary | `summary`, `summary-card` (+ `warn` / `danger`), `label`, `value` |
| Search bar | `toolbar` |
| Product list | `product-grid` |
| Product card | `product-card` (+ `low` / `out`), `meta`, `price`, `total`, `desc` |
| Badge | `badge` (+ `low` / `out`) |
| Stock stepper | `stock`, `qty` (buttons go directly inside `stock`) |
| Buttons | `btn`, `btn primary`, `btn danger`, wrapper `actions` |
| Form | `form`, `form-group`, `form-actions` |
| Messages | `error`, `loading`, `empty` |
| Detail page | `detail` |
| 404 | `not-found` |

---

## If you get stuck

| Problem | Likely reason |
| --- | --- |
| `Network Error` in console | Backend is not running, or the URL is wrong. Open `http://localhost:5000/api/products` in the browser to check. |
| `404` on `PUT` or `DELETE` | You used `undefined` as the id, probably `product.id` instead of `product._id`. |
| `400 Invalid product id` | Same as above, or a typo in the URL. |
| Page goes blank after an action | Check the console. Usually you set `products` to an object instead of an array. |
| Edit form is empty | Read the "classic trap" in Step 10 again. |
| Numbers behave like text (`"5" + 1 = "51"`) | Convert with `Number()` before sending. |
| `useEffect` runs in a loop | Check the dependency array. Do not put state that the effect itself changes inside it. |
| Cards do not update after `+` | You are probably mutating the old object. Return a new one. |
