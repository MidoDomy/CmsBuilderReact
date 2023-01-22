import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Group: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`m-2 ${className}`}
      {...props}
    > 
      {children}
    </div>
  )
}

Group.defaultProps = {
  className: ''
}

export default Group;
