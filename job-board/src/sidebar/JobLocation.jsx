import React from 'react'

const JobLocation = ({handleChange}) => {
  return (
    <div>
        <h3 className='font-medium mb-2 text-lg'>Location</h3>

        <div>
            <label className='leftsidebar-label-container'>
                <input type='radio' name='test' id='test' value='' onChange={handleChange}/>
           <span className='tickmark'></span>
            </label>
        </div>
    </div>
  )
}

export default JobLocation;