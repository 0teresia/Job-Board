import React from 'react'
import {Link} from 'react-router-dom';
import {FiMapPin } from "react-icons/fi";
import { FaEuroSign } from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";

const Card = ({ data }) => {
    const {
      _id,
      companyName,
      jobTitle,
      salaryType,
      employmentType,
      companyLogo,
      maxPrice,
      experienceLevel,
      description,
      minPrice,
      postingDate,
      jobLocation,
    } = data;

  return (
   <section className='card'>
    <Link to={'/'} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt='' style={{ width: '100px', height: '100px' }} />
        <div>
            <h4 className='text-primary mb-2'>{companyName}</h4>
            <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
            <div className='text-primary/80 text-base flex flex-wrap gap-3 mb-2'>
                <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                <span className='flex items-center gap-2'><GiClockwork />{employmentType}</span>
                <span className='flex items-center gap-2'><FaEuroSign/>{minPrice}-{ maxPrice}k</span>
                <span className='flex items-center gap-2'><CiCalendarDate/>{postingDate}</span>
            </div>

            <p className='text-base text-primary/70'>{description}</p>
        </div>
    </Link>
   </section>
        
  )
}

export default Card