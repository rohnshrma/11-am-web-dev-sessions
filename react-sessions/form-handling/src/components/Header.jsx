const Header = (props) => {
  let cssProps = {
    backgroundColor: props.theme === "light" ? "#ccc" : "#333",
    boxShadow: "0px 2px 4px #000",
    color: props.theme === "light" ? "#333" : "#fff",
    padding: "10px",
  };

  return (
    <div className="header" style={cssProps}>
      <h2>{props.text}</h2>
    </div>
  );
};

export default Header;
