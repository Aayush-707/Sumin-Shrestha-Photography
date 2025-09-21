import PersonalProjects from '../components/PersonalProjects'
import Weddings from '../components/Weddings'
import Travel from '../components/Travel'
import SocialEvents from '../components/SocialEvents'
import CulturalEvents from '../components/CulturalEvents'
import { Route, Routes, NavLink, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PageLoader from '../components/PageLoader'

export default function Portfolio() {
    const location = useLocation()

    const sectionContent = {
        '/portfolio/personalprojects': {
            title: 'Personal Projects',
            description: 'Capturing intimate moments and personal stories through my lens. Each portrait tells a unique story of individuality, emotion, and authentic human connection.',
            component: <PersonalProjects />
        },
        '/portfolio/weddings': {
            title: 'Wedding Photography',
            description: 'Documenting your special day with elegance and grace. From intimate ceremonies to grand celebrations, I capture every precious moment of your love story.',
            component: <Weddings />
        },
        '/portfolio/travel': {
            title: 'Travel Photography',
            description: 'Exploring the world through photography, capturing breathtaking landscapes, vibrant cultures, and unforgettable adventures from around the globe.',
            component: <Travel />
        },
        '/portfolio/socialevents': {
            title: 'Social Events',
            description: 'Bringing corporate events, parties, and social gatherings to life through dynamic photography that captures the energy and excitement of every occasion.',
            component: <SocialEvents />
        },
        '/portfolio/culturalevents': {
            title: 'Cultural Events',
            description: 'Celebrating the richness and diversity of cultural events through vibrant photography that captures the essence, traditions, and joyful moments of every occasion with authenticity and artistry.',
            component: <CulturalEvents />
        },
    }


    const currentSection = sectionContent[location.pathname] || sectionContent['/portfolio/personalprojects']

    return (
        <section className="lg:pt-44 sm:pt-24 pt-16 md:px-10 px-4 mb-8 flex lg:flex-row flex-col gap-4">
            <div className="lg:w-[20%] w-full flex-col lg:sticky lg:top-28 self-start p-4 space-y-10 mt-10 lg:h-[80vh]">
                <ul className="flex lg:flex-col flex-row sm:justify-center overflow-x-auto lg:overflow-visible whitespace-nowrap gap-4 text-sm lg:text-[16px] px-2 scrollbar-none">
                    <NavLink 
                        to='/portfolio/personalprojects'
                        className={({ isActive }) =>
                            isActive 
                                ? "text-[#C48F56] font-semibold border-b-2 lg:border-b-0 lg:border-l-3 lg:border-[#C48F56] lg:pl-3" 
                                : "text-black hover:text-[#C48F56] lg:pl-3"
                        } 
                    >
                        <li className="cursor-pointer hover:font-bold">Personal Projects</li>
                    </NavLink>
                    
                    <NavLink 
                        to='/portfolio/culturalevents'
                        className={({ isActive }) =>
                            isActive 
                                ? "text-[#C48F56] font-semibold border-b-2 lg:border-b-0 lg:border-l-3 lg:border-[#C48F56] lg:pl-3" 
                                : "text-black hover:text-[#C48F56] lg:pl-3"
                        } 
                    >
                        <li className="cursor-pointer hover:font-bold">Cultural Events</li>
                    </NavLink>

                    <NavLink 
                        to='/portfolio/socialevents'
                        className={({ isActive }) =>
                            isActive 
                                ? "text-[#C48F56] font-semibold border-b-2 lg:border-b-0 lg:border-l-3 lg:border-[#C48F56] lg:pl-3" 
                                : "text-black hover:text-[#C48F56] lg:pl-3"
                        }
                    >
                        <li className="cursor-pointer hover:font-bold">Social Events</li>
                    </NavLink>

                    <NavLink 
                        to='/portfolio/weddings'
                        className={({ isActive }) =>
                            isActive 
                                ? "text-[#C48F56] font-semibold border-b-2 lg:border-b-0 lg:border-l-3 lg:border-[#C48F56] lg:pl-3" 
                                : "text-black hover:text-[#C48F56] lg:pl-3"
                        }
                    >
                        <li className="cursor-pointer hover:font-bold">Weddings</li>
                    </NavLink>

                    <NavLink 
                        to='/portfolio/travel'
                        className={({ isActive }) =>
                            isActive 
                                ? "text-[#C48F56] font-semibold border-b-2 lg:border-b-0 lg:border-l-3 lg:border-[#C48F56] lg:pl-3" 
                                : "text-black hover:text-[#C48F56] lg:pl-3"
                        }
                    >
                        <li className="cursor-pointer hover:font-bold">Travel</li>
                    </NavLink>
                </ul>

                <div className="transition-all duration-500 ease-in-out">
                    <h3 className="text-sm font-semibold text-[#C48F56] mb-2">
                        {currentSection.title}
                    </h3>
                    <p className='text-xs text-gray-500 leading-relaxed'>
                        {currentSection.description}
                    </p>
                </div>
            </div>

            <div className="mt-4 lg:w-[80%] w-full">
                <PageLoader />
                <Routes>
                    <Route index element={<Navigate to="personalprojects" replace />} />
                    <Route path="personalprojects" element={<PersonalProjects />} />
                    <Route path="culturalevents" element={<CulturalEvents />} />
                    <Route path="weddings" element={<Weddings />} />
                    <Route path="travel" element={<Travel />} />
                    <Route path="socialevents" element={<SocialEvents />} />
                </Routes>
            </div>
        </section>
    )
  }