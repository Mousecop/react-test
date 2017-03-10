import React from 'react';

import Image from './images';

export default function Gallery(props) {
    const images = props.images.map((image, index) =>
        <Image url={image.url} description={image.description} key={index}/>
    );

    return (
        <div className="gallery">{images}</div>
    );
}