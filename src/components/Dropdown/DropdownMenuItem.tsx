import React from 'react';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  className?: string;
  link?: string;
  active?: boolean;
}

const DropdownMenuItem: React.FC<Props> = ({ children, className, link, ...props }) => {
  return (
    <>
      {link ?
        <Link className={`relative flex items-center gap-1 py-1.5 px-2 text-sm hover:bg-gray-50 cursor-pointer select-none ${className}`} 
          href={link}
          {...props}
        >
          {children}
        </Link>
        :
        <div className={`relative flex items-center gap-1 py-1.5 px-2 text-sm hover:bg-gray-50 cursor-pointer select-none ${className}`} {...props}>
          {children}
        </div>
      }
    </>
  );
}

DropdownMenuItem.defaultProps = {
  className: ''
}

export default DropdownMenuItem;
