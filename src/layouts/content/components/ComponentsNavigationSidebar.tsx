import React from 'react';

import Sidebar from 'components/Sidebar';
import Collapse from 'components/Collapse';
import ComponentsNavigationSidebarItem from './navigation-sidebar/ComponentsNavigationSidebarItem';

const ComponentsNavigationSidebar: React.FC = () => {
  const componentsGroup =[
    {id: 0, name: 'Basic', components: [
      {id: 10, name: 'Alert'},
      {id: 11, name: 'Avatar'},
      {id: 12, name: 'Badge'},
      {id: 13, name: 'Breadcrumbs'},
      {id: 14, name: 'Button'},
      {id: 15, name: 'Cards'},
      {id: 16, name: 'Collapse'},
      {id: 17, name: 'Dropdown'},
      {id: 18, name: 'Lists'},
      {id: 19, name: 'Modal'},
      {id: 20, name: 'Offcanvas'},
      {id: 21, name: 'Pagination'},
      {id: 22, name: 'Table'},
      {id: 23, name: 'Tabs'},
      {id: 24, name: 'Tooltip'}
    ]},
    {id: 1, name: 'Media', components: [
      {id: 10, name: 'Image'},
      {id: 11, name: 'Image gallery'},
      {id: 12, name: 'Audio'},
      {id: 13, name: 'Image pin'},
      {id: 14, name: 'Video'}
    ]},
    {id: 2, name: 'Form', components: [
      {id: 10, name: 'Label'},
      {id: 11, name: 'Input'},
      {id: 12, name: 'Select'},
      {id: 13, name: 'Checkbox'},
      {id: 14, name: 'Radio'},
      {id: 15, name: 'Switch'},
      {id: 16, name: 'Range'},
      {id: 17, name: 'File input'}
    ]}
  ];

  const componentParts = [
    {id: 0, name: 'Container'},
    {id: 0, name: 'Icon'},
    {id: 0, name: 'Header'},
    {id: 0, name: 'Content'}
  ];

  return (
    <Sidebar className='w-72 max-h-[calc(100vh_-_53px)]'>
      <Sidebar.Header className='pt-8'>
        <h3 className='font-medium'>Components</h3>
      </Sidebar.Header>

      <Sidebar.Body className='border-b overflow-auto'>
        <div className='flex flex-col gap-3'>
          {componentsGroup?.map(group => 
            <Collapse key={group.id} 
              active={group.id == 0}
            >
              <Collapse.Trigger className='bg-transparent hover:bg-gray-50'>
                <div className='font-medium text-sm'>{group.name}</div>
              </Collapse.Trigger>

              <Collapse.Content>
                <ul className='flex flex-col gap-1.5'>
                  {group.components?.map(component => (
                    <li key={component.id}>
                      <ComponentsNavigationSidebarItem component={component} />
                    </li>
                  ))}
                </ul>
              </Collapse.Content>
            </Collapse>
          )}
        </div>
      </Sidebar.Body>

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
    </Sidebar>
  )
}

export default ComponentsNavigationSidebar;
