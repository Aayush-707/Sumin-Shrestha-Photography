import { useState, useRef, useEffect } from "react";

export default function usePortfolioImageReveal(images = [], initialVisible = 4, threshold = 0.2) {
  const [visibleItems, setVisibleItems] = useState(
    images.map((_, i) => i < initialVisible)
  );

  const imageRefs = useRef([]);

  useEffect(() => {
    if (!images.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prev) => {
          const updated = [...prev];
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = imageRefs.current.indexOf(entry.target);
              if (index > -1) {
                updated[index] = true;
                observer.unobserve(entry.target);
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

    return () => observer.disconnect();
  }, [threshold, images, visibleItems]);

  return { visibleItems, imageRefs };
}
