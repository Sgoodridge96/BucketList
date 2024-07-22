import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


export const BucketList = () => {
  return (
    <div className='BucketList'>
      {/* <p> element is to test icons when added to the list */}
      <p>Edit this </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrashArrowUp} />
      </div>
    </div>
  )
}
