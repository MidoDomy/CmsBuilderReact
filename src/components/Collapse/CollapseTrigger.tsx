import React, { useContext } from 'react';

import { CollapseContext } from 'contexts/Collapse';
import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode;
  className?: string;
  openClasses?: string;
  closeClasses?: string;
  openIcon?: string;
  closeIcon?: string;
}

const CollapseTrigger: React.FC<Props> = ({ children, className, openClasses, closeClasses, openIcon, closeIcon }) => {
  const {state, setState} = useContext(CollapseContext);

  return (
    <button className={`flex items-center w-full py-2 px-2 rounded transition-colors ${state ? openClasses : closeClasses} ${className}`} 
      onClick={() => setState(!state)}
    >
      <span className='flex-1 text-left'>{children}</span>
      {state ?
        <Icon name={openIcon} size={16} />
        :
        <Icon name={closeIcon} size={16} />
      }
    </button>
  );
}

CollapseTrigger.defaultProps = {
  className: '',
  openClasses: 'bg-gray-50',
  closeClasses: 'hover:bg-gray-50',
  openIcon: 'arrow-head-up',
  closeIcon: 'arrow-head-down'
}

export default CollapseTrigger;
