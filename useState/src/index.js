import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

// eslint-disable-next-line no-unused-vars
const people = ["Alex", "Ali", "Anna", "Charles", "Diana", "Ella", "Eva"];

// Array destructuring
// eslint-disable-next-line no-unused-vars
const [first, second, three] = ["Alex", "Ali", "Anna"];
console.log(`The first person is ${first}`, `The second person is ${second}`);

const [, , third] = ["Alex", "Alex", "Ali"];

root.render(
  <React.StrictMode>
    <App name={third} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
