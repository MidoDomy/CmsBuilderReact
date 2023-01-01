import React, {useRef} from 'react';
import Link from 'next/link';
import { useButton } from 'react-aria';

type Props = {
  children: React.ReactNode,
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'default';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  outline?: boolean;
  square?: boolean;
  rounded?: boolean;
  href?: string;
}

const Button: React.FC<Props> = ({ children, className, variant, size, block, outline, square, rounded, href, ...props }) => {
  
  let ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  let { buttonProps } = useButton(props, ref);

  // Classes -----------------------------------
  const variantClasses = (() => {switch(variant) {
    case 'primary':
      return (outline ? 'bg-transparent' : 'bg-sky-500') + ' border-sky-500 hover:bg-sky-600 hover:border-sky-600 text-white'
    case 'secondary':
      return (outline ? 'bg-transparent' : 'bg-base-secondary hover:bg-opacity-80 text-base-light') + ' border-base-secondary hover:bg-base-secondary'
    case 'ghost':
      return 'border-transparent bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 shadow-none'
    default: 
      return 'text-slate-700 dark:text-slate-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
  }})()

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return (square || rounded ? 'p-1.5' : 'py-1.5 px-3') + ' text-xs'
    case 'lg':
      return (square || rounded ? 'p-2.5' : 'py-2.5 px-5') + ' text-md'
    default: 
      return (square || rounded ? 'p-2' : 'py-2 px-4') + ' text-sm'
  }})()

  const getClasses = () => {
    return `selection-none inline-flex gap-2 items-center cursor-pointer border font-medium shadow-sm transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-400 dark:disabled:text-slate-700 disabled:border-gray-400 dark:disabled:border-gray-400 disabled:hover:bg-opacity-100 ${variantClasses} ${sizeClasses} ${block ? 'w-full' : ''} ${rounded ? 'rounded-full' : 'rounded-md'} ${className}`;
  }
  // -----------------------------------

  return (
    <>
      { href ? 
        <Link className={getClasses()} 
          href={href}
          {...buttonProps}
          ref={ref}
        >
          {children}
        </Link>
      :
        <button className={getClasses()}
          {...buttonProps}
          ref={ref}
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

export default Button;
