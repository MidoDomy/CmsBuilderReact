import React from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode,
  className?: string,
  headline?: string,
  toggle?: () => void
}

const ModalHeader: React.FC<Props> = ({ children, className, headline, toggle }) => {
  return (
    <div className={`flex items-center py-4 px-6 border-b border-base-light ${className}`}>
      <div className='flex-1 text-xl'>
        {headline ? headline : children}
      </div>

      <Button className='flex-grow-0 rounded-full leading-none' 
        square
        onClick={toggle}
      >
        <Icon name='x' />
      </Button>
    </div>
  );
}

export default ModalHeader;
