import { React, useState, useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import SideNavLinks from './SideNavLinks';
import { useNavigate } from 'react-router-dom';

const SideNavBar = () => {

    const [smScreenMenuOpen, setSmScreenMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleNavigation = (e) => {
            if (e.persisted) {
                setSmScreenMenuOpen(false);
            }
        };
        window.addEventListener('pageshow', handleNavigation);

        return () => {
            window.removeEventListener('pageshow', handleNavigation);
        }
    }, [])

    return (
        <div>
            <div className='absolute md:hidden block top-6 right-3 cursor-pointer z-10'>
                {smScreenMenuOpen ?
                    (<RiCloseLine className="w-6 h-6 text-black mr-2" onClick={() => setSmScreenMenuOpen(false)} />)
                    :
                    <HiOutlineMenu className="w-6 h-6 text-black mr-2" onClick={() => setSmScreenMenuOpen(true)} />}
            </div>

            <div className={`bg-blue-500 h-5/6 absolute w-2/3 z-10 rounded-md md:hidden transition-all ease-in-out duration-200 ${smScreenMenuOpen ? 'left-0' : '-left-full'}`}>
                <SideNavLinks handleClick={() => setSmScreenMenuOpen(false)} />
            </div>
        </div>
    )
}

export default SideNavBar