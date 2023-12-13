import React from 'react'
import Input from '../Components/Input';

const JobLocation = ({handleChange}) => {
  return (
    <div>
        <h3 className='font-bold mb-2 text-lg'>Location</h3>

        <div>
            <label className='leftsidebar-label-container'>
                <input type='radio' name='test' id='test' value='' onChange={handleChange}/>
                <span className='tickmark'></span>All
            </label>
            <Input handleChange={handleChange} value='Norway' title='Norway' name='test'/>
            <Input handleChange={handleChange} value='Kenya' title='Kenya' name='test'/>
            <Input handleChange={handleChange} value='China' title='China' name='test'/>
            <Input handleChange={handleChange} value='Spain' title='Spain' name='test'/>
            <Input handleChange={handleChange} value='Indonesia' title='Indonesia' name='test'/>
            <Input handleChange={handleChange} value='Switzerland' title='Switzerland' name='test'/>
            
        </div>
    </div>
  )
}

export default JobLocation;