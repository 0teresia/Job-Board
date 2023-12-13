import React from 'react';
import Input from '../Components/Input';

const DatePosted = ({ handleChange }) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const threeDaysAgo = new Date(now - 3 * 24 * 60 * 60 * 1000);
    const fourteenDaysAgo = new Date(now - 14 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const threeDaysAgoDate = threeDaysAgo.toISOString().slice(0, 10);
    const fourteenDaysAgoDate = fourteenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

    return (
        <div>
            <h3 className='font-bold mb-2 text-lg'>Date Posted</h3>
            <div>
                <label className='leftsidebar-label-container'>
                    <input type='radio' name='test' id='test' value='' onChange={handleChange}/>
                    <span className='tickmark'></span>All time
                </label>
                <Input handleChange={handleChange} value={twentyFourHoursAgoDate} title='Last 24 hours' name='test'/>
                <Input handleChange={handleChange} value={threeDaysAgoDate} title='Last 3 days' name='test'/>
                <Input handleChange={handleChange} value={fourteenDaysAgoDate} title='Last 14 days' name='test'/>
                <Input handleChange={handleChange} value={thirtyDaysAgoDate} title='Last 30 days' name='test'/>
            </div>
        </div>
    );
};

export default DatePosted;

