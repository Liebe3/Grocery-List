import React, { useState } from "react";
import { AiFillEdit, AiFillDelete, AiFillSave } from "react-icons/ai";

const GroceryItemComponent = ({ item, handleEdititem, handleDeleteItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item.name);
  const [error, setError] = useState("");

  const onEdit = (e) => {
    e.preventDefault()
    if (newItem) {
      handleEdititem(item.id, newItem);
      setIsEditing(false);
      setError("")
    }
    else{
      setError("Please Fill out this field.")
    }
  };
  return (
    <>
      <li>
        {isEditing ? (
          <input className="input"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}
        <div className="btn" >
          <button
            className="btn-edit"
            onClick={isEditing ? onEdit : () => setIsEditing(true)}
          >
            {isEditing ? <AiFillSave></AiFillSave> : <AiFillEdit></AiFillEdit>}
          </button>
          <button onClick={() => handleDeleteItems(item.id)}>
            <AiFillDelete className="btn-delete"></AiFillDelete>
          </button>
        </div>
        {error ? <p className="errors">{error}</p> : null}
      </li>
    </>
  );
};

export default GroceryItemComponent;
