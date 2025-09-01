import location from '../assets/location.png'
import mobile from '../assets/mobile.png'
import mail from '../assets/mail.png'

export default function Connect(){
    const FormElements = ({type, id, name, autocomplete, title, placeholder}) => (
        <div className="flex flex-col">
            <label htmlFor={id} className='text-sm mb-1'>
                {title}
            </label>
            <input 
                type={type}
                id={id} 
                name={name}
                placeholder={placeholder} 
                autoComplete={autocomplete} required
                className="border p-2 text-sm w-[300px] sm:w-[230px]"
                />
        </div>
    )

    const ContactElements = ({src, text}) => (
        <div className='flex items-center gap-4'> 
            <div className='border-2 border-[#C48F56] rounded-full p-5'>
                <img 
                src={src} 
                alt={src}
                className='md:size-7 size-5' />
            </div>
            <span className='text-sm'>{text}</span>
        </div>
    )

    return(
        <section className="sm:mt-36 mt-30 lg:px-12 2xl:px-20 md:px-10 px-6">
            <h1 className="text-start md:text-3xl text-xl font-bold md:mb-6 mb-4 ml-6">Contact me</h1>
            <div className="flex flex-col xl:flex-row mb-16">
                <div className="flex flex-col lg:flex-row lg:items-center 2xl:gap-12 xl:gap-2 mb-10 xl:mb-0">
                    <div className='lg:w-[50%] bg-[#F0F0F0] md:text-sm text-[12px] p-6 [&>p]:mb-4 '>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit beatae fugiat, possimus quaerat quos omnis necessitatibus ipsum temporibus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet possimus temporibus pariatur</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti, aliquid cupiditate distinctio, maiores, quo tenetur suscipit explicabo autem possimus earum corporis nulla voluptatum aliquam sed enim temporibus tempora veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto odio a possimus libero porro dicta repudiandae voluptate maxime totam repellat corporis</p>
                    </div>
                    <div className='lg:w-[50%] space-y-4 sm:pl-6'>
                        <ContactElements src={location} text='Bhaktapur, Madhyapur Thimi'/>
                        <ContactElements src={mobile} text='+977 9841234567'/>
                        <ContactElements src={mail} text='suminshrestha77@gmail.com'/>
                    </div>
                </div>
                <form action="" className="flex flex-col p-6">
                    <h2 className='text-sm font-semibold mb-8'>Get in touch with me if you have any queries and i will get back to you as soon as possible.</h2>
                    <fieldset className="space-y-4">
                        <FormElements
                            title = 'Name:'
                            type = 'text'
                            id = 'name'
                            name = 'user_name'
                            autocomplete = 'name'
                            placeholder='Your Name'
                        />
                        <div className="flex sm:flex-row flex-col gap-4">
                            <FormElements
                                title = 'Email:'
                                type = 'email'
                                id = 'email'
                                name = 'user_email'
                                autocomplete = 'email'
                                placeholder='Your Email'
                            />

                            <FormElements
                                title = 'Phone number:'
                                type = 'tel'
                                id = 'phone'
                                name = 'phone_number'
                                autocomplete = 'tel'
                                placeholder='Your Phone Number '
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className='text-sm mb-1'>
                                Your Message:
                            </label>
                            <textarea 
                                id="message" 
                                name="user_message" 
                                rows="5" required
                                className="border-2 p-2 w-[300px] sm:w-[476px]"      
                            >
                            </textarea>
                        </div>
                    </fieldset>

                    <div className="flex mt-4">
                        <button type="submit" className="group border py-2 px-4 text-md flex items-center gap-2 hover:bg-black cursor-pointer transition duration-300 ease-in-out">
                            <span className="text-black group-hover:text-white text-sm">Send Message</span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 385.756 385.756"
                            className="size-3 text-black group-hover:text-white"
                            fill="currentColor"
                            >
                            <path d="M377.816,7.492C372.504,2.148,366.088,0,358.608,0H98.544c-15.44,0-29.08,10.988-29.08,26.428v23.724 
                                    c0,15.44,13.64,29.848,29.08,29.848h152.924L8.464,322.08c-5.268,5.272-8.172,11.84-8.176,19.34c0,7.5,2.908,14.296,8.176,19.568 
                                    L25.24,377.64c5.264,5.272,12.296,8.116,19.796,8.116s13.768-2.928,19.036-8.2l241.392-242.172v151.124 
                                    c0,15.444,14.084,29.492,29.52,29.492h23.732c15.432,0,26.752-14.048,26.752-29.492V26.52 
                                    C385.464,19.048,383.144,12.788,377.816,7.492z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}