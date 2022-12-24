import React from 'react';
import {default as NextImage} from 'next/image';

type Props = {
  className?: string;
  src?: string;
  alt?: string;
}

const Image: React.FC<Props> = ({ className, src, alt, ...props }) => {
  
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
      {...props}
    />
  );
}

Image.defaultProps = {
  className: '',
  src: 'undefined.png',
  alt: ''
}

export default Image;
