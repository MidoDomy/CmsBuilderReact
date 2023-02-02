import React from 'react';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  className?: string;
  link?: string;
  active?: boolean;
  variant?: 'danger' | 'default';
  onClick?: () => void;
}

const DropdownMenuItem: React.FC<Props> = ({ children, className, link, variant, onClick, ...props }) => {
  const variantClasses = variant == 'default' ? 'hover:bg-gray-50' : 'hover:bg-red-50 text-red-500'

  return (
    <>
      {link ?
        <Link className={`relative flex items-center gap-1 py-1.5 px-2 text-sm cursor-pointer select-none ${variantClasses} ${className}`} 
          href={link}
          {...props}
        >
          {children}
        </Link>
        :
        <div className={`relative flex items-center gap-1 py-1.5 px-2 text-sm cursor-pointer select-none ${variantClasses} ${className}`} 
          onClick={onClick}
          {...props}
        >
          {children}
        </div>
      }
    </>
  );
}

DropdownMenuItem.defaultProps = {
  className: '',
  variant: 'default'
}

export default DropdownMenuItem;
