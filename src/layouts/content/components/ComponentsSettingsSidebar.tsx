import React from 'react';

import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';
import StylesAlign from 'layouts/content/styles/StylesAlign';
import StylesSize from 'layouts/content/styles/StylesSize';
import StylesSpacing from 'layouts/content/styles/StylesSpacing';
import StylesTypography from 'layouts/content/styles/StylesTypography';
import StylesBackgrounds from 'layouts/content/styles/StylesBackgrounds';
import StylesBorders from 'layouts/content/styles/StylesBorders';

const ComponentsSettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80'>
      <Sidebar.Body>
        <Tabs active='Styles'>
          <Tabs.Nav className='mb-3 text-sm'>
            <Tabs.NavItem name='Options'>Options</Tabs.NavItem>
            <Tabs.NavItem name='Styles'>Styles</Tabs.NavItem>
          </Tabs.Nav>

          <Tabs.Content name='Options'>
            TODO: https://dev-oasis.atlassian.net/browse/CB-92
          </Tabs.Content>

          <Tabs.Content name='Styles'>
            <div className='flex flex-col gap-1.5'>
              <StylesAlign />
              <StylesSize />
              <StylesSpacing />
              <StylesTypography />
              <StylesBackgrounds />
              <StylesBorders />
            </div>
          </Tabs.Content>
        </Tabs>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default ComponentsSettingsSidebar;
