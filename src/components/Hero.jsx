import { useState, useRef, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import { homeImages } from '../../data/hero';
import profile from '../assets/pp.jpg';
import ImageSlider from './ImageSlider';
import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Main() {
  const [index, setIndex] = useState(-1);
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [profileRef, profileVisible] = useScrollReveal();
  const [visibleItems, setVisibleItems] = useState(
    homeImages.map((_, i) => i < 4) // Set the first 4 items to be initially visible
  );
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleItems = [...visibleItems];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = imageRefs.current.indexOf(entry.target);
            if (itemIndex > -1) {
              newVisibleItems[itemIndex] = true;
            }
          }
        });
        setVisibleItems(newVisibleItems);
      },
      { threshold: 0.2 }
    );

    // Observe only the images that are not initially visible
    imageRefs.current.slice(4).forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      imageRefs.current.slice(4).forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, [visibleItems]); // This hook depends on visibleItems to update properly

  return (
    <main>
      {/* Image Slider */}
      <ImageSlider />

      {/* About me section */}
      <div className="flex bg-white justify-center items-center gap-10 md:py-40 py-20 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-6">
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
          <h2 className="sm:text-4xl text-3xl font-bold mb-6 leading-12">
            My name is Sumin Shrestha, <br />
            I'm a <span className="text-blue-600">Photographer</span>
          </h2>
          <p className="sm:text-md text-sm text-gray-600 font-light mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat quisquam, perferendis nam ducimus magnam alias aperiam est natus, sapiente iure, corporis sed? Soluta error alias illum officia, repellendus esse!
          </p>
          <button className="border flex justify-center items-center gap-2 w-[150px] p-3 whitespace-nowrap hover:bg-[#212121] hover:text-white cursor-pointer">
            <span>Call now</span>
          </button>
        </div>
      </div>
      
      {/* Gallery Sectiom */}
      <div className="lg:px-10 sm:px-6 px-3">
         <div className='flex flex-col justify-center items-center mb-10'>
            <h1 className='font-semibold text-4xl mb-2'>Overview</h1>
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