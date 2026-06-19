import { useState } from "react";
import SpacecraftForm from "./components/SpacecraftForm";
import InventoryList from "./components/InventoryList";

function App() {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Oxygen Tank",
      quantity: 3,
      purpose: "Equipment",
    },
  ]);

  const addItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  const deleteItem = (id) => {
    setInventory(
      inventory.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>

      <SpacecraftForm addItem={addItem} />

      <InventoryList
        inventory={inventory}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;