import React from 'react';
import FooterNavLinks from './FooterNavLinks';

const Footer = () => {
  return (
    <div className='flex flex-col w-full py-12 px-4 bg-[#414b58] z-'>
      <div className='text-sm'>
        <FooterNavLinks />

      </div>

    </div>
  )
}

export default Footer