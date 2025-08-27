import backgroundImage from '../assets/bg-2.jpg'

export default function ImageSlider(){
    return(
            <div className="md:h-screen bg-cover bg-center shadow-2xl shadow-black h-[400px]" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    )
}