import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const TabsNav: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`selection-none flex ${className}`}> 
      {children}
    </div>
  )
}

TabsNav.defaultProps = {
  className: ''
}

export default TabsNav;
