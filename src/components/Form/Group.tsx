import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Group: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`mb-4 last:mb-0 ${className}`}
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
