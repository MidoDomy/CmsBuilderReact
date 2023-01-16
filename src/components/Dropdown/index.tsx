import React, { useState } from 'react';

import { DropdownContext } from 'contexts/Dropdown';

import DropdownTrigger from './DropdownTrigger';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';

type Props = {
  children?: React.ReactNode;
  position?: 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right';
}

const Dropdown: React.FC<Props> = ({ children, position }) => {
  const [state, setState] = useState(false);

  return (
    <DropdownContext.Provider value={{state, setState, position}}>
      <div className='relative'>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.defaultProps = {
  position: 'bottom right'
}

export default Object.assign(Dropdown, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  MenuItem: DropdownMenuItem
});
