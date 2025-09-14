import { useState, useRef, useEffect } from "react";

export default function usePortfolioImageReveal(images = [], initialVisible = 4, threshold = 0.2) {
  const [visibleItems, setVisibleItems] = useState(
    images.map((_, i) => i < initialVisible)
  );
  
  const imageRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    setVisibleItems(images.map((_, i) => i < initialVisible));
    imageRefs.current = imageRefs.current.slice(0, images.length);
  }, [images.length, initialVisible]);

  useEffect(() => {
    if (!images.length) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.findIndex(ref => ref === entry.target);
            
            if (index > -1) {
              setVisibleItems((prev) => {
                if (prev[index]) return prev;
                
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
              
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      { 
        threshold,
        rootMargin: '50px 0px'
      }
    );

    imageRefs.current.forEach((imageRef, i) => {
      if (imageRef && !visibleItems[i] && i < images.length) {
        observerRef.current.observe(imageRef);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, images.length]);

  useEffect(() => {
    if (!observerRef.current) return;

    imageRefs.current.forEach((imageRef, i) => {
      if (imageRef && !visibleItems[i] && i < images.length) {
        try {
          observerRef.current.observe(imageRef);
        } catch (e) {
        }
      }
    });
  }, [visibleItems, images.length]);

  return { 
    visibleItems, 
    imageRefs,
    setImageRef: (index) => (el) => {
      imageRefs.current[index] = el;
    }
  };
}