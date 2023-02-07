import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const ModalHeader: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`py-3 px-6 border-b border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

ModalHeader.defaultProps = {
  className: ''
}

export default ModalHeader;
