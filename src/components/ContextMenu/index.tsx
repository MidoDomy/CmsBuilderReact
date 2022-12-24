import React, { useState } from 'react';

import ContextMenuItem from './ContextMenuItem';
import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode,
  className?: string
}

const ContextMenu: React.FC<Props> = ({ children, className }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className={className}>
      <div className='relative inline-flex'>
        <span className='py-1 px-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer'
          onClick={() => setToggle(!toggle)}
        >
          <Icon name='three-dots' size={18} />
        </span>

        <div className={`absolute top-full right-0 py-1 w-32 bg-white border-gray-200 shadow rounded ${toggle ? '' : 'hidden'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

ContextMenu.defaultProps = {
  className: ''
}

export default Object.assign(ContextMenu, {
  Item: ContextMenuItem
});
