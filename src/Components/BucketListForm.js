import React from 'react'

export const BucketListForm = () => {
  return (
  
    <form className='BucketListForm'>
      <input type="text" className='bucket-list-input' 
      placeholder='Enter something on your bucket list'/>
      <button type='submit' className='bucket-list-btn'>
      </button>
    </form>
  
  )
}
