import React from 'react';
import { links } from '../assets/constants';
import { NavLink } from 'react-router-dom';

const SideNavLinks = ({ handleClick }) => {
  return (
    <div className='flex flex-col my-4 ml-2'>
            {links.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    className="text-white mt-5 text-lg hover:text-[#87aaca]"
                    onClick={() => handleClick && handleClick()}
                >
                    {item.name}
                </NavLink>
            ))}

        </div>
  )
}

export default SideNavLinks