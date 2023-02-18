import React from 'react';

import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';
import LayoutsEditSettingsSidebarComponents from './settings-sidebar/LayoutsEditSettingsSidebarComponents';
import LayoutsEditSettingsSidebarSettings from './settings-sidebar/LayoutsEditSettingsSidebarSettings';
import LayoutsEditSettingsSidebarStyles from './settings-sidebar/LayoutsEditSettingsSidebarStyles';

const LayoutsEditSettingsSidebar: React.FC = () => {
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
            <LayoutsEditSettingsSidebarComponents />
          </Tabs.Content>

          <Tabs.Content name='Settings'>
            <LayoutsEditSettingsSidebarSettings />
          </Tabs.Content>

          <Tabs.Content name='Styles'>
            <LayoutsEditSettingsSidebarStyles />
          </Tabs.Content>
        </Tabs>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default LayoutsEditSettingsSidebar;
