import React, {useRef} from 'react';
import Link from 'next/link';
import { useButton } from 'react-aria';

type Props = {
  children: React.ReactNode,
  className?: string;
  variant?: 'primary' | 'secondary' | 'default';
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
      return (outline ? 'bg-transparent' : 'bg-base-primary hover:bg-opacity-80') + ' border-base-primary hover:bg-base-primary'
    case 'secondary':
      return (outline ? 'bg-transparent' : 'bg-base-secondary hover:bg-opacity-80 text-base-light') + ' border-base-secondary hover:bg-base-secondary'
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
    return `transition-colors border-2 ${variantClasses} ${sizeClasses}${block ? ' w-full' : ''}${className ? ' ' + className : ''}`;
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
