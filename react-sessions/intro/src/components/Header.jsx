// ── components/Header.jsx ───────────────────────────────────────────────
// This file defines a single, reusable COMPONENT called Header.
// A "component" in React is just a JS function that returns JSX (what the
// UI should look like). React calls this function whenever it needs to
// know what to render, and re-calls it whenever the component's props
// (or state) change.

const Header = (props) => {
  // ^ Header is a FUNCTIONAL COMPONENT — an arrow function assigned to a
  //   const. React automatically passes ONE argument to every component
  //   function: an object called `props` ("properties").
  //
  //   Where does `props` come from? Look at App.jsx, where this component
  //   is used as: <Header txt="hello 1" />
  //   Every attribute you write on a JSX tag (txt="hello 1" here) gets
  //   collected by React into a single object and handed to the component
  //   as `props`. So here, props looks like: { txt: "hello 1" }
  //
  //   Props are how DATA FLOWS DOWN from a parent component (App) to a
  //   child component (Header) — this is React's "one-way data flow".
  //   Props are READ-ONLY inside the child: Header must never reassign
  //   or mutate props.txt — it can only read and display it.

  // props : obj
  // (original note kept: reminding us `props` is just a plain object)

  return <h1>{props.txt}</h1>;
  // ^ JSX: this LOOKS like HTML but it's not — it's syntactic sugar that
  //   compiles to React.createElement("h1", null, props.txt).
  //
  //   The curly braces { } inside JSX are how you drop back into plain
  //   JavaScript. Anything inside { } is evaluated as a JS expression and
  //   its result is rendered. So {props.txt} pulls the `txt` value out of
  //   the props object we received and prints it as text inside the <h1>.
  //
  //   Because this function returns <h1>{props.txt}</h1>, whatever string
  //   the parent passes as `txt` becomes the heading text. This is what
  //   makes Header REUSABLE — you could render <Header txt="hello 2" />
  //   elsewhere and get a different heading, using the exact same component.
};

export default Header;
// ^ Default export: makes this component importable elsewhere as
//   `import Header from "./components/Header"` (see App.jsx).
//   "Default" just means you don't need curly braces on import, and you're
//   free to rename it on import if you want.
