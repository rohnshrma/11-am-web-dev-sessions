# Inventory Manager (MERN) - React Assignment

A shop owner wants to keep track of what is in the shop: which products are there, how many are left, and what the whole stock is worth. We have already built the **backend** for this. Your job is to build the **React frontend** that talks to it.

You have done a similar thing before in `tdl-mern`. Same folder style, same way of calling the API. This one is just a little bigger.

---

## What is inside this folder

```
inventory-management/
├── README.md        <- you are here
├── GUIDE.md         <- step by step implementation guide (read this next)
├── assignment.md    <- the earlier Context-only version (no backend). Not needed for this one.
├── API.md           <- every endpoint, with sample request and response
├── backend/         <- DONE. Do not change it.
│   ├── config/db.js
│   ├── models/Product.js
│   ├── controllers/productController.js
│   ├── routes/productRoutes.js
│   ├── seed.js
│   └── server.js
└── frontend/        <- YOUR WORK. Only the starter files are given.
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── App.css          <- all styling is ready
        ├── components/      <- empty
        ├── pages/           <- empty
        └── context/         <- empty
```

The structure is the same one we followed in `tdl-mern`: `config`, `models`, `controllers`, `routes`, and `server.js` that only wires everything together.

---

## How to run it

You need Node and MongoDB running on your machine (the same MongoDB you used for `tdl-mern`).

**Terminal 1: backend**

```bash
cd inventory-management/backend
npm install
npm run seed      # puts 8 sample products in the database (optional, but useful)
npm run dev       # runs on http://localhost:5000
```

**Terminal 2: frontend**

```bash
cd inventory-management/frontend
npm install
npm run dev       # Vite will show the link, usually http://localhost:5173
```

Quick check that the backend is alive: open `http://localhost:5000/api/products` in the browser. You should see a list of products in JSON.

If you see `MongoDB connection failed`, your MongoDB service is not running. Start it first and then run the backend again.

---

## What you will build

| Page | URL | What it does |
| --- | --- | --- |
| Dashboard | `/` | Summary cards, search, category filter, and all products as cards. Each card has `+` / `-` stock buttons, Edit and Delete. |
| Add Product | `/add` | A form to create a product |
| Edit Product | `/edit/:id` | Same form, but filled with the existing product |
| Product Detail | `/products/:id` | Full details of one product |
| Not Found | anything else | A simple 404 page |

---

## What you are allowed to use

Everything we did in the react-sessions folder, nothing more:

- Components, props, `children`, lists with `map` and `key`
- `useState`, `useReducer`
- `useEffect` and `axios` (as in `tdl-mern`)
- Context API: `createContext`, Provider, `useContext`
- `react-router-dom` (as in `mpa`)
- `React.memo`, `useMemo`, `useCallback` (as in `OPTIMZATION`)

Not needed and please do not use: Redux, any UI library (MUI, Bootstrap...), TypeScript, or any other state library. The CSS is already written, so you do not need Tailwind either.

---

## Rules

1. **Do not touch the `backend` folder.** If something looks wrong with the API, check `API.md` first. Most of the time the mistake is in the request you are sending.
2. The frontend must work with the **real API**. No hard-coded product arrays in the final code.
3. After every action (add, edit, delete, stock change), the screen should show the latest data without refreshing the page.
4. Keep one component in one file, and name the files like the component (`ProductCard.jsx`).

---

## Where to start

Open [GUIDE.md](./GUIDE.md) and go step by step. Do not skip to the end. Each step builds on the one before it, and each has a small checkpoint so you know it is working before you move ahead.

All the best. Ask doubts in the class group, but try for at least 15 minutes yourself first, and bring the console error along when you ask.
