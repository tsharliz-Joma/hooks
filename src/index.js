import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const people = ["Alex", "Ali", "Anna", "Charles", "Diana", "Ella", "Eva"];
// console.log(people[1]);

// Arrayb destructuring
// const [first, second] = ["Alex", "Ali", "Anna"];
// console.log(`The first person is ${first}`, `The second person is ${second}`);

// const [, , third] = ["Alex", "Alex", "Ali"];
// console.log(third);

// function App() {
//   const [status, setStatus] = useState("Not deliverd");
//   return (
//     <div className="App">
//       <div>The package is: {status}</div>
//       <button onClick={() => setStatus("Delivered")}>Deliver</button>
//     </div>
//   );
// }

// function App() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div className="App">
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => setChecked((checked) => !checked)}
//       />
//       <p>{checked ? "checked" : "not checked"}</p>
//     </div>
//   )
// }

const createArray = (length) => [...Array(length)];

function Star({ selected, onSelect }) {
  return <FaStar onClick={onSelect} color={selected ? "red" : "gray"} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="star-rating">
      <div className="stars">
        {createArray(totalStars).map((n, i) => (
          <Star
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
            key={i}
          />
        ))}
        <p>
          {selectedStars} of {totalStars} stars
        </p>
      </div>
    </div>
  );
}

function App() {
  return <StarRating totalStars={4} />;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
