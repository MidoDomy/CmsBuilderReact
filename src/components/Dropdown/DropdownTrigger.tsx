import React, { useContext } from 'react';

import { DropdownContext } from 'contexts/Dropdown';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const DropdownTrigger: React.FC<Props> = ({ children, className }) => {
  const {state, setState} = useContext(DropdownContext);

  return (
    <span className={`cursor-pointer ${className}`}
      onClick={() => setState(!state)}
    >
      {children}
    </span>
  );
}

DropdownTrigger.defaultProps = {
  className: ''
}

export default DropdownTrigger;
