import Info from "./Info.js";
import "./Info.css";
function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="ron" number={2} />
      <AddItem text="ebrima" />
      <AddItem text="awa" />
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type something:</label>
      <input type="text" value={props.value} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}

export default App;
