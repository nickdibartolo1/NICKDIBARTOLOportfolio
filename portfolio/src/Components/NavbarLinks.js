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
                    className="text-blue-500 mr-5 float-right"
                    onClick={() => handleClick && handleClick()}
                >
                    {item.name}
                </NavLink>
            ))}

        </div>
    )
}

export default NavLinks