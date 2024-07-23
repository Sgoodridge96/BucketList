import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faSquareCheck,
  faTrashArrowUp,
} from "@fortawesome/free-solid-svg-icons";

export const BucketList = ({ addItem, toggleComplete }) => {
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
        <FontAwesomeIcon icon={faSquareCheck} className="icon" />
        <FontAwesomeIcon icon={faPenToSquare} className="icon" />
        <FontAwesomeIcon icon={faTrashArrowUp} className="icon" />
      </div>
    </div>
  );
};
