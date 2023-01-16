import React, { useContext } from 'react';

import { CollapseContext } from 'contexts/Collapse';
import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode,
  className?: string;
}

const CollapseTrigger: React.FC<Props> = ({ children, className }) => {
  const {state, setState} = useContext(CollapseContext);

  return (
    <button className={`flex items-center py-2 px-2 hover:bg-gray-50 dark:hover:bg-gray-900 text-left transition-colors ${state ? 'bg-gray-50 dark:bg-gray-900' : ''} ${className}`} 
      onClick={() => setState(!state)}
    >
      <span className='flex-1'>{children}</span>
      {state ?
        <Icon name='arrow-head-up' size={16} />
        :
        <Icon name='arrow-head-right' size={16} />
      }
    </button>
  );
}

CollapseTrigger.defaultProps = {
  className: ''
}

export default CollapseTrigger;