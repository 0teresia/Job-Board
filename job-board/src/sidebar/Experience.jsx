import React from 'react'
import Input from '../Components/Input'

const Experience = ({handleChange}) => {
  return (
    <div>
        <h3 className='font-bold mb-2 text-lg'>Experience level</h3>

        <div>
            <label className='leftsidebar-label-container'>
                <input type='radio' name='test' id='test' value='' onChange={handleChange}/>
                <span className='tickmark'></span>Any experience
            </label>
            <Input handleChange={handleChange} value='Mid-level' title='Mid-level' name='test'/>
            <Input handleChange={handleChange} value='Entry level' title='Entry level' name='test'/>
            <Input handleChange={handleChange} value='2years experience' title='2years experience' name='test'/>
            <Input handleChange={handleChange} value='Senior Fronted developer' title='Senior Fronted developer' name='test'/>
            <Input handleChange={handleChange} value='Junior Fronted developer' title='Junior Fronted developer' name='test'/>

        </div>
      </div>  
  )
}

export default Experience