import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/imageSlider/bg-1.jpg";
import img2 from "../assets/imageSlider/bg-2.jpg";
// import img3 from "../assets/imageSlider/bg-3.jpg";
// import img4 from "../assets/imageSlider/bg-4.jpg";
// import img5 from "../assets/imageSlider/bg-5.jpg";

export default function ImageSlider() {
  const images = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full md:h-screen h-[480px] overflow-hidden shadow-2xl/50">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-gray-400 cursor-pointer"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-gray-400 cursor-pointer"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
