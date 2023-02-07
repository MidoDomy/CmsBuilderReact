import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const SidebarBody: React.FC<Props> = ({children, className}) => {
  return (
    <div className={`flex-1 p-3 ${className}`}>
      {children}
    </div>
  )
}

SidebarBody.defaultProps = {
  className: ''
}

export default SidebarBody;
