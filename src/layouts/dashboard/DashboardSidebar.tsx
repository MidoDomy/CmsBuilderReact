import React, { useState } from 'react';

import { FiSettings } from 'react-icons/fi';

import Sidebar from 'components/Sidebar';
import Button from 'components/Button';
import Tabs from 'components/Tabs';
import DashboardSidebarSettings from 'layouts/dashboard/sidebar/DashboardSidebarSettings';
import DashboardSidebarWidgets from 'layouts/dashboard/sidebar/DashboardSidebarWidgets';

const DashboardSidebar: React.FC = () => {
  const [settings, setSettings] = useState(false);

  return (
    <div className={`relative transition-all ${settings ? 'w-80' : 'w-0'}`}>
      <Button className='absolute top-11 left-0 -translate-x-full border-r-0 rounded-r-none shadow-none'
        square
        onClick={() => setSettings(!settings)}
      >
        <FiSettings size={20} />
      </Button>

      <Sidebar className='h-[calc(100vh_-_53px)] overflow-x-hidden overflow-y-auto'>
        <Sidebar.Body>
          <Tabs active='Settings'>
            <Tabs.Nav className='mb-2 text-sm'>
              <Tabs.NavItem name='Settings'>Settings</Tabs.NavItem>
              <Tabs.NavItem name='Widgets'>Widgets</Tabs.NavItem>
            </Tabs.Nav>

            <Tabs.Content className='px-0.5' name='Settings'>
              <DashboardSidebarSettings />
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
