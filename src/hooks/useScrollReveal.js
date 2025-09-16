import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(threshold = 0.5) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observerRef.current.unobserve(entries[0].target); // Stop observing once visible
        }
      },
      { threshold }
    );

    // Start observing if element exists
    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
}