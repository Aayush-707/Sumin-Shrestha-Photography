import { useForm } from "react-hook-form"
import { useState} from 'react'
import location from '../assets/location.png'
import mobile from '../assets/mobile.png'
import mail from '../assets/mail.png'

export default function Connect(){
    const { register, handleSubmit, formState: { errors }, reset } = useForm({mode: "onBlur"})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data) => {
        setIsSubmitting(true)
            try {
                console.log("Submitting form...");
                
                const response = await fetch('https://formspree.io/f/xvgbbbog', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: data.user_name,
                        email: data.user_email,
                        phone: data.phone_number,
                        message: data.user_message
                    }),
                });

                if (response.ok) {
                    console.log("Form Submitted Successfully ✅");
                    alert("Thank you! Your message has been sent.");
                    reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error("Form submission error:", error);
                alert("Sorry, there was an error sending your message. Please try again.");
            } finally {
                setIsSubmitting(false)
        }
        };

    const FormElements = ({type, id, name, autoComplete, title, placeholder, rules}) => (
        <div className="flex flex-col">
            <label htmlFor={id} className='text-sm mb-1'>
                {title}
            </label>
            <input 
                type={type}
                id={id} 
                placeholder={placeholder} 
                autoComplete={autoComplete}
                {...register(name, rules)} 
                className="border p-2 text-sm w-[300px] sm:w-[230px]"
            />
            {errors[name] && (
                <span className="text-red-500 text-xs mt-1">{errors[name].message}</span>
            )}
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
            <span className={`text-sm ${src === mobile ? "hover:underline cursor-pointer text-blue-500" : src === mail ? "hover:underline cursor-pointer" : "" }`}>
                {text}
            </span>
        </div>
    )

    return(
        <section className="sm:mt-36 mt-30 lg:px-12 2xl:px-20 md:px-10 px-6">
            <h1 className="text-start md:text-3xl text-xl font-bold mb-4 ml-6">Contact me</h1>
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
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-6">
                    <h2 className='text-sm font-semibold mb-8'>Get in touch with me if you have any queries and i will get back to you as soon as possible.</h2>
                    <fieldset className="space-y-4">
                        <FormElements
                            title = 'Name:'
                            type = 'text'
                            id = 'name'
                            name = 'user_name'
                            autoComplete = 'name'
                            placeholder='Your Name'
                            rules={{ required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } }}
                        />
                        <div className="flex sm:flex-row flex-col gap-4">
                            <FormElements
                                title = 'Email:'
                                type = 'email'
                                id = 'email'
                                name = 'user_email'
                                autoComplete = 'email'
                                placeholder='Your Email'
                                rules={{ 
                                    required: "Email is required", 
                                    pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Enter a valid email" } 
                                }}
                            />

                            <FormElements
                                title = 'Phone number:'
                                type = 'tel'
                                id = 'phone'
                                name = 'phone_number'
                                autoComplete = 'tel'
                                placeholder='Your Phone Number '
                                rules={{
                                    pattern: { value: /^[0-9]+$/, message: "Phone number must contain only digits" }
                                }}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className='text-sm mb-1'>
                                Your Message:
                            </label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                {...register("user_message", { 
                                    required: "Message is required", 
                                    minLength: { value: 10, message: "Message must be at least 10 characters" } 
                                })}
                                className="border p-2 w-[300px] sm:w-[476px]"      
                            />
                            {errors.user_message && (
                                <span className="text-red-500 text-xs mt-1">{errors.user_message.message}</span>
                            )}
                        </div>
                    </fieldset>

                    <div className="flex mt-4">
                        <button type="submit"
                        disabled = {isSubmitting} 
                        className="group border py-2 px-4 text-md flex items-center gap-2 hover:bg-black cursor-pointer transition duration-300 ease-in-out">
                            <span className={`text-sm ${isSubmitting ? 'text-gray-500' : 'text-black group-hover:text-white'}`}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                            </span>                            
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
