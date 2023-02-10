import React from 'react';

import Sidebar from 'components/Sidebar';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import ElementsNavigationSidebarItem from './navigation-sidebar/ElementsNavigationSidebarItem';

const ElementsNavigationSidebar: React.FC = () => {
  const elements = [
    {
      id: 0,
      name: 'Blog card',
      parts: [
        {
          id: 1,
          name: 'Image',
          parts: []
        },
        {
          id: 2,
          name: 'Name',
          parts: []
        },
        {
          id: 3,
          name: 'Description',
          parts: []
        }
      ]
    },
    {
      id: 100,
      name: 'Product',
      parts: []
    }
  ];

  return (
    <Sidebar className='w-72'>
      <Sidebar.Header className='pt-8'>
        <Row justify='between' align='center'>
          <Col>
            <h3 className='font-medium'>Elements</h3>
          </Col>

          <Col>
            <Row gapX={8}>
              <Col>
                <Button size='sm' rounded>
                  <Icon name='search' size={14} />
                </Button>
              </Col>

              <Col>
                <Button size='sm' rounded>
                  <Icon name='plus' size={14} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Sidebar.Header>

      <Sidebar.Body>
        <ul className='text-sm'>
          {elements?.map(element => (
            <li className='mb-1 last:mb-0' 
              key={element.id}
            >
              <ElementsNavigationSidebarItem element={element} />
            </li>
          ))}
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default ElementsNavigationSidebar;
