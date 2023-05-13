import React from 'react';
import { links } from '../assets/constants';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ handleClick }) => {
    return (
        <div>
            {links.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    className="text-white mr-7 float-right text-lg hover:text-[#87aaca]"
                    onClick={() => handleClick && handleClick()}
                >
                    {item.name}
                </NavLink>
            ))}

        </div>
    )
}

export default NavLinks