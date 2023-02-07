import React from 'react';

import Image from 'components/Image';
import AvatarGroup from './AvatarGroup';

type Props = {
  className?: string;
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Avatar: React.FC<Props> = ({ className, src, alt, size, ...props }) => {

  const sizeClasses = (() => {switch(size) {
    case 'xs':
      return 'h-6 w-6'
    case 'sm':
      return 'h-8 w-8'
    case 'lg':
      return 'h-12 w-12'
    case 'xl':
      return 'h-14 w-14'
    default: 
      return 'h-10 w-10'
  }})()

  return (
    <Image
      className={`select-none border-2 border-gray-200 overflow-hidden rounded-full object-cover object-center ${sizeClasses} ${className}`}
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

export default Object.assign(Avatar, {
  Group: AvatarGroup
});
