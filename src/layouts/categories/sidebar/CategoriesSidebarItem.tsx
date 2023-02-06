import React, { useState } from 'react';
import Link from 'next/link';

import Row from 'components/Row';
import Col from 'components/Col';
import Collapse from 'components/Collapse';
import Icon from 'components/Icon';
import Button from 'components/Button';
import CategoriesSidebarItemOptions from './CategoriesSidebarItemOptions';

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
  const active = false;

  return (
    <>
      {!hasSubCategories ? 
        <Row gapX={2}>
          <Col fill>
            {/* Name */}
            <Link className={`block py-1 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
              href='#'
            >
              {name}
            </Link>
          </Col>

          <Col>
            {/* Dropdown options */}
            <CategoriesSidebarItemOptions />
          </Col>
        </Row>
        :
        <Collapse>
          {/* Item */}
          <div>
            <Row gapX={2} align='center'>
              <Col fill>
                <Link className={`block py-1 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
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
                      {name}
                    </Col>
                  </Row>
                </Link>
              </Col>

              <Col>
                {/* Trigger */}
                <span onClick={() => setOpen(!open)}>
                  <Collapse.Trigger />
                </span>
              </Col>

              <Col>
                {/* Dropdown options */}
                <CategoriesSidebarItemOptions />
              </Col>
            </Row>
          </div>
    
          {/* Children */}
          <Collapse.Content>
            <div className='pl-2'>
              <ul className='pl-0.5 border-l'>
                {subCategories.map((subCategory) => (
                  <li key={subCategory.id}>
                    <CategoriesSidebarItem name={subCategory.name} subCategories={subCategory.subCategories}/>
                  </li>
                ))}
              </ul>
            </div>
          </Collapse.Content>
        </Collapse>
      }
    </>
  )
}

export default CategoriesSidebarItem;
