import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import jobIcon from '../assets/images/jobIcon.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', title: 'Find jobs' },
    { path: '/my-jobs', title: 'My Jobs' },
    { path: 'salary', title: 'Estimate salary' },
    { path: '/post-job', title: 'Post A Job' },
  ];

  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-10'>
      <nav className='flex justify-between items-center py-6'>
        <a href='#'>
          <img src={jobIcon} alt='Job Board' style={{ width: '130px', height: '130px' }} />
        </a>
        {/* nav items for large devices */}
        <ul className={`hidden md:flex gap-12 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {navItems.map(({ path, title }) => (
            <li key={path} className='text-base text-primary'>
              <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
          {/*signup and login button */}
          <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <NavLink to='/login' className='link text-blue py-2 px-5 border rounded'>Log In</NavLink>
          <NavLink to='/sign-up' className='link text-white py-2 px-5 border rounded bg-blue'>SignUp</NavLink>
        </div>
        {/* mobile view */}
        <div className='md:hidden block'>
          <button onClick={handleToggle}>
            {isMenuOpen ? <FaTimes className='w-5 h-5 text-primary' /> : <FaBars className='w-5 h-5 text-primary' />}
          </button>
        </div>
      </nav>
      {/*nav item for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? '' : 'hidden'}`}>
        <ul>
        {navItems.map(({ path, title }) => (
            <li key={path} className='text-base text-white first:text-white py-1'>
              <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                {title}
              </NavLink>
            </li>
          ))}
            <NavLink to='/login' className='link text-white py-1'>Log In</NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

      
       