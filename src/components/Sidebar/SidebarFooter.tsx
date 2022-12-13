import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string
}

const SidebarFooter: React.FC<Props> = ({children, className}) => {
  return (
    <div className={`py-2 px-5 ${className}`}>
      {children}
    </div>
  )
}

export default SidebarFooter;
