import usePortfolioImageReveal from "../hooks/usePortfolioImageReveal";

export default function ImageGrid({ images = [], onClick }) {
  const { visibleItems, setImageRef } = usePortfolioImageReveal(images, 6, 0.2);

  return (
    <div className="lg:columns-5 md:columns-4 sm:columns-2 columns-1 gap-2 [&>img:not(:first-child)]:mt-2">
      {images.map((item, i) => (
        <img
          key={`${item.src}-${i}`}
          ref={setImageRef(i)}
          loading="lazy"
          src={visibleItems[i] ? item.src : null}
          alt={item.alt}
          onClick={() => onClick?.(i)}
          className={`transition-all duration-700 ease-in-out transform rounded hover:scale-99
            ${visibleItems[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            transitionDelay: `${Math.min(i * 100, 800)}ms`
          }}
        />
      ))}
    </div>
  );
}
