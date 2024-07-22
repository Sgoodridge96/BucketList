import React, {useState} from 'react'
import { BucketListForm } from './BucketListForm'
import {v4 as uuidv4} from 'uuid';
import { BucketList } from './BucketList';

export const BucketListWrapper = () => {
  const [bktList, setBktList] = useState([])

  const addToList = listItem => {
    setBktList([...bktList, {id: uuidv4(), task: listItem,
    completed: false, isEditing: false}])
  }
  
  return (
    console.log(bktList),
    <div className='BucketListWrapper'>
      <BucketListForm addToList={addToList} />
      <BucketList bktList={bktList}/>
    </div>
  )
}
