import React from 'react';
import Link from 'next/link';

import DataGrid from 'components/DataGrid';
import Image from 'components/Image';
import CollectionsOverviewItemDropdown from './CollectionsOverviewItemDropdown';

type Props = {
  link: string;
  name: string;
  description: string;
  itemsCount: number;
  created: string;
  modified: string;
}

const CollectionsOverviewTableItem: React.FC<Props> = ({link, name, description, itemsCount, created, modified}) => {
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
          {itemsCount}
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

      <DataGrid.Col className='text-right'>
        <CollectionsOverviewItemDropdown />
      </DataGrid.Col>
    </DataGrid.Row>
  )
}

export default CollectionsOverviewTableItem;
