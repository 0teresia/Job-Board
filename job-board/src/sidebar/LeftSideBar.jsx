import React from 'react'
import JobLocation from './JobLocation'
import Salary from './Salary'
import DatePosted from './DatePosted'
import Experience from './Experience'
import TypeOfEmployment from './TypeOfEmployment'

const LeftSideBar = ({handleChange,handelClick }) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filter</h3>
        <JobLocation handleChange={handleChange}/>
        <Salary handleChange={handleChange} handelClick={handelClick}/>
        <DatePosted handleChange={handleChange} handelClick={handelClick}/>
        <Experience handleChange={handleChange} handelClick={handelClick}/>
        <TypeOfEmployment handleChange={handleChange} handelClick={handelClick}/>
    </div>
  )
}

export default LeftSideBar