import React, { useReducer } from "react";

const initialState = {
  message: "Hello World",
};

// This function accepts two arguments: state and action.
// The state is the current state of the application, and the action is the object that describes what happened.
// The function returns the new state of the application.
// This is defining a list of actions and then dispatching them to the reducer.
function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return { message: "HEY! I just said Hello World" };
    case "whisper":
      return { message: "hey! i just said Hello World" };
    default:
      return state;
  }
}

function Message() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>Yell</button>
      <button onClick={() => dispatch({ type: "whisper" })}>Whisper</button>
    </>
  );
}

export default Message;
