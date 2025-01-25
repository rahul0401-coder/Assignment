import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddItemForm from "./components/AddItemForm";
import FilterAndSort from "./components/FilterAndSort";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", category: "Fruits", quantity: 15 },
    { id: 2, name: "Bread", category: "Bakery", quantity: 8 },
    { id: 3, name: "Milk", category: "Dairy", quantity: 20 },
  ]);

  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  const editItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = items
    .filter((item) =>
      filterCategory ? item.category === filterCategory : true
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
    );

  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <FilterAndSort
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <AddItemForm addItem={addItem} />
      <InventoryTable
        items={filteredItems}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}
export default App;