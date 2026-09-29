// The title bar at the top. "props" is the bag of notes the parent (App) handed us:
// props.text is the title words, props.theme is "light" or "dark".
const Header = (props) => {
  // Styles written as a JavaScript object (inline styling) instead of in a CSS file.
  // We do it here so the colours can change depending on the theme.
  let cssProps = {
    // light mode = light grey background, dark mode = dark grey
    backgroundColor: props.theme === "light" ? "#ccc" : "#333",
    // a dark shadow under the bar (the CSS file makes this chunkier)
    boxShadow: "0px 2px 4px #000",
    // flip the text colour so it's always readable on the background
    color: props.theme === "light" ? "#333" : "#fff",
    // breathing room inside the bar
    padding: "10px",
  };

  return (
    // style={cssProps} applies the object above; className lets App.css style it too
    <div className="header" style={cssProps}>
      {/* Show the title that App sent us */}
      <h2>{props.text}</h2>
    </div>
  );
};

// Let other files import this component.
export default Header;
