// ── components/Card.jsx ─────────────────────────────────────────────────
// Another functional component, same pattern as Header, but this one
// receives TWO pieces of data through props instead of one, and is used
// repeatedly (once per item in our data array) rather than just once.

const Card = (props) => {
  // ^ Again, `props` is the single object argument React auto-supplies.
  //   In App.jsx this component is used like:
  //     <Card key={index} title={post.title} description={post.description} />
  //   That means the `props` object arriving here looks like:
  //     { title: post.title, description: post.description }
  //   (Note: `key` is special — see the explanation in App.jsx. React
  //   strips it out for its own internal use; it is NOT accessible as
  //   props.key inside this component.)

  return (
    <div className="card">
      {/* className instead of class: JSX is JS, and `class` is a reserved
          JS keyword, so React uses `className` and translates it to the
          real `class` attribute in the DOM under the hood. */}

      <h2>{props.title}</h2>
      {/* Pulls the `title` field out of props and renders it as text.
          Every time <Card /> is used with a different `title` prop value,
          this same JSX produces different visible output — that's reuse. */}

      <p>{props.description}</p>
      {/* Same idea for the description field. */}
    </div>
  );
};

export default Card;
// ^ Default export so App.jsx can `import Card from "./components/Card"`.
