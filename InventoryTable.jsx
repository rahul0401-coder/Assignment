import React from "react";

function InventoryTable({ items, editItem, deleteItem }) {
  const handleEdit = (item) => {
    const newName = prompt("Edit item name:", item.name);
    const newQuantity = parseInt(prompt("Edit quantity:", item.quantity), 10);
    if (newName && newQuantity) {
      editItem({ ...item, name: newName, quantity: newQuantity });
    }
  };

  return (
    <table border="1" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            style={{
              backgroundColor: item.quantity < 10 ? "lightcoral" : "white",
            }}
          >
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;