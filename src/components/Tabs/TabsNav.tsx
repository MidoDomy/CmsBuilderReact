import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const TabsNav: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`select-none flex border-b-2 border-gray-200 ${className}`}> 
      {children}
    </div>
  )
}

TabsNav.defaultProps = {
  className: ''
}

export default TabsNav;
