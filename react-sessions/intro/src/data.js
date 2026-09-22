// ── data.js ──────────────────────────────────────────────────────────────
// This is NOT a component — it's just a plain JS file holding sample data.
// In real apps this array would usually come from an API call (fetch/axios)
// instead of being hardcoded here. We're hardcoding it so we have something
// to loop over and pass into components as PROPS.

const data = [
  // An array of plain JS objects. Each object represents "one card's worth"
  // of information: a title and a description.
  // Array.map() in App.jsx will turn each one of these objects into a
  // <Card /> component instance, passing each object's fields down as props.
  {
    title: "title 1",
    description: "description 1",
  },
  {
    title: "title 2",
    description: "description 2",
  },
  {
    title: "title 3",
    description: "description 3",
  },
  {
    title: "title 4",
    description: "description 4",
  },
  {
    title: "title 5",
    description: "description 5",
  },
  {
    title: "title 6",
    description: "description 6",
  },
  {
    title: "title 7",
    description: "description 7",
  },
  {
    title: "title 8",
    description: "description 8",
  },
];

export default data;
// ^ Default export — so any file can do `import postData from "./data"`
//   and name it whatever it wants (here App.jsx imports it as `postData`).
