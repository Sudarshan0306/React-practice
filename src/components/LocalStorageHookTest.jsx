import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const LocalStorageHookTest = () => {
  const { items, addItem, removeItem, clearItems } = useLocalStorage();
  const handleAddItem = () => {
    const newItem = prompt("Enter a new item:");
    if (newItem) {
      addItem(newItem);
    }
    console.log(newItem);
  };
  const handleRemoveItem = (item) => {
    removeItem(item);
  };
  const handleClearItems = () => {
    if (window.confirm("Are you sure you want to clear all items?")) {
      clearItems();
    }
  };

  return (
    <div className="">
      <h1>Local Storage Hook Test</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleClearItems}>Clear All Items</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageHookTest;
