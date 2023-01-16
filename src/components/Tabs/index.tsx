import React, { useState } from 'react';

import { TabContext } from 'contexts/Tab';
import TabsNav from './TabsNav';
import TabsNavItem from './TabsNavItem';
import TabsContent from './TabsContent';

type Props = {
  children?: React.ReactNode,
  active: string
}

const Tabs: React.FC<Props> = ({ children, active }) => {
  const [current, setCurrent] = useState(active ? active : '');

  return (
    <TabContext.Provider value={{current, setCurrent}}>
      <div>
        {children}
      </div>
    </TabContext.Provider>
  );
}

export default Object.assign(Tabs, {
  Nav: TabsNav,
  NavItem: TabsNavItem,
  Content: TabsContent
});
