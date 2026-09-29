// One single task card. It receives two things from its parent:
// "profile" (the task's data) and "onRemove" (the delete function).
// The { } in the brackets is a shortcut to unpack them straight away.
const Profile = ({ profile, onRemove }) => {
  // Runs when the Terminate button is clicked.
  const clickHandler = () => {
    // Tell App: "please delete the task with THIS id".
    // The id is how App knows which one out of the whole list to remove.
    onRemove(profile.id);
  };

  return (
    // <li> is one bullet point in a list
    <li>
      {/* Curly braces let us drop JavaScript values into the HTML */}
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      {/* On click, run clickHandler */}
      <button onClick={clickHandler}>Terminate</button>
    </li>
  );
};

// Let other files import this component.
export default Profile;
