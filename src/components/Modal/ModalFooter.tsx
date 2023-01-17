import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const ModalFooter: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`py-3 px-6 bg-gray-50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

ModalFooter.defaultProps = {
  className: ''
}

export default ModalFooter;
