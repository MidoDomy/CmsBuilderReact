import React from 'react';

import Sidebar from 'components/Sidebar';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import ElementsNavigationSidebarItem from './navigation-sidebar/ElementsNavigationSidebarItem';

const ElementsNavigationSidebar: React.FC = () => {
  const elements = [
    {id: 0, name: 'Blog card'},
    {id: 1, name: 'Product'},
  ];

  return (
    <Sidebar className='w-72'>
      <Sidebar.Header className='pt-8'>
        <Row gapX={0}>
          <Col fill>
            <h3 className='font-medium'>Elements</h3>
          </Col>

          <Col>
            {/* Show add category */}
            <Button
              variant='ghost'
              size='sm'
              rounded
            >
              <Icon name='plus' size={16}/>
            </Button>
          </Col>
        </Row>
      </Sidebar.Header>

      <Sidebar.Body>
        <ul className='flex flex-col gap-1.5'>
          {elements?.map(element => (
            <li key={element.id}>
              <ElementsNavigationSidebarItem element={element} />
            </li>
          ))}
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default ElementsNavigationSidebar;
