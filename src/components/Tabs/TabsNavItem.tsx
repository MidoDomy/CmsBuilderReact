import React, { useContext } from 'react';

import { TabContext } from 'contexts/Tab';

type Props = {
  children?: React.ReactNode;
  className?: string;
  activeClass?: string;
  name: string;
}

const TabsNavItem: React.FC<Props> = ({ children, className, activeClass, name }) => {
  const {current, setCurrent} = useContext(TabContext);

  return (
    <button className={`inline-flex items-center px-2.5 py-1.5 border-b-2 transition-colors ${current == name ? activeClass : 'border-b-gray-200 text-slate-500 hover:text-slate-900'} ${className}`} 
      onClick={() => setCurrent(name)}
    >
      {children}
    </button>
  );
}

TabsNavItem.defaultProps = {
  className: '',
  activeClass: 'border-b-sky-500 text-slate-900'
}

export default TabsNavItem;
