import React, { useContext } from 'react';

import { ToggleContext } from 'contexts/Toggle/Context';

type Props = {
  children?: React.ReactNode,
  className?: string
}

const CollapseContent: React.FC<Props> = ({ children, className }) => {
  const {state} = useContext(ToggleContext);

  return (
    <div className={`${className} ${state ? '' : 'hidden'}`}>
      {children}
    </div>
  );
}

CollapseContent.defaultProps = {
  className: 'py-0.5'
}

export default CollapseContent;
