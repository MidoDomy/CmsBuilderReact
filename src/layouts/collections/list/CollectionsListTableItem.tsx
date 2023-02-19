import React from 'react';
import Link from 'next/link';

import DataGrid from 'components/DataGrid';
import Image from 'components/Image';
import CollectionsListItemDropdown from './CollectionsListItemDropdown';

type Props = {
  link: string;
  name: string;
  description: string;
  created: string;
  modified: string;
  active: boolean;
}

const CollectionsListTableItem: React.FC<Props> = ({link, name, description, created, modified, active}) => {
  return (
    <DataGrid.Row>
      <DataGrid.Col className='w-20'>
        <Link href={link}>
          <Image className='w-10 h-10 object-contain'
            alt={name}
          />
        </Link>
      </DataGrid.Col>

      <DataGrid.Col>
        <Link className='font-medium text-sm hover:underline'
          href={link}
        >
          {name}
        </Link>
      </DataGrid.Col>

      <DataGrid.Col className='max-w-[200px]'>
        <div className='text-sm text-slate-500 truncate'>
          {description}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>
          {created}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>
          {modified}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        {active ?
          <span className='px-3 py-1 bg-green-100 border border-green-500 rounded-2xl font-medium text-xs text-green-800'>
            Yes
          </span>
          :
          <span className='px-3 py-1 bg-red-100 border border-red-500 rounded-2xl font-medium text-xs text-red-800'>
            No
          </span>
        }
      </DataGrid.Col>

      <DataGrid.Col className='text-right'>
        <CollectionsListItemDropdown />
      </DataGrid.Col>
    </DataGrid.Row>
  )
}

export default CollectionsListTableItem;
