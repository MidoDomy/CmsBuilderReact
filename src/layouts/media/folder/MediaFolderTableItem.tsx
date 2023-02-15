import React from 'react';

import Image from 'components/Image';
import DataGrid from 'components/DataGrid';
import Button from 'components/Button';
import Icon from 'components/Icon';

type Props = {
  image: string;
  name: string;
  fileName: string;
  size: string;
  dimensions: string;
  created: string;
  modified: string;
  active?: boolean;
}

const MediaFolderTableItem: React.FC<Props> = ({image, name, fileName, size, dimensions, created, modified, active}) => {
  return (
    <DataGrid.Row className={active ? 'ring-2 ring-sky-500 ring-offset-2' : ''}>
      <DataGrid.Col className='w-20'>
        <Image className='w-10 h-10 object-contain'
          src={image}
          alt={name}
        />
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='font-medium text-sm'>
          {name}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>
          {fileName}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>
          {size}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>
          {dimensions}
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
        <Button
          variant='danger-outline'
          size='sm'
          rounded
        >
          <Icon name='trash' size={16} />
        </Button>
      </DataGrid.Col>
    </DataGrid.Row>
  )
}

export default MediaFolderTableItem;
