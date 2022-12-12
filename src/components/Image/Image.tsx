import React from 'react';
import {default as NextImage} from 'next/image';

type ImageProps = {
  className?: string;
  src: string;
  alt?: string;
  size?: number;
}

const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
  
  let image: string;

  if (src && src.substring(0, 4) === 'http') {
    image = src;
  }
  else {
    image = require(`../../assets/images/${src}`).default;
  }

  return (
    <NextImage
        className={className}
        src={image}
        alt={alt}
    />
  );
}

Image.defaultProps = {
  src: 'undefined.png',
  alt: ''
}

export default Image;
