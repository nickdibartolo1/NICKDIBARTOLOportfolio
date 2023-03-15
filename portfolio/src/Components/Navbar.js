import React from 'react';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {

  const [smScreenMenuOpen, setSmScreenMenuOpen] = useState(true);

  return (
    <>
      <div className='md:flex hidden flex-col w-full py-12 px-4 bg-gradient-to-r from-[#505a66] to-[#171b20]'>
        <NavbarLinks />
      </div>

      <div className='absolute md:hidden block top-6 right-3 cursor-pointer bg-black z-10'>
        {smScreenMenuOpen ?
          (<RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setSmScreenMenuOpen(false)} />)
          :
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setSmScreenMenuOpen(true)} />}
      </div>

      <div className={`bg-red-500 h-screen absolute w-2/3 z-10 p-4 md:hidden transition-all ease-in-out duration-200 ${smScreenMenuOpen ? 'left-0' : '-left-full'}`}>
        <NavbarLinks handleClick={() => setSmScreenMenuOpen(false)} />
      </div>
    </>
  )
}

export default Navbar