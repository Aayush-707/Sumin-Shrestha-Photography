import { useForm } from "react-hook-form"
import { useState} from 'react'
import location from '../assets/logo/location.png'
import mobile from '../assets/logo/mobile.png'
import mail from '../assets/logo/mail.png'
import useScrollReveal from "../hooks/useScrollReveal"
import toast from "react-hot-toast";

const FormElements = ({type, id, name, autoComplete, title, placeholder, rules, register, errors}) => (
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
            className="border-2 border-gray-300 p-2 text-sm w-[300px] sm:w-[230px] focus:border-black focus:outline-none transition-colors "
        />
        {errors[name] && (
            <span className="text-red-500 text-xs mt-1">{errors[name].message}</span>
        )}
    </div>
)

export default function Connect(){
    const { register, handleSubmit, formState: { errors }, reset } = useForm({mode: "onBlur"})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [connectRef, connectVisible] = useScrollReveal()

    const ContactElements = ({src, text}) => (
        <div className='flex items-center gap-4'> 
            <div className='border-2 border-[#C48F56] rounded-full p-5'>
                <img 
                src={src} 
                alt={src}
                className='lg:size-6 size-5' />
            </div>
            <span className={`text-sm ${src === mobile ? "underline cursor-pointer text-[#C48F56]" : src === mail ? "hover:underline cursor-pointer" : "" }`}>
                {text}
            </span>
        </div>
    )

    const onSubmit = async (data) => {
        setIsSubmitting(true)
            try {
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
                    toast.success("Thank you! Your message has been sent.");
                    reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                toast.error("Sorry, there was an error sending your message. Please try again.");
            } finally {
                setIsSubmitting(false)
        }
        };

    return(
        <section ref={connectRef} className={`sm:pt-44 pt-30 lg:px-12 2xl:px-20 md:px-10 px-0 transition-all duration-1000 ease-out transform ${
            connectVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
            <h1 className={`text-start md:text-2xl 2xl:text-3xl text-xl font-bold mb-4 ml-6 transition-all duration-1200 ease-out transform ${
                connectVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`} 
            style={{ transitionDelay: connectVisible ? '200ms' : '0ms' }}>
                Contact me
            </h1>
            
            <div className="flex flex-col xl:flex-row lg:mb-20 mb-2">
                <div className={`flex flex-col lg:flex-row lg:items-center 2xl:gap-12 xl:gap-2 mb-10 xl:mb-0 transition-all duration-1000 ease-out transform ${
                    connectVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: connectVisible ? '400ms' : '0ms' }}>
                    <div className='lg:w-[50%] bg-[#F0F0F0] lg:text-sm text-xs p-6 text-gray-600 leading-5'>
                        <p className="mb-3">
                            I always enjoy connecting with people who value the art of photography as much as I do. Whether you are looking for someone to capture your wedding day, document an event, create personal portraits, or bring your creative project to life, I would be honored to help tell your story through my lens.
                        </p>
                        <p className="mb-3">
                            Photography, to me, is more than just taking pictures — it's about preserving emotions, details, and moments that can be cherished for years to come. Every client and every project is unique, and I dedicate time and care to ensure that the final images reflect your vision and personality.
                        </p>
                        <p className="mb-3">
                            If you'd like to know more about my services, discuss your ideas, or simply explore how we can work together, please don't hesitate to reach out. You can contact me through email, phone, or social media, and I'll get back to you as soon as possible. Let's create something meaningful together.
                        </p>
                    </div>
                    <div className='lg:w-[50%] space-y-4 mt-8 pl-6'>
                        <ContactElements src={location} text='Bhaktapur, Madhyapur Thimi'/>
                        <ContactElements src={mobile} text='+977-9841234567'/>
                        <ContactElements src={mail} text='suminshrestha77@gmail.com'/>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col p-6 transition-all duration-1000 ease-out transform ${
                    connectVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                }`}
                style={{ transitionDelay: connectVisible ? '600ms' : '0ms' }}>
                    <h2 className='text-sm font-semibold mb-8'>Get in touch with me if you have any queries and I will get back to you as soon as possible.</h2>
                    <fieldset className="space-y-4" disabled = {isSubmitting}>
                        <FormElements
                            title = 'Name:'
                            type = 'text'
                            id = 'name'
                            name = 'user_name'
                            autoComplete = 'name'
                            placeholder='Your Name'
                            rules={{ required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } }}
                            register={register}
                            errors={errors}
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
                                register={register}
                                errors={errors}
                            />

                            <FormElements
                                title = 'Phone number:'
                                type = 'tel'
                                id = 'phone'
                                name = 'phone_number'
                                autoComplete = 'tel'
                                placeholder='Your Phone Number '
                                rules={{
                                    pattern: { value: /^[0-9+\-\s()]+$/, message: "Please enter a valid phone number" }
                                }}
                                register={register}
                                errors={errors}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className='text-sm mb-1'>
                                Your Message:
                            </label>
                            <textarea 
                                id="message" 
                                rows="6"
                                placeholder="Your message" 
                                {...register("user_message", { 
                                    required: "Message is required", 
                                    minLength: { value: 10, message: "Message must be at least 10 characters" } 
                                })}
                                className="border-2 border-gray-300 text-sm p-2 w-[300px] sm:w-[476px] focus:border-black focus:outline-none transition-colors"      
                            />
                            {errors.user_message && (
                                <span className="text-red-500 text-xs mt-1">{errors.user_message.message}</span>
                            )}
                        </div>
                    </fieldset>

                    <div className="flex mt-4">
                        <button type="submit"
                        disabled = {isSubmitting} 
                        className="group border-2 border-gray-500 rounded py-2 px-4 text-md flex items-center gap-2 hover:bg-black cursor-pointer transition duration-300 ease-in-out">
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