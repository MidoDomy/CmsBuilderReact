import React, { useState } from 'react';
import Link from 'next/link';

import Row from 'components/Row';
import Col from 'components/Col';
import Collapse from 'components/Collapse';
import Icon from 'components/Icon';
import CategoriesSidebarItemDropdown from './CategoriesSidebarItemDropdown';

interface categoryItem {
  id: number; 
  name: string;
  subCategories: categoryItem[];
}

type Props = {
  subCategories?: categoryItem[];
  name: string;
}

const CategoriesSidebarItem: React.FC<Props> = ({ subCategories, name }) => {
  const hasSubCategories = subCategories && subCategories.length;
  const [open, setOpen] = useState(false);

  // TODO: Set active condition
  const active = name == 'Category 1';

  return (
    <>
      {!hasSubCategories ? 
        <Row gapX={2}>
          {/* Name */}
          <Col fill>
            <Link className={`block py-0.5 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
              href='#'
            >
              <span className='text-sm'>{name}</span>
            </Link>
          </Col>

          {/* Dropdown options */}
          <Col>
            <CategoriesSidebarItemDropdown />
          </Col>
        </Row>
        :
        <Collapse>
          {/* Item */}
          <div>
            <Row gapX={2} align='center'>
              <Col fill>
                <Link className={`block py-0.5 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
                  href='#'
                >
                  <Row gapX={6} align='center'>
                    {/* Icon */}
                    <Col>
                      {open ? 
                        <Icon name='folder-open' size={16} />
                        :
                        <Icon name='folder' size={16} />
                      }
                    </Col>

                    {/* Name */}
                    <Col fill>
                      <span className='text-sm'>{name}</span>
                    </Col>
                  </Row>
                </Link>
              </Col>

              {/* Trigger */}
              <Col>
                <span onClick={() => setOpen(!open)}>
                  <Collapse.Trigger />
                </span>
              </Col>

              {/* Dropdown options */}
              <Col>
                <CategoriesSidebarItemDropdown />
              </Col>
            </Row>
          </div>
    
          {/* Children */}
          <Collapse.Content className='pt-1 pb-1 pl-2'>
            <ul className='flex flex-col gap-1 pl-0.5 border-l'>
              {subCategories.map((subCategory) => (
                <li key={subCategory.id}>
                  <CategoriesSidebarItem 
                    name={subCategory.name} 
                    subCategories={subCategory.subCategories}
                  />
                </li>
              ))}
            </ul>
          </Collapse.Content>
        </Collapse>
      }
    </>
  )
}

export default CategoriesSidebarItem;
