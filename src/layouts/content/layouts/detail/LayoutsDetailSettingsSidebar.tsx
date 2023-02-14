import React from 'react';

import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';
import LayoutsDetailSettingsSidebarComponents from './settings-sidebar/LayoutsDetailSettingsSidebarComponents';
import LayoutsDetailSettingsSidebarSettings from './settings-sidebar/LayoutsDetailSettingsSidebarSettings';
import LayoutsDetailSettingsSidebarStyles from './settings-sidebar/LayoutsDetailSettingsSidebarStyles';

const LayoutsDetailSettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80'>
      <Sidebar.Body>
        <Tabs active='Settings'>
          <Tabs.Nav className='mb-3 text-sm'>
            <Tabs.NavItem name='Components'>Comp./Elem.</Tabs.NavItem>
            <Tabs.NavItem name='Settings'>Settings</Tabs.NavItem>
            <Tabs.NavItem name='Styles'>Styles</Tabs.NavItem>
          </Tabs.Nav>

          <Tabs.Content name='Components'>
            <LayoutsDetailSettingsSidebarComponents />
          </Tabs.Content>

          <Tabs.Content name='Settings'>
            <LayoutsDetailSettingsSidebarSettings />
          </Tabs.Content>

          <Tabs.Content name='Styles'>
            <LayoutsDetailSettingsSidebarStyles />
          </Tabs.Content>
        </Tabs>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default LayoutsDetailSettingsSidebar;
