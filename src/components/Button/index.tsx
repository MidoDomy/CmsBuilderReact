import React from 'react';
import Link from 'next/link';

import ButtonGroup from './ButtonGroup';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'danger-outline' | 'link' | 'default';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  block?: boolean;
  square?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void
}

const Button: React.FC<Props> = ({ children, className, variant, size, block, square, rounded, disabled, href, onClick, ...props }) => {

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
    case 'danger':
      return 'bg-red-500 hover:bg-red-600 border border-red-500 hover:border-red-600 text-white shadow-sm'
    case 'danger-outline':
      return 'bg-white hover:bg-red-500 border border-red-300 hover:border-red-500 text-red-500 hover:text-white shadow-sm'
    default: 
      return 'bg-white hover:bg-gray-100 border border-gray-200 text-slate-700 shadow-sm'
  }})()

  const sizeClasses = (() => {switch(size) {
    case 'xs':
      return (square || rounded ? 'p-0.5' : 'py-0.5 px-3')
    case 'sm':
      return (square || rounded ? 'p-1.5' : 'py-1 px-4')
    case 'lg':
      return (square || rounded ? 'p-2.5' : 'py-2 px-6')
    default: 
      return (square || rounded ? 'p-2' : 'py-2 px-5')
  }})()

  const disabledClasses = 'disabled:bg-gray-300 disabled:border-gray-300 disabled:text-slate-500 disabled:opacity-80'

  const getClasses = () => {
    return `select-none inline-flex gap-2 items-center cursor-pointer font-medium transition-colors ${variantClasses} ${variant === 'link' ? '' : sizeClasses} ${size === 'lg' ? 'text-base' : 'text-sm'} ${block ? 'w-full justify-center' : ''} ${rounded ? 'rounded-full' : 'rounded-md'} ${disabledClasses} ${className}`;
  }
  // -----------------------------------

  return (
    <>
      { href ? 
        <Link className={getClasses()} 
          href={!disabled ? href : ''}
          {...props}
        >
          {children}
        </Link>
      :
        <button className={getClasses()}
          onClick={onClick}
          disabled={disabled}
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
