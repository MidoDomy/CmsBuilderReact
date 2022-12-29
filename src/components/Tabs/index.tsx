import React, { useState } from 'react';

import { TabContext } from 'contexts/Tab';
import TabsNav from './TabsNav';
import TabsNavItem from './TabNavItem';
import TabsContent from './TabContent';

type Props = {
  children?: React.ReactNode
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [current, setCurrent] = useState('');

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
