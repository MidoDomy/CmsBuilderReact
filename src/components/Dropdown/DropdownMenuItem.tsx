import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  active?: Boolean;
}

const DropdownMenuItem: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`relative flex items-center gap-1 py-1.5 px-2 text-sm hover:bg-gray-50 cursor-pointer select-none ${className}`} {...props}>
      {children}
    </div>
  );
}

DropdownMenuItem.defaultProps = {
  className: ''
}

export default DropdownMenuItem;
