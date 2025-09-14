import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import ImageGrid from './ImageGrid.jsx';
import { TravelImages } from '../../data/cloudinary-data.js';

export default function Travel(){
    const [index, setIndex] = useState(-1);

    return(
        <>
            <ImageGrid images={TravelImages} onClick={setIndex} />
            
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={TravelImages}
                plugins={[Fullscreen, Share]}
            />
        </>
    )
}