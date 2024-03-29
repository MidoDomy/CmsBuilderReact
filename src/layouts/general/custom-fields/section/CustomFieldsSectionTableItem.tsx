import React from 'react';

import DataGrid from 'components/DataGrid';
import CustomFieldsSectionItemDropdown from './item/CustomFieldsSectionItemDropdown';

type Props = {
  label: string;
  name: string;
  type: string;
  defaultValue: string;
}

const CustomFieldsSectionTableItem: React.FC<Props> = ({label, name, type, defaultValue}) => {
  return (
    <DataGrid.Row>
      <DataGrid.Col>
        <div className='text-sm'>
          {label}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>
          {name}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>
          {type}
        </div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>
          {defaultValue}
        </div>
      </DataGrid.Col>

      <DataGrid.Col className='text-right'>
        <CustomFieldsSectionItemDropdown />
      </DataGrid.Col>
    </DataGrid.Row>
  )
}

export default CustomFieldsSectionTableItem;
