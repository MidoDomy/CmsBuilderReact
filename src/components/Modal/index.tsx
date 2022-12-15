import React from 'react';

import Portal from 'hocs/Portal';

import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

type Props = {
  children?: React.ReactNode,
  className?: string,
  size?: 'sm' | 'md' | 'lg',
  isOpen: boolean,
  toggle: () => void
}

const Modal: React.FC<Props> = ({ children, className, size, isOpen, toggle }) => {

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return 'max-w-xl'
    case 'lg':
      return 'max-w-6xl'
    default: 
      return 'max-w-3xl'
  }})()

  return (
    <Portal to='#mainLayout'>
      {isOpen && 
        <div className={`fixed inset-0 ${className}`}>
          {/* Overlay */}
          <div className='absolute inset-0 bg-base-dark bg-opacity-30' onClick={toggle}></div>

          {/* Modal */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-white text-base-dark w-full rounded-md ${sizeClasses}`}>
            {children}
          </div>
        </div>
      }
    </Portal>
  );
}

Modal.defaultProps = {
  size: 'md'
}

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
});
