import React from 'react';

import Sidebar from 'components/Sidebar';
import ComponentsNavigationSidebarComponents from './navigation-sidebar/ComponentsNavigationSidebarComponents';
import ComponentsNavigationSidebarParts from './navigation-sidebar/ComponentsNavigationSidebarParts';

const ComponentsNavigationSidebar: React.FC = () => {
  return (
    <Sidebar className='w-72 max-h-[calc(100vh_-_53px)]'>
      <ComponentsNavigationSidebarComponents />
      <ComponentsNavigationSidebarParts />
    </Sidebar>
  )
}

export default ComponentsNavigationSidebar;
