import React, { useContext } from 'react';

import { TabContext } from 'contexts/Tab';

type Props = {
  children?: React.ReactNode,
  className?: string,
  name: string
}

const TabContent: React.FC<Props> = ({ children, className, name }) => {
  const {current} = useContext(TabContext);

  return (
    <div className={`pt-2 ${className} ${current == name ? '' : 'hidden'}`}>
      {children}
    </div>
  );
}

TabContent.defaultProps = {
  className: 'py-0.5'
}

export default TabContent;
