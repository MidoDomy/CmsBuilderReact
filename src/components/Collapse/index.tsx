import React from 'react';

import Toggle from 'contexts/Toggle/Toggle';
import CollapseTrigger from './CollapseTrigger';
import CollapseContent from './CollapseContent';

type Props = {
  children?: React.ReactNode
}

const Collapse: React.FC<Props> = ({ children }) => {
  return (
    <Toggle>
      <div>
        {children}
      </div>
    </Toggle>
  );
}

export default Object.assign(Collapse, {
  Trigger: CollapseTrigger,
  Content: CollapseContent
});
