import { useState } from "react";

function AddProducts() {
  const [Fruits, setFruits] = useState(["Apple", "orange"]);

  function handleAddFruit() {
    const newFruit = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFruits([...Fruits, newFruit]);
  }

  return (
    <div>
      <h2>List of Fruid</h2>
      <ul>
        {Fruits.map((Fruit, index) => (
          <li key={index}>{Fruit}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter fruit name" />
      <button onClick={handleAddFruit}>Add food</button>
    </div>
  );
}

export default AddProducts;
