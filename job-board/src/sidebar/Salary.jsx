import React from 'react'
import Btn from './Btn'
import Input from '../Components/Input'
const Salary = ({handleChange,handelClick }) => {
  return (
    <div>
        <h3 className='text-lg font-bold mb-2'>Salary</h3>
        <div className='mb-3'>
            <Btn onClickHandler={handelClick} value='' title='Hourly' />
            <Btn onClickHandler={handelClick} value='Monthly' title='Monthly' />
            <Btn onClickHandler={handelClick} value='Yearly' title='Yearly' />
        </div>

        <div>
            <label className='leftsidebar-label-container'>
                <input type='radio' name='test' id='test' value='' onChange={handleChange}/>
                <span className='tickmark'></span>All
            </label>
            <Input handleChange={handleChange} value={20} title='<20000k' name='test2'/>
            <Input handleChange={handleChange} value={40} title='<40000k' name='test2'/>
            <Input handleChange={handleChange} value={70} title='<70000k' name='test2'/>
            <Input handleChange={handleChange} value={100} title='<100000k' name='test2'/>
        </div>
    </div>
  )
}

export default Salary