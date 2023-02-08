import React from 'react';

import Sidebar from 'components/Sidebar';
import ComponentsNavigationSidebarItem from './navigation-sidebar/ComponentsNavigationSidebarItem';

const ComponentsNavigationSidebar: React.FC = () => {
  const components = [
    {
      id: 0,
      name: 'Button',
      parts: []
    },
    {
      id: 1,
      name: 'Image',
      parts: []
    },
    {
      id: 2,
      name: 'Dropdown',
      parts: []
    },
    {
      id: 3,
      name: 'Collapse',
      parts: ['Trigger', 'Content']
    },
    {
      id: 4,
      name: 'Modal',
      parts: ['Header', 'Body', 'Footer']
    }
  ];

  return (
    <Sidebar className='w-72'>
      <Sidebar.Header className='pt-8'>
        <h3 className='font-medium'>Components</h3>
      </Sidebar.Header>

      <Sidebar.Body>
        <ul className='text-sm'>
          {components?.map(component => (
            <li className='mb-1 last:mb-0' 
              key={component.id}
            >
              <ComponentsNavigationSidebarItem component={component} />
            </li>
          ))}
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default ComponentsNavigationSidebar;
