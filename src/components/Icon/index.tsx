import React from 'react';
import {default as NextImage} from 'next/image';

type Props = {
  className?: string;
  name: string;
  size?: number;
}

const Icon: React.FC<Props> = ({ className, name, size }) => {
  const src = require(`assets/icons/${name}.svg`).default;

  return (
    <NextImage className={`icon-${name} ${className ? className : ''}`}
      src={src}
      alt={name}
      width={size}
      height={size}
    />
  );
}

Icon.defaultProps = {
  size: 22
}

export default Icon;
