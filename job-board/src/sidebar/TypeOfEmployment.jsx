import React from 'react'
import Input from '../Components/Input'

const TypeOfEmployment = ({handleChange}) => {
  return (
    <div>
        <h3 className='font-bold mb-2 text-lg'>Job type</h3>

        <div>
            <label className='leftsidebar-label-container'>
                <input type='radio' name='test' id='test' value='' onChange={handleChange}/>
                <span className='tickmark'></span>
            </label>
            <Input handleChange={handleChange} value='Temporary' title='Temporary' name='test'/>
            <Input handleChange={handleChange} value='part-time' title='Part-time' name='test'/>
            <Input handleChange={handleChange} value='Full-time' title='Full-time' name='test'/>
            <Input handleChange={handleChange} value='Internship' title='Internship' name='test'/>
            <Input handleChange={handleChange} value='Contract' title='Contract' name='test'/>
        </div>
      </div>  
  )
}

export default TypeOfEmployment