import React, { useState } from 'react';

import { CollapseContext } from 'contexts/Collapse';

import CollapseTrigger from './CollapseTrigger';
import CollapseContent from './CollapseContent';

type Props = {
  children?: React.ReactNode
}

const Collapse: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <CollapseContext.Provider value={{state, setState}}>
      <div>
        {children}
      </div>
    </CollapseContext.Provider>
  );
}

export default Object.assign(Collapse, {
  Trigger: CollapseTrigger,
  Content: CollapseContent
});
