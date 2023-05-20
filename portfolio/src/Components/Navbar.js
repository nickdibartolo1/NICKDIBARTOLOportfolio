import React from 'react';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {

  return (
    <>
      <div className='md:flex hidden flex-col w-full py-12 px-4 bg-gradient-to-r from-[#505a66] to-[#171b20]'>
        <NavbarLinks />
      </div>
    </>
  )
}

export default Navbar