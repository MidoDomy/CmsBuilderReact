import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode,
  className?: string;
  variant?: 'primary' | 'secondary' | 'default';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  square?: boolean;
  rounded?: boolean;
  href?: string;
}

const Button: React.FC<Props> = ({ children, className, variant, size, block, square, rounded, href, ...props }) => {

  // Classes -----------------------------------
  const variantClasses = (() => {switch(variant) {
    case 'primary':
      return 'bg-sky-500 border-sky-500 hover:bg-sky-600 hover:border-sky-600 text-white'
    case 'secondary':
      return 'bg-sky-50 border-sky-50 hover:bg-sky-100 hover:border-sky-100 text-sky-600'
    default: 
      return 'border-gray-300 hover:bg-gray-100 text-slate-700'
  }})()

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return (square || rounded ? 'p-1.5' : 'py-1 px-4') + ' text-sm'
    case 'lg':
      return (square || rounded ? 'p-2.5' : 'py-2 px-6') + ' text-md'
    default: 
      return (square || rounded ? 'p-2' : 'py-2 px-5') + ' text-sm'
  }})()

  const getClasses = () => {
    return `selection-none inline-flex gap-2 items-center cursor-pointer border font-medium shadow-sm transition-colors disabled:bg-gray-400 disabled:border-gray-400 disabled:hover:bg-opacity-100 ${variantClasses} ${sizeClasses} ${block ? 'w-full justify-center' : ''} ${rounded ? 'rounded-full' : 'rounded-md'} ${className}`;
  }
  // -----------------------------------

  return (
    <>
      { href ? 
        <Link className={getClasses()} 
          href={href}
        >
          {children}
        </Link>
      :
        <button className={getClasses()}>
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

export default Button;
