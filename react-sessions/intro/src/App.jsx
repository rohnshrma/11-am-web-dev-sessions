// ── App.jsx ──────────────────────────────────────────────────────────────
// This is the ROOT component of the app. main.jsx renders <App /> into the
// page, and everything App returns becomes the entire visible UI.
// App's job here: import the smaller building-block components (Header,
// Card), import some data, and wire them together by passing PROPS.

import Header from "./components/Header";
// ^ Default import of the Header component we defined in Header.jsx.
//   We could name this import anything (e.g. `import Foo from ...`), but by
//   convention we keep it matching the component's own name for clarity.

import Card from "./components/Card";
// ^ Same idea — importing the Card component we defined in Card.jsx.

import postData from "./data";
// ^ Importing the plain array of {title, description} objects from data.js.
//   We're free to rename it on import — the file exports it as `data`
//   but we choose to call it `postData` here, since that's more meaningful
//   in this file's context (each object represents one "post").

function App() {
  // ^ App is also a component — just written as a regular `function`
  //   declaration instead of an arrow function assigned to a const.
  //   Both styles are valid ways to define a React functional component;
  //   what matters is that it's a function returning JSX.
  //   Notice App takes NO props here — nobody is rendering <App someProp="x" />
  //   anywhere, so there's nothing to receive. App is the top of the tree,
  //   so it's the one component whose data doesn't come from a parent —
  //   it originates data itself (via the `postData` import) and passes
  //   it DOWN to its children.

  return (
    <div>
      <Header txt="hello 1" />
      {/* Using the Header component like a custom HTML tag.
          `txt="hello 1"` is a PROP being passed down: App (the parent) is
          handing the string "hello 1" to Header (the child) under the name
          `txt`. Inside Header, this arrives as props.txt.
          This is a "self-closing" JSX tag (<Header ... />) because Header
          doesn't need any nested children content. */}

      <p>bye bye world</p>
      {/* Plain HTML tag — lowercase tag names (p, div, h1...) are treated
          by React as regular DOM elements, NOT components. This is exactly
          why component names must start with a capital letter: it's how
          JSX distinguishes "render a <Header> component" from "render a
          literal <header> HTML tag". */}

      {postData.map((post, index) => (
        // ^ We're inside curly braces { }, so this whole block is plain
        //   JavaScript being evaluated, and its result gets rendered.
        //
        //   postData.map(...) loops over every object in our data array
        //   and transforms each one into a piece of JSX (a <Card />).
        //   map() returns a NEW ARRAY — here, an array of <Card /> elements.
        //   React knows how to render an array of elements directly, so
        //   this array becomes 8 stacked <Card /> components on the page
        //   (one per object in data.js).
        //
        //   `post` is the current object being looped over, e.g.
        //   { title: "title 1", description: "description 1" }.
        //   `index` is its position in the array (0, 1, 2, ...).

        <Card key={index} title={post.title} description={post.description} />
        // ^ For each `post` object, we render one Card component and pass
        //   it props:
        //     - title={post.title}             → becomes props.title in Card
        //     - description={post.description} → becomes props.description in Card
        //
        //   key={index}: React requires a unique `key` prop on every
        //   element produced inside a .map() so it can efficiently track
        //   which items were added/removed/reordered between re-renders,
        //   without re-rendering everything from scratch. `key` is NOT
        //   passed through to Card as a regular prop — React intercepts
        //   and uses it internally for this bookkeeping only.
        //   (Using the array `index` as a key works fine here because the
        //   list is static and never reordered; if items could be
        //   reordered/added/removed, a stable unique id from the data
        //   itself would be the safer choice.)
      ))}
    </div>
  );
}

export default App;
// ^ Default export so main.jsx can `import App from "./App.jsx"`.
