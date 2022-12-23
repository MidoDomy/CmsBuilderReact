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
  href?: string;
}

const Button: React.FC<Props> = ({ children, className, variant, size, block, outline, square, href, ...props }) => {
  
  let ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  let { buttonProps } = useButton(props, ref);

  // Classes -----------------------------------
  const variantClasses = (() => {switch(variant) {
    case 'primary':
      return (outline ? 'bg-transparent' : 'bg-sky-500/90 dark:bg-sky-600/90') + ' border-sky-500 dark:border-sky-600 hover:bg-sky-500 dark:hover:bg-sky-600 text-white'
    case 'secondary':
      return (outline ? 'bg-transparent' : 'bg-base-secondary hover:bg-opacity-80 text-base-light') + ' border-base-secondary hover:bg-base-secondary'
    case 'ghost':
      return 'bg-gray-100 bg-opacity-0 border-transparent hover:bg-opacity-100 shadow-none'
    default: 
      return 'text-slate-700 dark:text-slate-200 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
  }})()

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return (square ? 'p-2' : 'py-1 px-2') + ' text-xs'
    case 'lg':
      return (square ? 'p-2' : 'py-2 px-4') + ' text-md'
    default: 
      return (square ? 'p-2' : 'py-2 px-4') + ' text-sm'
  }})()

  const getClasses = () => {
    return `inline-flex gap-2 items-center rounded-md border font-medium shadow-sm transition-colors ${variantClasses} ${sizeClasses}${block ? ' w-full' : ''}${className ? ' ' + className : ''}`;
  }
  // -----------------------------------

  return (
    <>
      { href ? 
        <Link className={getClasses()} 
          href={href}
          ref={ref}
          {...buttonProps}
        >
          {children}
        </Link>
      :
        <button className={getClasses()}
          ref={ref}
          {...buttonProps}
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
