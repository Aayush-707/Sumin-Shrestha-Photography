import dauraThakali from '../assets/clients/dauraThakali.jpg'
import michaelGrills from '../assets/clients/Client-1.jpg'
import wedding from '../assets/services/wedding.jpg'
import socialEvent from '../assets/services/SocialEvent.jpg'
import personalEvent from '../assets/services/personalEvents.jpg'
import facebook from '../assets/socialMedia/facebook-mono.png'
import instagram from '../assets/socialMedia/instagram.png'
import { EventsElement } from '../components/AnimatedEvents'
import useScrollReveal from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

export default function Clients() {
    const [servicesHeaderRef, servicesHeaderVisible] = useScrollReveal()

    const ClientsElements = ({ src, name, description, facebookLink, instagramLink, delay = 0 }) => {
        const [clientRef, clientVisible] = useScrollReveal()
        return (
            <div
                ref={clientRef}
                className={`sm:w-md bg-[#F0F0F0] h-[500px] rounded relative transition-all duration-1000 ease-out transform will-change-opacity will-change-transform ${
                    clientVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
            >
                <img
                    src={src}
                    alt={`${name}-image`}
                    className='sm:h-[300px] w-md object-cover rounded shadow-2xl'
                />
                <div className='p-4 space-y-4'>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <p className='text-xs text-gray-500 leading-6'>{description}</p>
                    <div className='flex justify-end gap-2 absolute bottom-4 right-4'>
                        {facebookLink && (
                            <a href={facebookLink} target='_blank' rel="noreferrer">
                                <img
                                    src={facebook}
                                    alt="facebook-logo"
                                    className='sm:w-6 sm:h-6 w-5 h-5 cursor-pointer hover:scale-110 transition'
                                />
                            </a>
                        )}
                        {instagramLink && (
                            <a href={instagramLink} target='_blank' rel="noreferrer">
                                <img
                                    src={instagram}
                                    alt="instagram-logo"
                                    className='sm:w-6 sm:h-6 w-5 h-5 cursor-pointer hover:scale-110 transition'
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    const ServicesElement = ({ src, title, description, link, delay = 0 }) => {
        const [serviceRef, serviceVisible] = useScrollReveal()
        return (
            <div
                ref={serviceRef}
                className={`sm:w-sm space-y-4 flex flex-col items-center transition-all duration-1000 ease-out transform will-change-opacity will-change-transform ${
                    serviceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
            >
                <img
                    src={src}
                    alt={title}
                    className='sm:w-sm sm:h-[250px] h-[200px] w-[400px] object-cover rounded'
                />
                <div className='text-center space-y-2'>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className='text-xs text-gray-500 leading-6'>{description}</p>
                </div>
                <Link
                    to={link}
                    className='text-sm font-semibold border-2 px-4 py-2 hover:bg-[#212121] hover:text-white cursor-pointer transition duration-300 ease-in-out'
                >
                    View more
                </Link>
            </div>
        )
    }

    const StatsSection = () => {
        return (
            <div
                className="flex lg:flex-col flex-row items-center rounded md:gap-20 gap-4 bg-[#F0F0F0] lg:py-12 lg:px-8 px-5 py-6"
            >
                <EventsElement number='80' title='Personal Events' />
                <EventsElement number='56' title='Weddings Events' />
                <EventsElement number='44' title='Social Events' />
            </div>
        )
    }

    return (
        <section className='pt-30 sm:pt-48 mb-20 px-4 md:px-8 lg:px-14 xl:px-20 2xl:px-30'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                <ClientsElements
                    src={michaelGrills}
                    name='Michael grills Pepsicola'
                    description='Michael Grills offer the most authentic and juiciest sekuwa in town that is packed with Michael grills secret herbs and spices. Indulge yourself in the deliciousness of sittans and drinks.'
                    facebookLink='https://www.facebook.com/michaelgrillspepsi'
                    instagramLink='https://www.instagram.com/michael_grills_pepsicola?utm_source=ig_web_button_share_sheet&igsh=eW45cGVrYjYydHNz'
                    delay={200}
                />
                <ClientsElements
                    src={dauraThakali}
                    name='Daura Thakali Pepsicola'
                    description='Established in the vibrant cityscape of Kathmandu in 2021, Daura Thakali Authentic Nepali Cuisine & Bar embarked on a mission to bring the soulful flavors of Thakali cuisine to the heart of Nepal.'
                    facebookLink='https://www.facebook.com/BotaPepsicola'
                    instagramLink='https://www.instagram.com/daurathakali/'
                    delay={300}
                />

                <StatsSection />
            </div>

            <div className='flex flex-col items-center justify-center md:my-14 my-10'>
                <h1
                    ref={servicesHeaderRef}
                    className={`md:text-4xl text-2xl font-bold transition-all duration-1000 ease-out transform will-change-opacity will-change-transform ${
                        servicesHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: '200ms' }}
                >
                    Services
                </h1>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <ServicesElement
                    src={personalEvent}
                    title='Personal Events'
                    description='Capture the essence of your most cherished moments with our personalized event photography. From milestone celebrations to intimate gatherings, we create stunning visuals that tell your unique story. Let us preserve your memories with artistry and precision.'
                    link='/portfolio/personalprojects'
                    delay={300}
                />
                <ServicesElement
                    src={wedding}
                    title='Wedding Events'
                    description='Elevate your special day with our expert wedding photography services. We specialize in timeless portraits and candid moments, ensuring every detail of your ceremony and reception is beautifully documented. Trust us to craft your love story in pictures.'
                    link='/portfolio/weddings'
                    delay={400}
                />
                <ServicesElement
                    src={socialEvent}
                    title='Social Events'
                    description="Make your social gatherings unforgettable with our professional photography. Whether it's a corporate event, party, or community celebration, we deliver high-quality images that reflect the spirit of the occasion. Explore our portfolio to see the difference."
                    link='/portfolio/socialevents'
                    delay={500}
                />
            </div>
        </section>
    )
}
