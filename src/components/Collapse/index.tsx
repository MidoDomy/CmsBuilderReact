import React, { useState } from 'react';

import { CollapseContext } from 'contexts/Collapse';

import CollapseTrigger from './CollapseTrigger';
import CollapseContent from './CollapseContent';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const Collapse: React.FC<Props> = ({ children, className }) => {
  const [state, setState] = useState(false);

  return (
    <CollapseContext.Provider value={{state, setState}}>
      <div className={className}>
        {children}
      </div>
    </CollapseContext.Provider>
  );
}

Collapse.defaultProps = {
  className: ''
}

export default Object.assign(Collapse, {
  Trigger: CollapseTrigger,
  Content: CollapseContent
});
