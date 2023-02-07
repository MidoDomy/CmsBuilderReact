import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const ModalBody: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`py-4 px-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

ModalBody.defaultProps = {
  className: ''
}

export default ModalBody;
