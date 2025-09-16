import { useState, useRef, useEffect } from "react";

export default function useImageReveal(images, initialVisible = 4, threshold = 0.2) {
  const [visibleItems, setVisibleItems] = useState(
    images.map((_, i) => i < initialVisible)
  );
  
  const imageRefs = useRef([]);
  const observerRef = useRef(null);

  // Reset visibility when images or initialVisible changes
  useEffect(() => {
    setVisibleItems(images.map((_, i) => i < initialVisible));
    imageRefs.current = imageRefs.current.slice(0, images.length);
  }, [images.length, initialVisible]);

  useEffect(() => {
    if (!images.length) return;

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.findIndex((ref) => ref === entry.target);
            if (index > -1) {
              setVisibleItems((prev) => {
                if (prev[index]) return prev; // Already visible, no update needed
                
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
              
              // Stop observing once visible for performance
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      { threshold }
    );

    // Observe only invisible images
    imageRefs.current.forEach((image, i) => {
      if (image && !visibleItems[i] && i < images.length) {
        observerRef.current.observe(image);
      }
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, images.length, visibleItems]);

  return { 
    visibleItems, 
    imageRefs
  };
}