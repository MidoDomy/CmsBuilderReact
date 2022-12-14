import React from 'react';

type Props = {
  children?: React.ReactNode,
  className?: string,
  toggle?: () => void
}

const ModalFooter: React.FC<Props> = ({ children, className,  toggle }) => {
  return (
    <div className={`flex py-4 px-6 border-t ${className}`}>
      {children}
    </div>
  );
}

export default ModalFooter;
