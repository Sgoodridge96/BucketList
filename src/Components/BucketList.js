import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const BucketList = ({ addItem }) => {
  return (
    <div className="BucketList">
      {/* */}
      <p>{addItem.addItem}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className="icon" />
        <FontAwesomeIcon icon={faTrashArrowUp} className="icon" />
      </div>
    </div>
  );
};
