import React from 'react';

import Sidebar from 'components/Sidebar';
import ComponentsNavigationSidebarItem from './ComponentsNavigationSidebarItem';

const ComponentsNavigationSidebarParts: React.FC = () => {
  const componentParts = [
    {id: 0, name: 'Container'},
    {id: 0, name: 'Icon'},
    {id: 0, name: 'Header'},
    {id: 0, name: 'Content'}
  ];

  return (
    <>
      <Sidebar.Header className='pt-8'>
        <h3 className='font-medium'>Parts</h3>
      </Sidebar.Header>

      <Sidebar.Body className='flex-shrink-0 !flex-auto'>
        <ul className='flex flex-col gap-1.5 overflow-auto'>
          {componentParts?.map(part => (
            <li key={part.id}>
              <ComponentsNavigationSidebarItem component={part} />
            </li>
          ))}
        </ul>
      </Sidebar.Body>
    </>
  );
}

export default ComponentsNavigationSidebarParts;
