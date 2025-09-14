import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import { SocialEventsImages } from '../../data/cloudinary-data.js';
import ImageGrid from './ImageGrid.jsx';


export default function SocialEvents(){
    const [index, setIndex] = useState(-1);

    return(
        <>
            <ImageGrid images={SocialEventsImages} onClick={setIndex} />
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={SocialEventsImages}
                plugins={[Fullscreen, Share]}
            />
        </>
    )
}