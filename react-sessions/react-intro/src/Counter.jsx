// We're pulling in two "hooks" from React.
// Hooks are just special functions that let a component remember things.
// useReducer is the one we actually use in this file.
// useState is imported too, but we don't use it here. It's the simpler
// cousin of useReducer, so it's fine to leave it or delete it.
import { useReducer, useState } from "react";

// This is where our counter starts the very first time the page loads.
// We keep it in an object (instead of a plain 0) so that later on we can
// add more things to remember, like a step size or a max limit.
const initialState = {
  count: 0,
};

// ---------------------------------------------------------------
// THE REDUCER
// ---------------------------------------------------------------
// Think of the reducer as the "manager" of our counter.
// Nobody is allowed to change the count directly. Instead, they send
// the manager a note saying what they want, and the manager decides
// what the new count should be.
//
// It always gets two things:
//   state  -> what the count is right now (before the change)
//   action -> the note that was sent, e.g. { type: "INCREMENT" }
//             (this is the same object you pass into dispatch({...}))
//
// Whatever the reducer returns becomes the new state.
// It must return a brand new object. Never change the old one directly.
const counterReducer = (state, action) => {
  // These two logs are just for learning. Open the browser console
  // and you'll see the old state and the note that came in on every click.
  console.log(state);
  console.log(action);

  // Note says "INCREMENT" -> give back a count that's one higher.
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }

  // Note says "DECREMENT" -> give back a count that's one lower.
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }

  // Note says "INCREASE" -> this one carries extra info called "payload".
  // Payload is just the extra data we need, here it's how much to add.
  // So if payload is 50, the count jumps up by 50.
  if (action.type === "INCREASE") {
    return {
      count: state.count + action.payload,
    };
  }

  // If the note has a type we don't recognize, we fall back to the
  // starting value. In practice this works like a reset to 0.
  return initialState;
};

// The whole journey of one click, in one line:
// button => click handler => dispatch (send the note) => reducer (manager decides) => new state => screen updates

// ---------------------------------------------------------------
// THE COMPONENT
// ---------------------------------------------------------------
// A component is just a function that returns what should appear on screen.
const Counter = () => {
  // useReducer hands us back two things:
  //   counter  -> the current state, so counter.count is the number to show
  //   dispatch -> the function we call to send a note to the reducer
  // We tell it which reducer to use and what the starting state is.
  const [counter, dispatch] = useReducer(counterReducer, initialState);

  // This runs every time the component re-draws, so you can watch the
  // number change in the console after each click.
  console.log(counter.count);

  // Each handler below is what happens when a button is clicked.
  // None of them touch the count themselves. They only send a note.

  // Sends the "add one" note.
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  // Sends the "take away one" note.
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  // Sends the "add a custom amount" note, and tells it the amount is 50.
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", payload: 50 });
  };

  // Everything inside return() is JSX. It looks like HTML but lives in
  // JavaScript. Anything inside curly braces { } is JavaScript.
  return (
    // className is how we write "class" in React, because "class"
    // is already a reserved word in JavaScript.
    <div className="counter">
      {/* Shows the current number. When state changes, React redraws this for us. */}
      <h2>{counter.count}</h2>

      {/* onClick takes the function name only, no () after it.
          If we wrote incrementHandler() it would run straight away
          on page load instead of waiting for a click. */}
      <button onClick={incrementHandler}>INCREASE</button>
      <button onClick={decrementHandler}>DECREASE</button>
      <button onClick={increaseHandler}>INCREASE BY 50</button>
    </div>
  );
};

// This lets other files (like App.jsx) import and use <Counter />.
export default Counter;
