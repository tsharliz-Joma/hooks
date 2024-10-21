import logo from "./logo.svg";
import "./App.css";

function App({ name }) {
  return (
    <div className="App">
      <div >
        This is dynamciall rendered by passing a prop to the App component.
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default App;
