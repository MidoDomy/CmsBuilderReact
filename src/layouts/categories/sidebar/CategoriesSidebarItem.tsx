import React, { useState } from 'react';
import Link from 'next/link';

import Flex from 'components/Structuring/Flex';
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
          <Flex className='px-4 py-1 hover:bg-gray-50 text-slate-900 cursor-pointer'
            align='center'
          >
            <Flex className='flex-1'
              align='center'
            >
              <div className='mr-2'>
                {open ? 
                  <Icon name='folder-open' size={16} />
                  :
                  <Icon name='folder' size={16} />
                }
              </div>

              <Link href='#'>{name}</Link>
            </Flex>
    
            <div onClick={() => setOpen(!open)}>
              <Collapse.Trigger />
            </div>
          </Flex>
    
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
