import React from 'react';

import Image from 'components/Image';

type Props = {
  className?: string;
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<Props> = ({ className, src, alt, size, ...props }) => {

  const sizeClasses = (() => {switch(size) {
    case 'lg':
      return 'h-11 w-11'
    case 'sm':
      return 'h-7 w-7'
    default: 
      return 'h-9 w-9'
  }})()

  return (
    <Image
      className={`border-2 border-gray-200 overflow-hidden rounded-full object-cover object-center ${sizeClasses} ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

Avatar.defaultProps = {
  className: '',
  src: 'undefinedUser.png',
  size: 'md'
}

export default Avatar;
