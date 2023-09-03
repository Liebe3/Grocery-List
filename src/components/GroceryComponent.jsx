import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import GroceryItemComponent from "./GroceryItemComponent";

const GroceryComponent = () => {
  const [item, setItem] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);

  const handleAddItem = (e) => {
    setGroceryItems([...groceryItems, { id: uuid(), name: item }]);
    setItem("");
    e.preventDefault();
  };

  const handleEdititem = (id, newItem) => {
    const updateGroceryItems = groceryItems.map((item) => {
      if (item.id === id) {
        return { ...item, name: newItem };
      }
      return item;
    });
    setGroceryItems(updateGroceryItems);
  };

  const handleDeleteItems = (removeId) => {
    const filteredItem = groceryItems.filter((item) => removeId !== item.id);
    setGroceryItems(filteredItem);
  };

  const hadleClearItems = () =>{
    setGroceryItems([])
  }
  return (
    <div className="grocery-buddy">
      <h1>Leih Leih Grocery List</h1>
      <div className="input-section">
        <form className="input-container" onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Add Item"
            value={item}
            required
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="btn-add">
            Add List
          </button>
        </form>
      </div>
      <ul className="grocery-list">
        {groceryItems.map((item) => (
          <GroceryItemComponent
            key={item.id}
            item={item}
            handleEdititem={handleEdititem}
            handleDeleteItems={handleDeleteItems}
          />
        ))}
      </ul>
      {groceryItems.length > 0 ? (
        <button onClick={hadleClearItems} className="btn-clear">Clear Grocery List</button>
      ) : null}
    </div>
  );
};

export default GroceryComponent;
