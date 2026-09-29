// (Newer React doesn't actually need this import, but it's harmless.)
import React from "react";
// The single task card; we'll make one for every task in the list.
import Profile from "./Profile";

// Shows the whole list of tasks. It gets the list and the delete function from App.
const Profiles = ({ profiles, onRemove }) => {
  // Nothing in the list yet? Show a friendly message instead of an empty gap.
  if (profiles.length <= 0) {
    return <h2>No Profiles Yet! add one above.</h2>;
  } else {
    // Otherwise show the list.
    return (
      <ul>
        {/* map walks through the list one task at a time and turns each
            task into a <Profile> card. Result: one card per task. */}
        {profiles.map((profile) => (
          // We pass down the task data and the delete function.
          // Heads up: React normally wants a key={profile.id} here so it can
          // track each card; it's missing, so the console may show a warning.
          <Profile onRemove={onRemove} profile={profile} />
        ))}
      </ul>
    );
  }
};

// Let other files import this component.
export default Profiles;
