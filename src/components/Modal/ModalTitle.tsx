import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const ModalTitle: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <h5 className={`text-lg font-medium ${className}`}
      {...props}
    >
      {children}
    </h5>
  );
}

ModalTitle.defaultProps = {
  className: ''
}

export default ModalTitle;
