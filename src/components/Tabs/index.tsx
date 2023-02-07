import React, { useState } from 'react';

import { TabsContext } from 'contexts/Tabs';
import TabsNav from './TabsNav';
import TabsNavItem from './TabsNavItem';
import TabsContent from './TabsContent';

type Props = {
  children?: React.ReactNode;
  className?: string;
  active: string;
}

const Tabs: React.FC<Props> = ({ children, className, active }) => {
  const [current, setCurrent] = useState(active ? active : '');

  return (
    <TabsContext.Provider value={{current, setCurrent}}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export default Object.assign(Tabs, {
  Nav: TabsNav,
  NavItem: TabsNavItem,
  Content: TabsContent
});
