import React from 'react';

import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';
import LayoutsEditSettingsSidebarComponents from './settings-sidebar/LayoutsEditSettingsSidebarComponents';
import LayoutsEditSettingsSidebarOptions from './settings-sidebar/LayoutsEditSettingsSidebarOptions';
import LayoutsEditSettingsSidebarStyles from './settings-sidebar/LayoutsEditSettingsSidebarStyles';

const LayoutsEditSettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80'>
      <Sidebar.Body>
        <Tabs active='options'>
          <Tabs.Nav className='mb-3 text-sm'>
            <Tabs.NavItem name='components'>Comp./Elem.</Tabs.NavItem>
            <Tabs.NavItem name='options'>Options</Tabs.NavItem>
            <Tabs.NavItem name='styles'>Styles</Tabs.NavItem>
          </Tabs.Nav>

          <Tabs.Content name='components'>
            <LayoutsEditSettingsSidebarComponents />
          </Tabs.Content>

          <Tabs.Content name='options'>
            <LayoutsEditSettingsSidebarOptions />
          </Tabs.Content>

          <Tabs.Content name='styles'>
            <LayoutsEditSettingsSidebarStyles />
          </Tabs.Content>
        </Tabs>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default LayoutsEditSettingsSidebar;
