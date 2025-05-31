import { useState } from "react";

const useLocalStorage = () => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const addItem = (item) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      const jsonItems = JSON.stringify(updatedItems);
      localStorage.setItem("items", jsonItems);
      return updatedItems;
    });
  };

  const removeItem = (item) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((i) => i !== item);
      const jsonItems = JSON.stringify(updatedItems);
      localStorage.setItem("items", jsonItems);
      return updatedItems;
    });
  };
  const clearItems = () => {
    setItems([]);
    localStorage.removeItem("items");
  };
  return {
    items,
    addItem,
    removeItem,
    clearItems,
  };
};

export default useLocalStorage;
