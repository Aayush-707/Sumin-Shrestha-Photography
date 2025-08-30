import { useState, useRef, useEffect } from "react";

export default function useImageReveal(images, initialVisible = 4, threshold = 0.2) {
  const [visibleItems, setVisibleItems] = useState(
    images.map((_, i) => i < initialVisible) // first N visible
  );
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prev) => {
          const updated = [...prev];
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = imageRefs.current.findIndex((ref) => ref === entry.target);
              if (index > -1) {
                updated[index] = true;
              }
            }
          });
          return updated;
        });
      },
      { threshold }
    );

    imageRefs.current.forEach((image, i) => {
      if (image && !visibleItems[i]) {
        observer.observe(image);
      }
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, [threshold, images]);

  return { visibleItems, imageRefs };
}
