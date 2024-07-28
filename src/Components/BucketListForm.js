import React, { useState } from "react";

export const BucketListForm = ({ addToList }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      addToList(value);
      setValue("");
    } else {
    }
  };

  return (
    <form className="BucketListForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bucket-list-input"
        value={value}
        placeholder="Enter"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="bucket-list-btn">
        Add
      </button>
    </form>
  );
};
