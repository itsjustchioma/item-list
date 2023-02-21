import { useState } from "react";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const add = () => {
    const newItem = prompt("Enter a new item: ");
    setItems((prevState) => [...prevState, newItem]);
  };

  const remove = () => {
    const itemRemove = prompt("Enter an item that you want to remove: ");
    if (itemRemove) {
      const newItems = items.filter((item) => item !== itemRemove);
      setItems(newItems);
    }
  };

  return (
    <div className="App">
      <h2>Items List</h2>
      <p>Create a list of items.</p>
      <br></br>
      <br></br>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br></br>
      <br></br>
      <button onClick={add}>Add Item</button>
      <br></br>
      <br></br>
      <button onClick={remove}>Remove Item</button>
    </div>
  );
}

export default App;
