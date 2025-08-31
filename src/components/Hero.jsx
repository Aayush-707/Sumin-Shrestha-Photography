import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import { homeImages } from '../../data/hero';
import profile from '../assets/pp.jpg';
import ImageSlider from './ImageSlider';
import useScrollReveal from '../hooks/useScrollReveal.js';
import useImageReveal from '../hooks/useImageReveal.js';

export default function Main() {
  const [index, setIndex] = useState(-1);
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [profileRef, profileVisible] = useScrollReveal();
  const { visibleItems, imageRefs } = useImageReveal(homeImages);
  

  return (
    <main className='mb-10'>
      {/* Image Slider */}
      <ImageSlider />

      {/* About me section */}
      <div className="flex justify-center items-center gap-10 md:py-40 py-20 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-6">
        <img
          ref={profileRef}
          src={profile}
          alt="profile"
          className={`rounded-full shadow-xl hidden md:block transition-all duration-700 transform
            ${profileVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}
          `}
        />
        <div
          ref={aboutRef}
          className={`transition-all duration-700 transform
            ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"}
          `}
        >
          <h1 className="font-semibold sm:text-xl text-lg mb-4">About me</h1>
          <span className="mb-4">—</span>
          <h2 className="sm:text-4xl text-[23px] font-bold sm:mb-6 mb-4 leading-10 sm:leading-12">
            My name is Sumin Shrestha, <br />
            I'm a <span className="text-blue-600">Photographer</span>
          </h2>
          <p className="sm:text-md text-[12px] text-gray-600 font-light mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat quisquam, perferendis nam ducimus magnam alias aperiam est natus, sapiente iure, corporis sed? Soluta error alias illum officia, repellendus esse!
          </p>
          <button className="border flex justify-center items-center gap-2 w-[150px] p-3 whitespace-nowrap hover:bg-[#212121] hover:text-white cursor-pointer transition delay-150 duration-300 ease-in-out ">
            Call now
          </button>
        </div>
      </div>
      
      {/* Gallery Sectiom */}
      <div className="lg:px-10 sm:px-6 px-3">
         <div className='flex flex-col justify-center items-center mb-10'>
            <h1 className='font-semibold lg:text-4xl md:text-3xl sm:text-2xl xl mb-2'>Overview</h1>
            <span>——</span>
        </div>
        <div className="lg:columns-5 md:columns-4 sm:columns-2 columns-1 gap-2 [&>img:not(:first-child)]:mt-2">
          {homeImages.map((item, i) => (
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              src={item.src}
              alt={item.alt}
              key={i}
              onClick={() => setIndex(i)}
              className={`w-full break-inside-avoid rounded shadow-lg transition-all duration-700 ease-in-out transform ${
                visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={homeImages}
        plugins={[Fullscreen, Share]}
      />
    </main>
  );
}