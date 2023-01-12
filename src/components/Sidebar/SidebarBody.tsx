import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string
}

const SidebarBody: React.FC<Props> = ({children, className}) => {
  return (
    <div className={`flex-1 py-5 ${className}`}>
      {children}
    </div>
  )
}

export default SidebarBody;
