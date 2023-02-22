import React from 'react';

import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';
import ComponentsSettingsSidebarStyles from './settings-sidebar/ComponentsSettingsSidebarStyles';
import ComponentsSettingsSidebarOptions from './settings-sidebar/ComponentsSettingsSidebarOptions';

const ComponentsSettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80 max-h-[calc(100vh_-_53px)] overflow-auto'>
      <Sidebar.Body>
        <Tabs active='styles'>
          <Tabs.Nav className='mb-3 text-sm'>
            <Tabs.NavItem name='options'>Options</Tabs.NavItem>
            <Tabs.NavItem name='styles'>Styles</Tabs.NavItem>
          </Tabs.Nav>

          <Tabs.Content name='options'>
            <ComponentsSettingsSidebarOptions />
          </Tabs.Content>

          <Tabs.Content name='styles'>
            <ComponentsSettingsSidebarStyles />
          </Tabs.Content>
        </Tabs>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default ComponentsSettingsSidebar;
