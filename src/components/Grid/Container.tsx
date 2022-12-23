import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string;
  fluid?: boolean;
}

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`container max-w-7xl ${className ? className : ''}`} {...props}>
      {children}
    </div>
  );
}

export default Button;
