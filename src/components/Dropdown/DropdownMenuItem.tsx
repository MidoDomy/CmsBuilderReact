import React from 'react';
import Link from 'next/link';

import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode;
  className?: string;
  link?: string;
  active?: boolean;
  variant?: 'danger' | 'default';
  icon?: string;
  onClick?: () => void;
}

const DropdownMenuItem: React.FC<Props> = ({ children, className, link, variant, icon, onClick, ...props }) => {
  const variantClasses = variant == 'default' ? 'hover:bg-gray-50' : 'hover:bg-red-50 text-red-500'

  return (
    <>
      {link ?
        <Link className={`relative flex items-center gap-1.5 py-1.5 px-2 text-sm cursor-pointer select-none ${variantClasses} ${className}`} 
          href={link}
          {...props}
        >
          {icon && <Icon name={icon} size={15} />}
          {children}
        </Link>
        :
        <div className={`relative flex items-center gap-1.5 py-1.5 px-2 text-sm cursor-pointer select-none ${variantClasses} ${className}`} 
          onClick={onClick}
          {...props}
        >
          {icon && <Icon name={icon} size={15} />}
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
