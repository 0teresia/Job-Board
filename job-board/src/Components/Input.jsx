import React from 'react'

const Input = ({handleChange, value, title, name}) => {
    return (
        <label className='leftsidebar-label-container'>
        <input type='radio' name={name} value={value} onChange={handleChange}/>
        <span className='tickmark'></span>{title}
        </label>
    )
}

export default Input