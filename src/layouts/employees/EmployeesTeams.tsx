import React from 'react';

import { FiPlus } from 'react-icons/fi';

import DataGrid from 'components/DataGrid';
import Button from 'components/Button';
import EmployeesTeamsTableItem from './EmployeesTeamsTableItem';

const EmployeesTeams: React.FC = () => {
  const columns = [
    { key: 'id', name: '' },
    { key: 'employee', name: 'Employee' },
    { key: 'salary', name: 'Salary' },
    { key: 'status', name: 'Status' },
    { key: 'email', name: 'Email' }
  ];
  
  const teams = [
    {id: 0, name: 'Frontend', employees: [
      { id: 10, name: 'Ronny Asmo', role: 'Software engineer', salary: '3.200', workTime: 'full time', workStatus: 'test period', workPeriod: '2 months', email: 'test@test.com' },
      { id: 11, name: 'Tomas Lonsetteig', role: 'Business analyst', salary: '4.000', workTime: 'full time', workStatus: 'test period', workPeriod: '1.5 months', email: 'test@test.com' },
      { id: 12, name: 'Kathrine Lonsetteig', role: 'Project menager', salary: '2.800', workTime: 'full time', workStatus: 'test period', workPeriod: '1 year', email: 'test@test.com' },
      { id: 15, name: 'Arne Opheim', role: 'Research Engineer', salary: '1.600', workTime: 'part time', workStatus: 'worker', workPeriod: '1.5 year', email: 'test@test.com' }
      ]
    },
    {id: 1, name: 'Backend', employees: [
      { id: 13, name: 'Tomas Lonsetteig', role: 'Business analyst', salary: '4.000', workTime: 'full time', workStatus: 'test period', workPeriod: '1.5 months', email: 'test@test.com' },
      { id: 14, name: 'Kathrine Lonsetteig', role: 'Project menager', salary: '2.800', workTime: 'full time', workStatus: 'test period', workPeriod: '1 year', email: 'test@test.com' }
      ]
    }
  ];

  return (
    <>
    <DataGrid columns={columns}>
      {teams?.map(team =>
        <React.Fragment key={team.id}>
          <tr className='[&:first-child>td]:pt-0'>
            <td colSpan={3} className='pt-3 font-medium'>
              <div className='flex items-center gap-2'>
                <span>{team.name}</span>
              
                <Button
                  size='xs'
                  rounded
                >
                  <FiPlus size={14} />
                </Button>
              </div>
            </td>
          </tr>

          {team.employees?.map(employee =>
            <EmployeesTeamsTableItem
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
        </React.Fragment>          
      )}
    </DataGrid>
    </>
  )
}

export default EmployeesTeams;
