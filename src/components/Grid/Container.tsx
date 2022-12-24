import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string;
  fluid?: boolean;
}

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`container max-w-7xl ${className}`} {...props}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: ''
}

export default Container;
