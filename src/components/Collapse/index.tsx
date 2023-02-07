import React, { useState } from 'react';

import { CollapseContext } from 'contexts/Collapse';

import CollapseTrigger from './CollapseTrigger';
import CollapseContent from './CollapseContent';

type Props = {
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
}

const Collapse: React.FC<Props> = ({ children, className, active }) => {
  const [state, setState] = useState(active);

  return (
    <CollapseContext.Provider value={{state, setState}}>
      <div className={className}>
        {children}
      </div>
    </CollapseContext.Provider>
  );
}

Collapse.defaultProps = {
  className: '',
  active: false
}

export default Object.assign(Collapse, {
  Trigger: CollapseTrigger,
  Content: CollapseContent
});
