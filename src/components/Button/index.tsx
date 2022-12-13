import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode,
  className?: string;
  variant?: 'primary' | 'secondary' | 'default';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  outline?: boolean;
  square?: boolean;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, variant, size, disabled, block, outline, square, href, onClick }) => {

  const variantClasses = (() => {switch(variant) {
    case 'primary':
      return (outline ? 'bg-transparent' : 'bg-base-primary hover:bg-opacity-80') + ' border-base-primary hover:bg-base-primary'
    case 'secondary':
      return (outline ? 'bg-transparent' : 'bg-base-secondary hover:bg-opacity-80') + ' border-base-secondary hover:bg-base-secondary'
    default: 
      return 'hover:bg-base-light border-transparent'
  }})()

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return (square ? 'p-2' : 'py-1 px-2') + ' text-sm'
    case 'lg':
      return (square ? 'p-2' : 'py-2 px-4') + ' text-lg'
    default: 
      return (square ? 'p-2' : 'py-2 px-3') + ' text-md'
  }})()

  const getClasses = () => {
    return `border-2 ${variantClasses} ${sizeClasses} ${block ? 'w-full' : ''} ${className}`;
  }

  return (
    <>
      { href ? 
        <Link className={getClasses()} 
          href={href}
        >
          {children}
        </Link>
      :
        <button className={getClasses()}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      }
    </>
  );
}

Button.defaultProps = {
  variant: 'default',
  size: 'md'
}

export default Button;
