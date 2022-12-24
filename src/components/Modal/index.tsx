import React, { useRef } from 'react';
import { FocusScope } from '@react-aria/focus';
import { Overlay, useModalOverlay } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';

import Button from 'components/Button';
import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode,
  className?: string,
  size?: 'sm' | 'md' | 'lg',
  headline?: string,
  isOpen: boolean,
  toggle: () => void
}

const Modal: React.FC<Props> = ({ children, className, size, headline, isOpen, toggle, ...props }) => {

  let ref = useRef<HTMLDivElement>(null);
  let { modalProps, underlayProps } = useModalOverlay(props, isOpen, ref);
  let { dialogProps, titleProps } = useDialog(props, ref);

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return 'max-w-xl'
    case 'lg':
      return 'max-w-6xl'
    default: 
      return 'max-w-3xl'
  }})()

  return (
    <>
      {isOpen &&
        <Overlay>
          <div className={`fixed inset-0 z-50 ${className}`}
            {...underlayProps}
          >
            {/* Overlay */}
            <div className='absolute inset-0 bg-gray-600 bg-opacity-30' 
              onClick={toggle}
            />

            {/* Modal */}
            <FocusScope contain autoFocus restoreFocus>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow w-full rounded-md ${sizeClasses}`}
                {...modalProps}
                {...dialogProps}
                {...props}
                ref={ref}
              >
                <div className='flex justify-between items-center py-4 px-6 border-b border-gray-200'>
                  {/* Header */}
                  {headline &&
                    <h3 className='text-xl' 
                      {...titleProps}
                    >
                      {headline}
                    </h3>
                  }

                  {/* Close button */}
                  <Button square
                    onPress={toggle}
                  >
                    <Icon name='x' />
                  </Button>
                </div>

                {/* Children content */}
                <div className='px-6 py-4'>
                  {children}
                </div>
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

export default Modal;
