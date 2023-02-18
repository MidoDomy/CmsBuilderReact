import React, { useState } from 'react';

import Sidebar from 'components/Sidebar';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import CategoriesSidebarItem from './sidebar/CategoriesSidebarItem';
import Form from 'components/Form';

const CategoriesSidebar: React.FC = () => {
  const [categories, setCategories] = useState([
    {id: 0, name: 'Header navigation', subCategories: [
      {id: 1, name: 'Category 1', subCategories: [
        {id: 3, name: 'Sub Category', subCategories: []}
      ]},
      {id: 4, name: 'Category 2', subCategories: []}
    ]},
    {id: 2, name: 'Footer navigation', subCategories: []}
  ]);

  const [showFieldAddCategory, setShowFieldAddCategory] = useState(false);
  const [addCategoryName, setAddCategoryName] = useState('');

  const addCategory = () => {
    const category = {
      id: categories.length + 1,
      name: addCategoryName,
      subCategories: []
    }

    setCategories(prevCategories => [...prevCategories, category]);

    setShowFieldAddCategory(false);
    setAddCategoryName('');
  }

  return (
    <Sidebar className='w-80'>
      <Sidebar.Header className='pt-8'>
        <Row gapX={0}>
          <Col fill>
            <h3 className='font-medium'>Categories</h3>
          </Col>

          <Col>
            {/* Show add category */}
            <Button
              variant='ghost'
              size='sm'
              rounded
              onClick={() => setShowFieldAddCategory(!showFieldAddCategory)}
            >
              <Icon name='plus' size={16}/>
            </Button>
          </Col>
        </Row>
      </Sidebar.Header>

      <Sidebar.Body>
        {/* Add category */}
        {showFieldAddCategory &&
          <div className='mb-1'>
            <Form.InputGroup>
              <Form.Input className='flex-1'
                value={addCategoryName}
                placeholder='Enter category name...' 
                size='sm'
                onChange={(e: any) => setAddCategoryName(e.target.value)}
              />

              <Button 
                size='sm'
                disabled={addCategoryName.length == 0}
                onClick={addCategory}
              >
                Add
              </Button>
            </Form.InputGroup>
          </div>
        }

        {/* Categories */}
        <ul className='flex flex-col gap-1'>
          {categories.map((category) => (
            <li key={category.id}>
              <CategoriesSidebarItem 
                name={category.name} 
                subCategories={category.subCategories}
              />
            </li>
          ))}
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default CategoriesSidebar;
