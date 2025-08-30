import facebook from '../assets/facebook-mono.png'
import instagram from '../assets/instagram.png'
import X from '../assets/x.png'
import logo from '../assets/Sumin-t.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    
    const SocialMedia = ({name, src}) => (
        <div className='flex gap-1 cursor-pointer'>
            <span className='text-[12px] font-[500] hover:font-bold'>{name}</span>
            <img src={src} alt="" className='size-4'/>
        </div>
    )

    return(
        <footer className="w-full pb-10 bg-[#F2F2F2]">
            <div className='flex justify-between items-center lg:px-50 md:px-22 sm:px-12 py-10 px-4'>
                <div>
                    <h1 className='sm:text-2xl text-md font-bold mb-2'>Ready to work on a project</h1>
                    <p className='sm:text-sm text-[10px]'>Book your event with just one call on <span className='text-blue-500 underline cursor-pointer'>+977 9841234567</span> </p>
                </div>
                <div>
                    <button className='bg-white border sm:text-lg text-sm whitespace-nowrap py-2 px-6 font-semibold hover:bg-black hover:text-white cursor-pointer transition delay-150 duration-300 ease-in-out'>Call now </button>
                </div>
            </div>

            <div 
            className="flex gap-2 p-4 justify-center items-center shadow-[0_-2px_10px_#f0f0f0,_0_2px_10px_#819A91] bg-[#E8E8E8] mb-10 ">
                <a href="https://www.facebook.com/sumin.shrestha.620514" target='_blank'><SocialMedia name='Facebook' src={facebook}/></a>
                <span className='font-bold'>•</span>
                <a href="" target='_blank'><SocialMedia name='Instagram' src={instagram}/></a> 
                <span className='font-bold'>•</span>
                <a href="" target='_blank'><SocialMedia name='Twitter' src={X}/></a>
            </div>

            <div className='flex p-4'>
                <div className='lg:flex justify-center items-center w-[50%] hidden'>
                    <img src={logo} alt="logo" className='h-26' />
                    <div>
                        <h1 className='text-2xl font-semibold mb-2 '>Sumin Shrestha</h1>
                        <p className='text-sm leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tempora incidunt atque quidem? Ab, ipsa cum! Facilis debitis sint consequuntur, nemo, deserunt qui quos obcaecati dignissimos, quo corporis possimus dolorum.</p>
                    </div>
                </div>
                <div className='w-[50%] flex gap-20 lg:ml-30 sm:ml-20 ml-8 '>
                    <div className='hidden md:block'>
                        <h1 className='text-2xl font-semibold mb-4 whitespace-nowrap'>Quick links</h1>
                        <ul className='list-disc ml-6 leading-6 text-sm *:hover:font-bold '>
                            <NavLink to = "/people">
                            <li>People</li>
                            </NavLink>
                            <NavLink to = "places">
                            <li>Places</li>
                            </NavLink>
                            <NavLink to = "things">
                            <li>Things</li>
                            </NavLink>
                            <NavLink to = "clients">
                            <li>Clients</li>
                            </NavLink>
                            <NavLink to = "connect">
                            <li>Connect</li>
                            </NavLink>
                            <NavLink to = "about">
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