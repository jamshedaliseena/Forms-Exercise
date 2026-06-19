import { useState } from "react";

function SpacecraftForm({ addItem }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    purpose: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.quantity ||
      !formData.purpose ||
      !formData.agreed
    ) {
      return;
    }

    addItem({
      id: Date.now(),
      name: formData.name,
      quantity: formData.quantity,
      purpose: formData.purpose,
    });

    setFormData({
      name: "",
      quantity: "",
      purpose: "",
      agreed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item to the Inventory</h2>

      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <textarea
        name="purpose"
        placeholder="Purpose"
        value={formData.purpose}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="agreed"
          checked={formData.agreed}
          onChange={handleChange}
        />
        Agree to Terms
      </label>

      <br />
      <br />

      <button type="submit">Add</button>
    </form>
  );
}

export default SpacecraftForm;