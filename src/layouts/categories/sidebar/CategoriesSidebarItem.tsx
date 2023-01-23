import React, { useState } from 'react';
import Link from 'next/link';

import Row from 'components/Row';
import Col from 'components/Col';
import Collapse from 'components/Collapse';
import Icon from 'components/Icon';

type Props = {
  subCategories?: Array<Object>,
  name: string
}

const CategoriesSidebarItem: React.FC<Props> = ({ subCategories, name }) => {
  const hasSubCategories = subCategories && subCategories.length;
  const [open, setOpen] = useState(false);

  return (
    <>
      {!hasSubCategories ? 
        <div className='px-4 py-2 hover:bg-gray-50 text-slate-900 cursor-pointer'>
          {name}
        </div>
        :
        <Collapse>
          <div className='px-4'>
            <Row align='center'>
              <Col className='py-1 hover:bg-gray-50 text-slate-900 cursor-pointer'
                fill
              >
                <Row align='center' gap={8}>
                  <Col>
                    {open ? 
                      <Icon name='folder-open' size={16} />
                      :
                      <Icon name='folder' size={16} />
                    }
                  </Col>

                  <Col fill>
                    <Link href='#'>{name}</Link>
                  </Col>
                </Row>
              </Col>

              <Col>
                <div onClick={() => setOpen(!open)}>
                  <Collapse.Trigger />
                </div>
              </Col>
            </Row>
          </div>
    
          <Collapse.Content>
            <ul className='pl-4 text-sm'>
              {subCategories.map((subCategory) => (
                <li key={subCategory.id}>
                  <CategoriesSidebarItem name={subCategory.name} subCategories={subCategory.subCategories}/>
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
