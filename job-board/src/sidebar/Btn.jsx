import React from 'react'

const Btn = ({onClickHandler, value, title}) => {
  return (
    <button onClick={onClickHandler} value={value} className='text-base border py-1 px-4 hover:bg-blue hover:text-white'>
        {title}
    </button>
  )
}

export default Btn;