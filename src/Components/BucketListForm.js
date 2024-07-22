import React, {useState} from 'react'

export const BucketListForm = ({addToList}) => {
  const [value, setValue] = useState("")

  const handleSubmit = userInput => {
    userInput.preventDefault();
    addToList(value);
    setValue("")

  }

  return (

    <form className='BucketListForm' onSubmit={handleSubmit}>
      <input type="text" className='bucket-list-input' value={value} 
      placeholder='Enter' onChange={(userInput) => setValue(userInput.target.value)}/>
      <button type='submit' className='bucket-list-btn'>Add Item
      </button>
    </form>
  
  )
}
