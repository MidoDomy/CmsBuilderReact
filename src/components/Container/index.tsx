import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string;
  fluid?: boolean;
}

const Container: React.FC<Props> = ({ children, className, fluid, ...props }) => {
  return (
    <div className={`w-full mx-auto px-4 ${fluid ? '' : 'max-w-7xl' } ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: ''
}

export default Container;
