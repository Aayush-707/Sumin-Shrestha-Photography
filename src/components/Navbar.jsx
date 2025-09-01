import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Sumin-t.png'
import facebook from '../assets/facebook-mono.png'
import instagram from '../assets/instagram.png'
import X from '../assets/x.png'

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const SocialMediaIcons = ({ className }) => (
        <div className={className}>
            <a href="https://www.facebook.com/sumin.shrestha.620514" target="_blank" rel="noopener noreferrer">
                <img 
                    src={facebook} 
                    alt="Facebook" 
                    className='sm:w-6 sm:h-6 w-4 h-4 cursor-pointer hover:scale-110 transition' 
                />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <img 
                    src={instagram} 
                    alt="Instagram" 
                    className='sm:w-6 sm:h-6 w-4 h-4 cursor-pointer hover:scale-110 transition' 
                />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <img 
                    src={X} 
                    alt="X" 
                    className='sm:w-6 sm:h-6 w-4 h-4 cursor-pointer hover:scale-110 transition' 
                />
            </a>
        </div>
    )

    return (
        <header className='flex flex-col justify-center items-center bg-white/5 backdrop-blur-md absolute top-0 left-0 right-0 z-20 pb-4'>
            <nav className='flex items-center w-full max-w-7xl'>
                
                <ul className='hidden lg:flex gap-8 text-lg italic pl-20 xl:pl-30 *:hover:font-bold'>
                    <NavLink to = '/people'>
                        <li>People</li>
                    </NavLink>
                    <NavLink to = '/places'>  
                        <li>Places</li>
                    </NavLink>
                    <NavLink to = '/portfolio'>  
                        <li>Portfolio</li>
                    </NavLink> 
                </ul>

                <div className='flex-1 flex justify-center lg:justify-center ml-12 lg:ml-0' >
                    <NavLink to = '/'>
                        <img 
                            src={logo} 
                            alt="Logo"
                            className='h-14 sm:h-18 md:h-20 lg:h-22 xl:28 w-auto object-contain'
                        />
                    </NavLink>
                    
                </div>

                <ul className='hidden lg:flex gap-8 text-lg italic pr-20 xl:pr-30 *:hover:font-bold'>
                    <NavLink to = '/clients'>
                        <li>Clients</li>
                    </NavLink>
                    <NavLink to = '/connect'>
                        <li>Connect</li>
                    </NavLink>
                    <NavLink to = '/about'>
                        <li>About</li>
                    </NavLink>
                </ul>

                <button
                    className='lg:hidden flex items-center justify-center w-8 h-8 mr-2 cursor-pointer'
                    onClick={toggleDropdown}
                    aria-label={isDropdownOpen ? 'Close menu' : 'Open menu'}
                >
                    <svg className='w-6 h-6 mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isDropdownOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>

            </nav>

            <div
                className={`lg:hidden absolute right-2 top-12 w-48 z-50 transition-all duration-300 ease-in-out ${
                    isDropdownOpen ? 'max-h-64 opacity-100 translate-x-0' : 'max-h-0 opacity-0 translate-x-full overflow-hidden'
                }`}
            >
                <ul className='flex flex-col gap-4 text-lg font-semibold md:font-medium italic rounded shadow-2xl bg-white/80 backdrop-blur-md p-4 mr-2 *:hover:font-bold text-end'>
                    <NavLink to = '/people'>
                    <li onClick={() => setIsDropdownOpen(false)}>People</li>
                    </NavLink>
                    <NavLink to = '/places'>
                    <li onClick={() => setIsDropdownOpen(false)}>Places</li>
                    </NavLink>
                    <NavLink to = '/portfolio'>
                    <li onClick={() => setIsDropdownOpen(false)}>Things</li>
                    </NavLink>
                    <NavLink to = '/clients'>
                    <li onClick={() => setIsDropdownOpen(false)}>Clients</li>
                    </NavLink>
                    <NavLink to = '/connect'>
                    <li onClick={() => setIsDropdownOpen(false)}>Connect</li>
                    </NavLink>
                    <NavLink to = '/about'>
                    <li onClick={() => setIsDropdownOpen(false)}>About</li>
                    </NavLink>
                </ul>
            </div>

            <SocialMediaIcons className='hidden sm:flex lg:flex gap-1 items-center lg:mr-2' />

            <SocialMediaIcons className='flex sm:hidden gap-2' />
        </header>
    )
}