import React from 'react';

import DataGrid from 'components/DataGrid';
import Form from 'components/Form';
import BoardItemDropdown from './BoardItemDropdown';

type Props = {
  role: string;
  name: string;
  completed: boolean;
}

const BoardRowItem: React.FC<Props> = ({role, name, completed}) => {
  return (
    <DataGrid.Row>
      <DataGrid.Col className='w-10'>
        <Form.Checkbox 
          id='task0'
          value='completed'
        />
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='font-medium text-sm hover:underline'>{name}</div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='uppercase text-sm text-slate-500'>{role}</div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>01/03/2022</div>
      </DataGrid.Col>

      <DataGrid.Col className='w-20 text-right'>
        <BoardItemDropdown />
      </DataGrid.Col>
    </DataGrid.Row>
  )
}

export default BoardRowItem;
