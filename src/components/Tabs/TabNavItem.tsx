import React, { useContext } from 'react';

import { TabContext } from 'contexts/Tab';
import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode,
  className?: string,
  name: string
}

const TabNavItem: React.FC<Props> = ({ children, className, name }) => {
  const {current, setCurrent} = useContext(TabContext);

  return (
    <button className={`flex items-center py-1 px-3 rounded-3xl transition-colors ${current == name ? 'bg-sky-500 text-white hover:bg-sky-500 hover:text-white' : 'hover:bg-sky-50 dark:hover:bg-sky-900 hover:text-sky-500 dark:hover:text-white'} ${className}`} 
      onClick={() => setCurrent(name)}
    >
      {children}
    </button>
  );
}

TabNavItem.defaultProps = {
  className: ''
}

export default TabNavItem;
