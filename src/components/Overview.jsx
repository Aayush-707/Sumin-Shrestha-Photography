import { useState, useMemo } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Share from 'yet-another-react-lightbox/plugins/share';
import { getHomeImages } from '../../data/data.js';
import useImageReveal from '../hooks/useOverviewImageReveal.js';

export default function Overview() {
    const [index, setIndex] = useState(-1);
    const images = useMemo(() => getHomeImages(), []);
    const { visibleItems, imageRefs } = useImageReveal(images);

    return (
        <section id="overview" className="md:mt-40 mt-20">
            <div className="lg:px-10 sm:px-6 px-3">
                <div className="flex flex-col justify-center items-center mb-10">
                    <h1 className="font-semibold lg:text-4xl md:text-3xl sm:text-2xl xl mb-2">Overview</h1>
                </div>
                <div className="lg:columns-5 md:columns-4 sm:columns-2 columns-1 gap-2 [&>img:not(:first-child)]:mt-2">
                    {images.map((item, i) => (
                        <img
                            ref={(el) => (imageRefs.current[i] = el)}
                            src={item.src}
                            alt={item.alt}
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-full break-inside-avoid rounded shadow-lg transition-all hover:scale-99 duration-700 ease-in-out transform ${
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
                slides={images}
                plugins={[Fullscreen, Share]}
            />
        </section>
    );
}