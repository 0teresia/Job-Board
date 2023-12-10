import React from 'react'
import JobLocation from './JobLocation'

const LeftSideBar = ({handleChange,handelClick }) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filter</h3>
        <JobLocation handleChange={handleChange}/>
    </div>
  )
}

export default LeftSideBar