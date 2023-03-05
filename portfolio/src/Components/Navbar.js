import React from 'react';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {

  const [smScreenMenuOpen, setSmScreenMenuOpen] = useState(true);
  console.log(smScreenMenuOpen)
  console.log(setSmScreenMenuOpen)

  return (
    <>
      <div className='md:flex hidden flex-col w-full py-8 px-4 bg-[#0e0725]'>
        <NavbarLinks />
      </div>

      <div className=''>
        {smScreenMenuOpen ?
          (<RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setSmScreenMenuOpen(false)} />)
          :
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setSmScreenMenuOpen(true)} />}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${smScreenMenuOpen ? 'left-0' : '-left-full'}`}>
        <NavbarLinks handleClick={() => setSmScreenMenuOpen(false)} />
      </div>
    </>
  )
}

export default Navbar