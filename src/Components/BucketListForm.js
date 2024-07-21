import React, {useState} from 'react'

export const BucketListForm = ({addToList}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addToList(value)
    // console.log(value)

  }

  return (

    <form className='BucketListForm' onSubmit={handleSubmit}>
      <input type="text" className='bucket-list-input' 
      placeholder='Enter' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='bucket-list-btn'>Add Item
      </button>
    </form>
  
  )
}
