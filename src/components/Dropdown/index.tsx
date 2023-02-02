import React, { useState } from 'react';

import { DropdownContext } from 'contexts/Dropdown';

import DropdownTrigger from './DropdownTrigger';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';

type Props = {
  children?: React.ReactNode;
  className?: string;
  openClasses?: string;
  closedClasses?: string;
  position?: 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right';
}

const Dropdown: React.FC<Props> = ({ children, className, openClasses, closedClasses, position }) => {
  const [state, setState] = useState(false);

  return (
    <DropdownContext.Provider value={{state, setState, position}}>
      <div className={`relative ${state ? openClasses : closedClasses} ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.defaultProps = {
  className: '',
  openClasses: '',
  closedClasses: '',
  position: 'bottom right'
}

export default Object.assign(Dropdown, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  MenuItem: DropdownMenuItem
});
