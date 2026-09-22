// ── main.jsx ──────────────────────────────────────────────────────────────
// This is the ENTRY POINT of the whole React app.
// It's the first JS file that runs (Vite/CRA wire this file into index.html
// via a <script type="module" src="/src/main.jsx"> tag).
// Its only job: find a real DOM node and tell React "render my app inside here".

import { createRoot } from "react-dom/client";
// ^ react-dom is the package that knows how to talk to the actual browser DOM
//   (react itself is DOM-agnostic; it also powers React Native, etc).
//   createRoot() is the React 18+ API for starting a React "root" — the
//   connection point between your React component tree and a real DOM node.

import App from "./App.jsx";
// ^ Importing our top-level (root) component. Note: this is a DEFAULT import,
//   which matches `export default App;` at the bottom of App.jsx.
//   By convention, component names start with a Capital letter (PascalCase) —
//   React uses this casing to tell "my custom component" apart from a plain
//   HTML tag like <div> or <h1>.

createRoot(document.getElementById("root")).render(<App />);
// ^ Breaking this one line down:
//   1. document.getElementById("root")
//      → grabs the actual <div id="root"></div> from index.html.
//        This is the ONLY spot in the whole app where we touch the real DOM directly.
//   2. createRoot(thatDiv)
//      → creates a React root attached to that div. React will now "own"
//        everything inside it.
//   3. .render(<App />)
//      → <App /> is JSX for React.createElement(App, null).
//        It tells React: "mount the App component (and everything it renders)
//        inside the root div". From here on, React takes over and manages
//        all DOM updates for us — we never manually touch the DOM again.
