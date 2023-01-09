import React, { useState } from 'react';

import Sidebar from 'components/Sidebar';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Tabs from 'components/Tabs';
import DashboardSidebarOptions from 'layouts/dashboard/sidebar/DashboardSidebarOptions';
import DashboardSidebarWidgets from 'layouts/dashboard/sidebar/DashboardSidebarWidgets';

const DashboardSidebar: React.FC = () => {
  const [settings, setSettings] = useState(false);

  return (
    <div className={`relative transition-all ${settings ? 'w-72' : 'w-0'}`}>
      <Button className='absolute top-10 left-0 -translate-x-full w-10 border-r-0 border-gray-100 rounded-r-none bg-white shadow-sm'
        square
        onPress={() => setSettings(!settings)}
      >
        <Icon name='settings' className='' />
      </Button>

      <Sidebar>
        <Sidebar.Body>
          <Tabs active='Options'>
            <Tabs.Nav className='mb-2'>
              <Tabs.NavItem name='Options'>Options</Tabs.NavItem>
              <Tabs.NavItem name='Widgets'>Widgets</Tabs.NavItem>
            </Tabs.Nav>

            <Tabs.Content className='px-0.5' name='Options'>
              <DashboardSidebarOptions />
            </Tabs.Content>

            <Tabs.Content name='Widgets'>
              <DashboardSidebarWidgets />
            </Tabs.Content>
          </Tabs>
        </Sidebar.Body>
      </Sidebar>
    </div>
  )
}

export default DashboardSidebar;
