import React, { useContext } from 'react';

import { TabContext } from 'contexts/Tab';

type Props = {
  children?: React.ReactNode,
  className?: string,
  name: string
}

const TabsNavItem: React.FC<Props> = ({ children, className, name }) => {
  const {current, setCurrent} = useContext(TabContext);

  return (
    <button className={`inline-flex items-center px-2.5 py-1.5 border-b-2 transition-colors ${current == name ? 'border-b-sky-500' : 'border-b-gray-200'} ${className}`} 
      onClick={() => setCurrent(name)}
    >
      {children}
    </button>
  );
}

TabsNavItem.defaultProps = {
  className: ''
}

export default TabsNavItem;
