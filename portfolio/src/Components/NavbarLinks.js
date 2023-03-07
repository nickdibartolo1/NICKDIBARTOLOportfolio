import React from 'react';
import { links } from '../assets/constants';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ handleClick }) => {
    return (
        <div className=''>
            {links.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    className="text-white mr-7 float-right uppercase hover:text-[#7f90a0]"
                    onClick={() => handleClick && handleClick()}
                >
                    {item.name}
                </NavLink>
            ))}

        </div>
    )
}

export default NavLinks