import React, { useState } from "react";
import { BucketListForm } from "./BucketListForm";
import { v4 as uuidv4 } from "uuid";
import { BucketList } from "./BucketList";
import { EditListForm } from "./EditItem";

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

  const editItem = (id) => {
    setBktList(
      bktList.map((listItem) =>
        listItem.id === id
          ? { ...listItem, isEditing: !listItem.isEditing }
          : listItem
      )
    );
  };

  const editBktList = (addItem, id) => {
    setBktList(
      bktList.map((listItem) =>
        listItem.id === id
          ? { ...listItem, addItem, isEditing: !listItem.isEditing }
          : listItem
      )
    );
  };

  return (
    <div className="BucketListWrapper">
      <p className="title">Bucket List App</p>
      <BucketListForm addToList={addToList} />
      <p className="current-list">Current Bucket List</p>
      <div className="bucket-list">
        {bktList.map((listItem, index) =>
          listItem.isEditing ? (
            <EditListForm
              key={index}
              editItem={editBktList}
              addItem={listItem}
            />
          ) : (
            <BucketList
              addItem={listItem}
              key={index}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          )
        )}
      </div>
    </div>
  );
};
