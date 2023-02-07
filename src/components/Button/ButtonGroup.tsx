import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const ButtonGroup: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`flex [&>*:not(:last-child)]:border-r-0 [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:rounded-l-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

ButtonGroup.defaultProps = {
  className: ''
}

export default ButtonGroup;
