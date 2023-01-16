import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const TabsNav: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`selection-none flex ${className}`}
      {...props}
    > 
      {children}
    </div>
  )
}

TabsNav.defaultProps = {
  className: ''
}

export default TabsNav;
