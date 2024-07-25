import React, { useState } from "react";

export const EditListForm = ({ editItem, addItem }) => {
  const [value, setValue] = useState(addItem.addItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    editItem(value, addItem.id);
    setValue("");
  };

  return (
    <form className="BucketListForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bucket-list-input"
        value={value}
        placeholder="Edit Item"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="bucket-list-btn">
        Edit
      </button>
    </form>
  );
};
