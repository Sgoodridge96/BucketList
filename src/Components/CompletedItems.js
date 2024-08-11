import React from "react";

export const CompletedItems = ({ completedItems }) => {
  return (
    <div className="completed-items-container">
      <p className="completed-items-title">Completed List</p>
      <ul>
        {completedItems.map((item) => (
          <li key={item.id}>{item.addItem}</li>
        ))}
      </ul>
    </div>
  );
};
