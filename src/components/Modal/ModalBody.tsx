import React from 'react';

type Props = {
  children?: React.ReactNode,
  className?: string
}

const ModalBody: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

export default ModalBody;
