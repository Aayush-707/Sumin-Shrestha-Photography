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
        <footer className="w-full pb-10 bg-[#FAF8F1]">
            <div className="flex gap-2 p-4 justify-center items-center shadow-sm/20 bg-white mb-10 ">
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