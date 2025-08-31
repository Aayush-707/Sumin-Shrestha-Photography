import about from '../assets/about-profile.jpeg'
import lights from '../assets/studio-light.png'
import skills from '../assets/photographer.png'
import equipment from '../assets/camera.png'
import vision from '../assets/photography.png'
import passion from '../assets/photo.png'
import result from '../assets/macro.png'

export default function About(){
    const Cards = ({src, title, description}) => (
        <div className='flex flex-col justify-center items-center col-span-1 space-x-8 space-y-4 mb-10'>
            <div className=' rounded-full border-2 border-[#C48F56] p-6'>
            <img src={src} className='size-14 object-cover ' />
            </div>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='text-sm text-center leading-6 px-6'>{description}</p>
        </div>
    )

    return(
        <section className='mt-36  px-50'>
            <div className='flex items-center justify-center gap-1'>
                <img src={about} alt="about" className='h-[80vh] object-cover' />
                <div className='bg-[#F0F0F0] p-18'>
                    <h1 className='text-3xl font-semibold my-6 '>My name is Sumin Shrestha,<br /><span className='text-[#C48F56]'>I'm a photographer.</span></h1>
                    <span>——</span>
                    <p className='my-10 text-sm leading-7 pr-20'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus soluta corporis asperiores, blanditiis neque culpa odio a nisi impedit natus cupiditate suscipit perspiciatis atque ipsam quod rem minus aliquid ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere officiis tempore mollitia natus, inventore porro repudiandae cumque, expedita deserunt necessitatibus corporis nostrum iste voluptatibus perferendis modi eum architecto. Corrupti? 
                    </p>
                </div>
            </div>
            <div className='my-20'>
                <h1 className='text-center text-3xl font-semibold'>What to expect</h1>
                <h2 className='text-center'>——</h2>
                <div className='grid grid-cols-3 mt-10'>
                <Cards src={lights} 
                    title='LIGHT COMPOSURE' 
                    description='Compose your photograph in a way that the play and contrast between light and shadow becomes the focal point of the image.' />
                <Cards src={skills} 
                    title='PROFESSIONAL SKILLS' 
                    description='A creative mind with knowledge of photography techniques and the ability to use a wide range of cameras and lenses.' />
                <Cards src={equipment} 
                    title='PERFECT EQUIPMENT' 
                    description='From Cameras to studio setup, studio lighting selection, photography backdrops. We go you covered.' />
                <Cards src={passion} 
                    title='OUR PASSION' 
                    description='Photography Helps Us Communicate. Photography is our passion because we use it to express ourselves.' />
                <Cards src={vision} 
                    title='UNIQUE VISION' 
                    description='In photography, vision is the power of observation; it’s how you notice things that are worth capturing.' />
                <Cards src={result} 
                    title='BEST RESULTS' 
                    description='For us photography is more than a documentation process, it is an art form and should be treated like one.' />
                </div>
            </div>
        </section>
    )
}