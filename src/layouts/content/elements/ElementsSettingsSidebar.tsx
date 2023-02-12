import React from 'react';

import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';

const ElementsSettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80'>
      <Sidebar.Body>
        <Tabs active='Options'>
          <Tabs.Nav className='mb-3 text-sm'>
            <Tabs.NavItem name='Components'>Components</Tabs.NavItem>
            <Tabs.NavItem name='Options'>Options</Tabs.NavItem>
            <Tabs.NavItem name='Styles'>Styles</Tabs.NavItem>
          </Tabs.Nav>

          <Tabs.Content name='Components'>
            Components
          </Tabs.Content>

          <Tabs.Content name='Options'>
            Options
          </Tabs.Content>

          <Tabs.Content name='Styles'>
            Styles
          </Tabs.Content>
        </Tabs>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default ElementsSettingsSidebar;
