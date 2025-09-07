import about from '../assets/about-profile.jpeg'
import lights from '../assets/studio-light.png'
import skills from '../assets/photographer.png'
import equipment from '../assets/camera.png'
import vision from '../assets/photography.png'
import passion from '../assets/photo.png'
import result from '../assets/macro.png'
import useScrollReveal from '../hooks/useScrollReveal.js'

const Cards = ({src, title, description}) => {
    const [cardRef , cardVisible] = useScrollReveal();

    return(
    <div 
    ref={cardRef}
    className={`flex flex-col justify-center items-center col-span-1 space-y-4 mb-10 px-4 w-[372px] transition-all duration-1000 transform ${cardVisible ? "opacity-100" : "opacity-0"}`}
    >
        <div className="rounded-full border-2 border-[#C48F56] p-4">
            <img src={src} className="size-8 sm:size-12 object-contain" /> 
        </div>
        <h2 className="text-base sm:text-base font-semibold text-center">{title}</h2>
        <p className="text-xs text-gray-500 text-center leading-6 px-2 sm:px-6">{description}</p>
    </div>
)}

export default function About() {
    const [aboutRef, aboutVisible] = useScrollReveal();
    const [profileRef, profileVisible] = useScrollReveal();
    
    return (
        <section className="pt-30 sm:pt-44 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
            
            {/* About section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-1 lg:gap-2">
                <img 
                ref={profileRef}
                src={about} 
                alt="about" 
                className={`h-[50vh] sm:h-[60vh] lg:h-[70vh] 2xl:h-[75vh] object-cover rounded-md transition-all duration-700 transform 
                           ${profileVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`} 
            />
                
                <div 
                ref={aboutRef}
                className={`bg-[#F0F0F0] p-6 sm:p-10 md:p-14 lg:p-18 transition-all duration-700 transform
                            ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"}
                `}>
                    <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-4 xl:mb-6">
                        My name is Sumin Shrestha,<br />
                        <span className="text-[#C48F56]">I'm a Photographer.</span>
                    </h1>
                    <p className="text-xs xl:text-sm leading-6 xl:leading-7 pr-0 lg:pr-4 xl:pr-12 text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus soluta corporis asperiores, blanditiis neque culpa odio a nisi impedit natus cupiditate suscipit perspiciatis atque ipsam quod rem minus aliquid ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere officiis tempore mollitia natus, inventore porro repudiandae cumque, expedita deserunt necessitatibus corporis nostrum iste voluptatibus perferendis modi eum architecto. Corrupti?
                    </p>
                </div>
            </div>

            {/* Cards section */}
            <div className="my-16 sm:my-20">
                <h1 className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">What to expect</h1>
                <p className="text-center">——</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-10 mt-10">
                    <Cards 
                        src={lights} 
                        title="LIGHT COMPOSURE" 
                        description="Compose your photograph in a way that the contrast between light and shadow becomes the focal point of the image." 
                    />
                    <Cards 
                        src={skills} 
                        title="PROFESSIONAL SKILLS" 
                        description="A creative mind with knowledge of photography techniques and the ability to use a wide range of cameras and lenses." 
                    />
                    <Cards 
                        src={equipment} 
                        title="PERFECT EQUIPMENT" 
                        description="From Cameras to studio setup, studio lighting selection, photography backdrops. We go you covered." 
                    />
                    <Cards 
                        src={passion} 
                        title="OUR PASSION" 
                        description="Photography Helps Us Communicate. Photography is our passion because we use it to express ourselves." 
                    />
                    <Cards 
                        src={vision} 
                        title="UNIQUE VISION" 
                        description="In photography, vision is the power of observation; it’s how you notice things that are worth capturing." 
                    />
                    <Cards 
                        src={result} 
                        title="BEST RESULTS" 
                        description="For us photography is more than a documentation process, it is an art form and should be treated like one." 
                    />
                </div>
            </div>
        </section>
    )
}
