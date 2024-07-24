import React, { useState } from "react";
import { BucketListForm } from "./BucketListForm";
import { v4 as uuidv4 } from "uuid";
import { BucketList } from "./BucketList";

export const BucketListWrapper = () => {
  const [bktList, setBktList] = useState([]);

  const addToList = (listItem) => {
    setBktList([
      ...bktList,
      { id: uuidv4(), addItem: listItem, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setBktList(
      bktList.map((listItem) =>
        listItem.id === id
          ? { ...listItem, completed: !listItem.completed }
          : listItem
      )
    );
  };

  const deleteItem = (id) => {
    setBktList(bktList.filter((listItem) => listItem.id !== id));
  };

  return (
    console.log(bktList),
    (
      <div className="BucketListWrapper">
        <p className="title">Test Bucket List App</p>
        <BucketListForm addToList={addToList} />
        <p className="current-list">Current Bucket List</p>
        {/* add an item to the list */}
        {bktList.map((listItem) => (
          <BucketList
            addItem={listItem}
            key={listItem.id}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    )
  );
};
