import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string
}

const SidebarHeader: React.FC<Props> = ({children, className}) => {
  return (
    <div className={`py-2 px-5 text-base-dark ${className}`}>
      {children}
    </div>
  )
}

export default SidebarHeader;
