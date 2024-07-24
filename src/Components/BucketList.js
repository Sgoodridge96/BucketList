import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faSquareCheck,
  faTrashArrowUp,
} from "@fortawesome/free-solid-svg-icons";

export const BucketList = ({
  addItem,
  toggleComplete,
  deleteItem,
  editItem,
}) => {
  return (
    <div className="BucketList">
      {/*When add item button is hit, add the item to the bucket list */}
      <p
        onClick={() => toggleComplete(addItem.id)}
        className={`${addItem.completed ? "completed" : ""}`}
      >
        {addItem.addItem}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faSquareCheck}
          className="icon"
          onClick={() => toggleComplete(addItem.id)}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="icon"
          onClick={() => editItem(addItem.id)}
        />
        <FontAwesomeIcon
          icon={faTrashArrowUp}
          className="icon"
          onClick={() => deleteItem(addItem.id)}
        />
      </div>
    </div>
  );
};
