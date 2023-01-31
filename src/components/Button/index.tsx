import React from 'react';
import Link from 'next/link';

import ButtonGroup from './ButtonGroup';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'default';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  square?: boolean;
  rounded?: boolean;
  href?: string;
  onClick?: () => void
}

const Button: React.FC<Props> = ({ children, className, variant, size, block, square, rounded, href, onClick, ...props }) => {

  // Classes -----------------------------------
  const variantClasses = (() => {switch(variant) {
    case 'primary':
      return 'bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white shadow-sm'
    case 'secondary':
      return 'bg-sky-50 hover:bg-sky-100 border border-sky-50 hover:border-sky-100 text-sky-600 shadow-sm'
    case 'ghost':
      return 'hover:bg-gray-50 border border-transparent text-slate-700'
    case 'link':
      return 'underline hover:no-underline'
    default: 
      return 'bg-white hover:bg-gray-100 border border-gray-200 text-slate-700 shadow-sm'
  }})()

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return (square || rounded ? 'p-1.5' : 'py-1 px-4')
    case 'lg':
      return (square || rounded ? 'p-2.5' : 'py-2 px-6')
    default: 
      return (square || rounded ? 'p-2' : 'py-2 px-5')
  }})()

  const getClasses = () => {
    return `select-none inline-flex gap-2 items-center cursor-pointer font-medium transition-colors disabled:bg-gray-400 disabled:border-gray-400 disabled:hover:bg-opacity-100 ${variantClasses} ${variant === 'link' ? '' : sizeClasses} ${size === 'lg' ? 'text-base' : 'text-sm'} ${block ? 'w-full justify-center' : ''} ${rounded ? 'rounded-full' : 'rounded-md'} ${className}`;
  }
  // -----------------------------------

  return (
    <>
      { href ? 
        <Link className={getClasses()} 
          href={href}
          {...props}
        >
          {children}
        </Link>
      :
        <button className={getClasses()}
          onClick={onClick}
          {...props}
        >
          {children}
        </button>
      }
    </>
  );
}

Button.defaultProps = {
  className: '',
  variant: 'default',
  size: 'md'
}

export default Object.assign(Button, {
  Group: ButtonGroup
});
