import React from 'react';

import Sidebar from 'components/Sidebar';
import CategoriesSidebarItem from './sidebar/CategoriesSidebarItem';

const CategoriesSidebar: React.FC = () => {
  const categories = [
    {
      id: 0,
      name: 'Category One',
      subCategories: [
        {
          id: 1,
          name: 'SubCategory One',
          subCategories: []
        }
      ]
    },
    {
      id: 2,
      name: 'Category Two',
      subCategories: []
    }
  ]

  return (
    <Sidebar className='w-72'>
      <Sidebar.Header>
        <h4 className='font-semibold text-lg text-slate-900'>Categories</h4>
      </Sidebar.Header>

      <Sidebar.Body className='px-0'>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <CategoriesSidebarItem name={category.name} subCategories={category.subCategories}/>
            </li>
          ))}
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default CategoriesSidebar;
