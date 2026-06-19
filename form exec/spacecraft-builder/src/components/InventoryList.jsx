function InventoryList({
  inventory,
  deleteItem,
}) {
  return (
    <div>
      <h2>Inventory</h2>

      {inventory.map((item) => (
        <div
          key={item.id}
          className="inventory-card"
        >
          <h3>{item.name}</h3>

          <p>Quantity: {item.quantity}</p>

          <p>Purpose: {item.purpose}</p>

          <button
            onClick={() =>
              deleteItem(item.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default InventoryList;