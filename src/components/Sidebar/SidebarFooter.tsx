import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const SidebarFooter: React.FC<Props> = ({children, className}) => {
  return (
    <div className={`py-3 px-5 ${className}`}>
      {children}
    </div>
  )
}

SidebarFooter.defaultProps = {
  className: ''
}

export default SidebarFooter;
