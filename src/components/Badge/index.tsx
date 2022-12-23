import React from 'react';

type Props = {
  children?: React.ReactNode,
  className?: string;
  variant?: 'primary' | 'secondary' | 'default';
  text?: String
}

const Badge: React.FC<Props> = ({ children, className, variant, text }) => {

  const variantClasses = (() => {switch(variant) {
    case 'primary':
      return 'bg-sky-600 text-base-light'
    case 'secondary':
      return 'bg-base-secondary text-base-dark'
    default: 
      return 'bg-base-light text-base-dark'
  }})()

  const getClasses = () => {
    return `absolute block rounded-lg text-2xs ${text || children ? 'top-0 right-0.5 py-px px-1' : 'top-1.5 right-2 p-1'} ${variantClasses} ${className}`;
  }

  return (
    <span className={getClasses()}>
      {text ? text : children}
    </span>
  );
}

Badge.defaultProps = {
  variant: 'primary'
}

export default Badge;
