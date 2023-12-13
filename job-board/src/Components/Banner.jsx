import React, { useState } from 'react'
import { FiSearch, FiMapPin } from "react-icons/fi";

const Banner = ({query, handleInput }) => {
   
    return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-10 md:py-2 py-14'>
        <h1 className='text-4xl font-bold text-primary mb-3'>Apply now and <span className='text-blue'> take a step towards </span>  your future career</h1>
    <p className='text-lg mb-8' >
        our platform connects talented individuals with their dream jobs. Start exploring our listings, tailor your applications, and get ready to pave the way for a fulfilling career ahead. Apply now and set yourself on the path to success.
    </p>
    <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
        <div className="flex md:rounded-s-none rounded-none shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:indigo-600 md:w-1/2 w-full">
                <input type="text" name="title" id="title" placeholder="Enter a job title, keywords, or company name"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-500 focus:right-0 sm:text-sm sm:leading-6" 
                onChange={handleInput}
                value={query}
                
                />
                <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
            </div>
            <div className="flex md:rounded-s-none rounded-none shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:indigo-600 md:w-30% w-30%">
                <input type="text" name="title" id="title" placeholder="Location"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-500 focus:right-0 sm:text-sm sm:leading-6" 
                />
                <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
            </div>
            <button type='submit' className='bg-blue py-2 px-8 text-white md:rounded-s-none rounded'>search</button>
        </div>
    </form>
    </div>
  )
}

export default Banner