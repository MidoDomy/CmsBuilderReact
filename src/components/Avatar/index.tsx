import React from 'react';

import Image from 'components/Image';

type Props = {
  className?: string;
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<Props> = ({ className, src, alt, size }) => {

  const sizeClasses = (() => {switch(size) {
    case 'lg':
      return 'h-10 w-10'
    case 'sm':
      return 'h-6 w-6'
    default: 
      return 'h-8 w-8'
  }})()

  return (
    <Image
      className={`border-2 border-base-light overflow-hidden rounded-full object-cover object-center ${sizeClasses} ${className ? className : ''}`}
      src={src}
      alt={alt}
    />
  );
}

Avatar.defaultProps = {
  src: 'undefinedUser.jpeg',
  size: 'md'
}

export default Avatar;
