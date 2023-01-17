import React, { useContext } from 'react';

import { CollapseContext } from 'contexts/Collapse';
import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode;
  className?: string;
  openClasses?: string;
  closeClasses?: string;
}

const CollapseTrigger: React.FC<Props> = ({ children, className, openClasses, closeClasses }) => {
  const {state, setState} = useContext(CollapseContext);

  return (
    <button className={`flex items-center w-full py-2 px-2 rounded transition-colors ${state ? openClasses : closeClasses} ${className}`} 
      onClick={() => setState(!state)}
    >
      <span className='flex-1 text-left text-sm'>{children}</span>
      {state ?
        <Icon name='arrow-head-up' size={16} />
        :
        <Icon name='arrow-head-down' size={16} />
      }
    </button>
  );
}

CollapseTrigger.defaultProps = {
  className: '',
  openClasses: 'bg-gray-50',
  closeClasses: 'hover:bg-gray-50'
}

export default CollapseTrigger;
