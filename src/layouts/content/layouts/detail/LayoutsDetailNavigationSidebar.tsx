import React from 'react';

import Sidebar from 'components/Sidebar';
import LayoutsDetailNavigationSidebarItem from './navigation-sidebar/LayoutsDetailNavigationSidebarItem';

const LayoutsDetailNavigationSidebar: React.FC = () => {
  const content = [
    {
      id: 0,
      name: 'Section landing',
      parts: [
        {
          id: 1,
          name: 'Small text',
          parts: []
        },
        {
          id: 2,
          name: 'Headline',
          parts: []
        },
        {
          id: 3,
          name: 'Description',
          parts: []
        },
        {
          id: 4,
          name: 'Button/Link',
          parts: []
        }
      ]
    },
    {
      id: 5,
      name: 'Section logos',
      parts: [
        {
          id: 6,
          name: 'Small text',
          parts: []
        },
        {
          id: 7,
          name: 'Headline',
          parts: []
        },
        {
          id: 8,
          name: 'Description',
          parts: []
        },
        {
          id: 10,
          name: 'Logo card',
          parts: [
            {
              id: 16,
              name: 'Logo image',
              parts: []
            }
          ]
        },
        {
          id: 11,
          name: 'Logo card',
          parts: [
            {
              id: 17,
              name: 'Logo image',
              parts: []
            }
          ]
        },
        {
          id: 12,
          name: 'Logo card',
          parts: [
            {
              id: 18,
              name: 'Logo image',
              parts: []
            }
          ]
        }
      ]
    },
    {
      id: 22,
      name: 'Section blogs',
      parts: [
        {
          id: 23,
          name: 'Blog card',
          parts: [
            {
              id: 24,
              name: 'Image',
              parts: []
            },
            {
              id: 25,
              name: 'Name',
              parts: []
            },
            {
              id: 26,
              name: 'Description',
              parts: []
            }
          ]
        },
        {
          id: 27,
          name: 'Blog card',
          parts: [
            {
              id: 28,
              name: 'Image',
              parts: []
            },
            {
              id: 29,
              name: 'Name',
              parts: []
            },
            {
              id: 30,
              name: 'Description',
              parts: []
            }
          ]
        }
      ]
    }
  ];

  return (
    <Sidebar className='w-72'>
      <Sidebar.Header className='pt-8'>
        <h3 className='font-medium'>Content</h3>
      </Sidebar.Header>

      <Sidebar.Body>
        <ul className='text-sm'>
          {content?.map(item => (
            <li className='mb-1 last:mb-0' 
              key={item.id}
            >
              <LayoutsDetailNavigationSidebarItem item={item} />
            </li>
          ))}
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default LayoutsDetailNavigationSidebar;
