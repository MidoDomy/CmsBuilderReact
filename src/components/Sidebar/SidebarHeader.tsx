import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const SidebarHeader: React.FC<Props> = ({children, className}) => {
  return (
    <div className={`py-3 px-5 ${className}`}>
      {children}
    </div>
  )
}

SidebarHeader.defaultProps = {
  className: ''
}

export default SidebarHeader;
