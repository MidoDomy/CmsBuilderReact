import React from 'react';
import { FocusScope } from '@react-aria/focus';
import { Overlay } from '@react-aria/overlays';

import Button from 'components/Button';
import Icon from 'components/Icon';
import ModalTitle from './ModalTitle';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isOpen: boolean;
  showClose?: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, className, size, isOpen, showClose, onClose, ...props }) => {

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return 'max-w-lg'
    case 'lg':
      return 'max-w-6xl'
    default: 
      return 'max-w-2xl'
  }})()

  return (
    <>
      {isOpen &&
        <Overlay>
          <div className={`fixed inset-0 z-50 ${className}`}>
            {/* Overlay */}
            <div className='absolute inset-0 bg-gray-600 bg-opacity-30' 
              onClick={onClose}
            />

            {/* Modal */}
            <FocusScope contain autoFocus restoreFocus>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden bg-white shadow rounded-md ${sizeClasses}`}
                {...props}
              >
                {showClose &&
                  <Button className='absolute top-4 right-6'
                    variant='ghost'
                    size='sm'
                    rounded
                    onClick={onClose}
                  >
                    <Icon name='x' size={18} />
                  </Button>
                }

                {children}
              </div>
            </FocusScope>
          </div>
        </Overlay>
      }
    </>
  );
}

Modal.defaultProps = {
  className: '',
  size: 'md'
}

export default Object.assign(Modal, {
  Title: ModalTitle,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
});
