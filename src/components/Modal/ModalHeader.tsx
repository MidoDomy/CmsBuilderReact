import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const ModalHeader: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`pt-5 pb-3 px-6 ${className}`}
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
