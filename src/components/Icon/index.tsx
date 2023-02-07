import React from 'react';
import {default as NextImage} from 'next/image';

type Props = {
  className?: string;
  name: string;
  size?: number;
}

const Icon: React.FC<Props> = ({ className, name, size, ...props }) => {
  const src = require(`assets/icons/${name}.svg`).default;

  return (
    <NextImage className={`icon-${name} ${className}`}
      src={src}
      alt={name}
      style={{width: size + 'px', height: size + 'px'}}
      {...props}
    />
  );
}

Icon.defaultProps = {
  className: '',
  size: 22
}

export default Icon;
