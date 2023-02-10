import React from 'react';

import Sidebar from 'components/Sidebar';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import CategoriesSidebarItem from './sidebar/CategoriesSidebarItem';

const CategoriesSidebar: React.FC = () => {
  const categories = [
    {
      id: 0,
      name: 'Category 1',
      subCategories: [
        {
          id: 1,
          name: 'SubCategory',
          subCategories: [
            {
              id: 3,
              name: 'SubSubCategory',
              subCategories: []
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Category 2',
      subCategories: []
    }
  ]

  return (
    <Sidebar className='w-80'>
      <Sidebar.Header className='pt-8'>
        <Row>
          <Col fill>
            <h3 className='font-medium'>Categories</h3>
          </Col>

          <Col>
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
        <ul className='text-sm'>
          {categories.map((category) => (
            <li className='mb-1 last:mb-0' 
              key={category.id}
            >
              <CategoriesSidebarItem name={category.name} subCategories={category.subCategories}/>
            </li>
          ))}
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default CategoriesSidebar;
