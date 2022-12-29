import React, { useContext } from 'react';

import { CollapseContext } from 'contexts/Collapse';

type Props = {
  children?: React.ReactNode,
  className?: string
}

const CollapseContent: React.FC<Props> = ({ children, className }) => {
  const {state} = useContext(CollapseContext);

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
