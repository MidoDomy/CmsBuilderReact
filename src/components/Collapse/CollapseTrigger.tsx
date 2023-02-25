import React, { useContext } from 'react';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { CollapseContext } from 'contexts/Collapse';

type Props = {
  children?: React.ReactNode;
  className?: string;
  openClasses?: string;
  closeClasses?: string;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const CollapseTrigger: React.FC<Props> = ({ children, className, openClasses, closeClasses, openIcon, closeIcon }) => {
  const {state, setState} = useContext(CollapseContext);

  return (
    <button className={`flex items-center w-full p-1.5 rounded transition-colors select-none ${state ? openClasses : closeClasses} ${className}`} 
      onClick={() => setState(!state)}
    >
      <span className='flex-1 text-left'>{children}</span>
      {state ?
        (openIcon && openIcon)
        :
        (closeIcon && closeIcon)
      }
    </button>
  );
}

CollapseTrigger.defaultProps = {
  className: '',
  openClasses: 'bg-gray-50',
  closeClasses: 'hover:bg-gray-50',
  openIcon: <FiChevronUp size={16} />,
  closeIcon: <FiChevronDown size={16} />
}

export default CollapseTrigger;
