import facebook from '../assets/facebook-mono.png'
import instagram from '../assets/instagram.png'
import X from '../assets/x.png'
import logo from '../assets/Sumin-Shrestha-t-logo.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    
    const SocialMedia = ({name, src}) => (
        <div className='flex gap-1 cursor-pointer group'>
            <span className='text-[12px] font-[500] group-hover:font-bold'>{name}</span>
            <img src={src} alt="" className='size-4 group-hover:scale-110 transition'/>
        </div>
    )

    return(
        <footer className="w-full bg-[#F2F2F2]">
            <div className='flex justify-between items-center lg:px-50 md:px-22 sm:px-12 py-8 px-4'>
                <div>
                    <h1 className='sm:text-2xl text-xl text-md font-bold mb-2'>Ready to work on a project</h1>
                    <p className='sm:text-xs text-[10px] text-gray-500'>Book your event with just one call </p>
                </div>
                <button className="group border flex justify-center items-center gap-1 w-[140px] p-2 whitespace-nowrap hover:bg-[#212121] cursor-pointer transition duration-300 ease-in-out">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="md:size-5 size-4 fill-current text-black group-hover:text-white"
                    >
                    <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-black text-sm md:text-[16px] group-hover:text-white">Call now</span>
                </button>
            </div>

            <div 
            className="flex gap-2 p-4 justify-center items-center shadow-2xl/20 bg-[#E8E8E8] mb-4 ">
                <a href="https://www.facebook.com/sumin.shrestha.620514" target='_blank'>
                <SocialMedia name='Facebook' src={facebook}/>
                </a>
                <span className='font-bold'>•</span>
                <a href="" target='_blank'>
                    <SocialMedia name='Instagram' src={instagram}/>
                </a> 
                <span className='font-bold'>•</span>
                <a href="" target='_blank'>
                    <SocialMedia name='Twitter' src={X}/>
                </a>
            </div>

            <div className='flex p-4 mb-2'>
                <div className='lg:flex justify-center items-center w-[50%] hidden'>
                    <img src={logo} alt="logo" className='h-26' />
                    <div>
                        <h1 className='text-2xl font-semibold mb-2 '>Sumin Shrestha</h1>
                        <p className='text-xs text-gray-500 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tempora incidunt atque quidem? Ab, ipsa cum! Facilis debitis sint consequuntur, nemo, deserunt qui quos obcaecati dignissimos, quo corporis possimus dolorum.</p>
                    </div>
                </div>
                <div className='w-[50%] flex gap-20 lg:ml-30 sm:ml-20 ml-8 '>
                    <div className='hidden md:block'>
                        <h1 className='text-2xl font-semibold mb-4 whitespace-nowrap'>Quick links</h1>
                        <ul className='list-disc ml-6 leading-6 text-sm *:hover:font-bold '>
                            <NavLink to = "/">
                            <li>Home</li>
                            </NavLink>
                            <a href="#overview">
                            <li>Overview</li>
                            </a>
                            <NavLink to = "/portfolio">
                            <li>Portfolio</li>
                            </NavLink>
                            <NavLink to = "/clients">
                            <li>Clients</li>
                            </NavLink>
                            <NavLink to = "/connect">
                            <li>Connect</li>
                            </NavLink>
                            <NavLink to = "/about">
                            <li>About</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold mb-4'>Contact</h1>
                        <p className='text-sm mb-2'><strong>Phone :</strong>   9812345678</p>
                        <p className='text-sm whitespace-nowrap'><strong>Email :</strong>   suminshrestha777@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}