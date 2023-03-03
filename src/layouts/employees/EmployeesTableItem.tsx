import React from 'react';
import Link from 'next/link';

import DataGrid from 'components/DataGrid';
import Avatar from 'components/Avatar';

type Props = {
  name?: string;
  role?: string;
  salary?: string;
  workPeriod?: string;
  workStatus?: string;
  workTime?: string;
  email?: string;
}

const EmployeeTableItem: React.FC<Props> = ({name, role, salary, workPeriod, workStatus, workTime, email}) => {
  return (
    <DataGrid.Row>
      <DataGrid.Col className='w-[60px] pr-0'>
        <Link href='/employees/employee'>
          <Avatar alt='' />
        </Link>
      </DataGrid.Col>

      <DataGrid.Col>
        <Link href='/employees/employee'>
          <div className='font-medium text-sm hover:underline'>{name}</div>
        </Link>
        <div className='text-xs text-slate-500'>{role}</div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>{salary}</div>
        <div className='text-xs text-slate-500'>{workPeriod}</div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>{workStatus}</div>
        <div className='text-xs text-slate-500'>{workTime}</div>
      </DataGrid.Col>

      <DataGrid.Col>
        <div className='text-sm'>{email}</div>
      </DataGrid.Col>
    </DataGrid.Row>
  )
}

export default EmployeeTableItem;
