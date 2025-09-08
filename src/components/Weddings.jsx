import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import { WeddingImages } from '../../data/data.js';

export default function Weddings(){
    const [index, setIndex] = useState(-1);

    return(
        <>
            <div className="lg:columns-5 md:columns-4 sm:columns-2 columns-1 gap-2 [&>img:not(:first-child)]:mt-2">
                {WeddingImages.map((item, i) => (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={i}
                        onClick={() => setIndex(i)}
                        className="w-full break-inside-avoid rounded shadow-lg transition-all hover:scale-99 duration-700 ease-in-out transform"
                    />
                ))}
            </div>
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={WeddingImages}
                plugins={[Fullscreen, Share]}
            />
        </>
    )
}