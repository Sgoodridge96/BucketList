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

  return (
    console.log(bktList),
    (
      <div className="BucketListWrapper">
        {" "}
        My Bucket List
        <BucketListForm addToList={addToList} />
        {/* add an item to the list */}
        {bktList.map((listItem, index) => (
          <BucketList addItem={listItem} key={index} />
        ))}
      </div>
    )
  );
};
