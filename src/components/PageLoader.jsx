import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LetterReveal = ({ text, delay = 80, onComplete }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    setVisibleLetters(0);
  }, [text]);

  useEffect(() => {
    if (visibleLetters < text.length) {
      const timer = setTimeout(() => {
        setVisibleLetters(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timer);
    } else if (visibleLetters === text.length && onComplete) {
      const completeTimer = setTimeout(onComplete, 300);
      return () => clearTimeout(completeTimer);
    }
  }, [visibleLetters, text.length, delay, onComplete]);

  return (
    <div className="font-light tracking-wider italic">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            index < visibleLetters 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
          style={{
            transitionDelay: `${index * 30}ms`
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setShowFirstLine(false);
    setShowSecondLine(false);
    setFadeOut(false);

    // Start first line animation immediately
    const firstLineTimer = setTimeout(() => {
      setShowFirstLine(true);
    }, 200);

    return () => clearTimeout(firstLineTimer);
  }, [location]);

  const handleFirstLineComplete = () => {
    // Start second line after first line completes
    setShowSecondLine(true);
  };

  const handleSecondLineComplete = () => {
    // Start fade out after both lines complete
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 300);

    // Hide loader completely after fade out
    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  };

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center space-y-4">
        <div className="text-3xl md:text-4xl text-gray-800">
          {showFirstLine && (
            <LetterReveal 
              text="Sumin Shrestha" 
              delay={100}
              onComplete={handleFirstLineComplete}
            />
          )}
        </div>
        
        <div className="text-xl md:text-2xl text-gray-600">
          {showSecondLine && (
            <LetterReveal 
              text="PHOTOGRAPHY" 
              delay={120}
              onComplete={handleSecondLineComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
}