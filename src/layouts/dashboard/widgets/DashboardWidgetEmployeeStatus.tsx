import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';
import Button from 'components/Button';
import DataGrid from 'components/DataGrid';
import Avatar from 'components/Avatar';

const DashboardWidgetEmployeeStatus: React.FC = () => {
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'employee', name: 'Employee' },
    { key: 'salary', name: 'Salary' },
    { key: 'status', name: 'Status' }
  ];
  
  const employees = [
    { id: 0, name: 'Ronny Asmo', role: 'Software engineer', salary: '3.200', workTime: 'full time', workStatus: 'test period', workPeriod: '2 months' },
    { id: 1, name: 'Tomas Lonsetteig', role: 'Business analyst', salary: '4.000', workTime: 'full time', workStatus: 'test period', workPeriod: '1.5 months' },
    { id: 2, name: 'Kathrine Lonsetteig', role: 'Project menager', salary: '2.800', workTime: 'full time', workStatus: 'test period', workPeriod: '1 year' },
    { id: 3, name: 'Arne Opheim', role: 'Research Engineer', salary: '1.600', workTime: 'part time', workStatus: 'worker', workPeriod: '1.5 year' },
    { id: 4, name: 'Ingrid Oline', role: 'Software engineer', salary: '5.000', workTime: 'full time', workStatus: 'worker', workPeriod: '2 year' }
  ];

  return (
    <div className='h-full flex flex-col p-6 bg-white border border-gray-200 rounded-lg hover:shadow'>
      <div className='mb-6'>
        <h5 className='font-medium text-lg'>Employees status</h5>
      </div>

      <div className='flex-1'>
        <DataGrid columns={columns}>
          {employees?.map(employee =>
            <DataGrid.Row key={employee.id}>
              <DataGrid.Col className='w-14'>
                <div className='text-sm text-center'>
                  {employee.id}
                </div>
              </DataGrid.Col>

              <DataGrid.Col>
                <Row gapX={10}>
                  <Col>
                    <Avatar alt='' />
                  </Col>

                  <Col>
                    <div className='font-medium text-sm'>{employee.name}</div>
                    <div className='text-xs text-slate-500'>{employee.role}</div>
                  </Col>
                </Row>
              </DataGrid.Col>

              <DataGrid.Col>
                <div className='text-sm'>{employee.salary}</div>
                <div className='text-xs text-slate-500'>{employee.workPeriod}</div>
              </DataGrid.Col>

              <DataGrid.Col>
                <div className='text-sm'>{employee.workStatus}</div>
                <div className='text-xs text-slate-500'>{employee.workTime}</div>
              </DataGrid.Col>
            </DataGrid.Row>
          )}
        </DataGrid>
      </div>
    </div>
  )
}

export default DashboardWidgetEmployeeStatus;
