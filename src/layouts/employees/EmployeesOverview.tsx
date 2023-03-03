import React from 'react';

import DataGrid from 'components/DataGrid';
import EmployeesTableItem from './EmployeesTableItem';

const EmployeesOverview: React.FC = () => {
  const columns = [
    { key: 'id', name: '' },
    { key: 'employee', name: 'Employee' },
    { key: 'salary', name: 'Salary' },
    { key: 'status', name: 'Status' },
    { key: 'email', name: 'Email' }
  ];
  
  const employees = [
    { id: 0, name: 'Ronny Asmo', role: 'Software engineer', salary: '3.200', workTime: 'full time', workStatus: 'test period', workPeriod: '2 months', email: 'test@test.com' },
    { id: 1, name: 'Tomas Lonsetteig', role: 'Business analyst', salary: '4.000', workTime: 'full time', workStatus: 'test period', workPeriod: '1.5 months', email: 'test@test.com' },
    { id: 2, name: 'Kathrine Lonsetteig', role: 'Project menager', salary: '2.800', workTime: 'full time', workStatus: 'test period', workPeriod: '1 year', email: 'test@test.com' },
    { id: 3, name: 'Arne Opheim', role: 'Research Engineer', salary: '1.600', workTime: 'part time', workStatus: 'worker', workPeriod: '1.5 year', email: 'test@test.com' },
    { id: 4, name: 'Ingrid Oline', role: 'Software engineer', salary: '5.000', workTime: 'full time', workStatus: 'worker', workPeriod: '2 year', email: 'test@test.com' }
  ];

  return (
    <>
      <DataGrid columns={columns}>
        {employees?.map(employee =>
          <EmployeesTableItem 
            key={employee.id}
            name={employee.name}
            role={employee.role}
            salary={employee.salary}
            workPeriod={employee.workPeriod}
            workStatus={employee.workStatus}
            workTime={employee.workTime}
            email={employee.email}
          />
        )}
      </DataGrid>
    </>
  )
}

export default EmployeesOverview;
