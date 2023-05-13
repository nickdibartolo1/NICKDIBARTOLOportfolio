import React from 'react';
import { links } from '../assets/constants';
import { NavLink } from 'react-router-dom';

const FooterNavLinks = ({ handleClick }) => {
    return (
        <div className='flex justify-center'>
            {links.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    className="text-white mr-7 float text-sm hover:text-[#87aaca]"
                    onClick={() => handleClick && handleClick()}
                >
                    {item.name}
                </NavLink>
            ))}

        </div>
    )
}

export default FooterNavLinks