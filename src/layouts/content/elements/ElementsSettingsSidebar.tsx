import React from 'react';

import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';
import ElementsSettingsSidebarComponents from './settings-sidebar/ElementsSettingsSidebarComponents';
import ElementsSettingsSidebarOptions from './settings-sidebar/ElementsSettingsSidebarOptions';
import ElementsSettingsSidebarStyles from './settings-sidebar/ElementsSettingsSidebarStyles';

const ElementsSettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80'>
      <Sidebar.Body>
        <Tabs active='options'>
          <Tabs.Nav className='mb-3 text-sm'>
            <Tabs.NavItem name='components'>Components</Tabs.NavItem>
            <Tabs.NavItem name='options'>Options</Tabs.NavItem>
            <Tabs.NavItem name='styles'>Styles</Tabs.NavItem>
          </Tabs.Nav>

          <Tabs.Content name='components'>
            <ElementsSettingsSidebarComponents />
          </Tabs.Content>

          <Tabs.Content name='options'>
            <ElementsSettingsSidebarOptions />
          </Tabs.Content>

          <Tabs.Content name='styles'>
            <ElementsSettingsSidebarStyles />
          </Tabs.Content>
        </Tabs>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default ElementsSettingsSidebar;
