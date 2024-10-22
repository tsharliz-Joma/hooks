
import "./App.css";
import StarRating from "./components/StarRating/StarRating";
import Checkbox from "./components/checkbox/Checkbox";
import Status from "./components/status/Status";

function App({ name }) {
  return (
    <div className="App">
      <h1>{name}</h1>
      <StarRating totalStars={5} />
      <Checkbox />
      <Status />
    </div>
  );
}

export default App;
