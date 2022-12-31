import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string
}

const SidebarHeader: React.FC<Props> = ({children, className}) => {
  return (
    <div className={`pt-3 px-5 text-base-dark ${className}`}>
      {children}
    </div>
  )
}

export default SidebarHeader;
