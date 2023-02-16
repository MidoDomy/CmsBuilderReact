import React from 'react';
import Link from 'next/link';

import DataGrid from 'components/DataGrid';
import Image from 'components/Image';
import LayoutsOverviewItemDropdown from './LayoutsOverviewItemDropdown';

type Props = {
  link: string;
  name: string;
  created: string;
  modified: string;
}

const LayoutsOverviewTableItem: React.FC<Props> = ({link, name, created, modified}) => {
  return (
    <DataGrid.Row>
      <DataGrid.Col className='w-20'>
        <Image className='w-10 h-10 object-contain'
          alt={name}
        />
      </DataGrid.Col>

      <DataGrid.Col>
        <Link className='font-medium text-sm hover:underline'
          href={link}
        >
          {name}
        </Link>
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
        <LayoutsOverviewItemDropdown />
      </DataGrid.Col>
    </DataGrid.Row>
  )
}

export default LayoutsOverviewTableItem;
