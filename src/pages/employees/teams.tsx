import type { NextPage } from 'next';
import React, { useState } from 'react';

import { FiPlus, FiList, FiGrid } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import DataGrid from 'components/DataGrid';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import EmployeesTeamsTableItem from 'layouts/employees/teams/EmployeesTeamsTableItem';
import EmployeesTeamsGridItem from 'layouts/employees/teams/EmployeesTeamsGridItem';

const EmployeesTeams: NextPage = () => {
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

  const [isTableView, setIsTableView] = useState(true);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Teams'
        description='Create and manage teams in your organization.'
        actions={
          <Button>
            <FiPlus size={18} />
            Add team
          </Button>
        }
      />

      {/* Controls */}
      <div className='mb-5'>
        <Container>
          <div className='flex justify-end'>
            <div className='p-0.5 bg-gray-100 rounded-md'>
              <Row gapX={3}>
                <Col>
                  <Button className={`${isTableView ? 'bg-white' : 'hover:bg-white'}`}
                    variant='ghost'
                    size='sm'
                    square
                    onClick={() => setIsTableView(true)}  
                  >
                    <FiList size={18} />
                  </Button>
                </Col>

                <Col>
                  <Button className={`${!isTableView ? 'bg-white' : 'hover:bg-white'}`}
                    variant='ghost'
                    size='sm'
                    square
                    onClick={() => setIsTableView(false)}  
                  >
                    <FiGrid size={18} />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <div>
        <Container>
          {isTableView ? 
            <DataGrid columns={columns}>
              {teams?.map(team =>
                <React.Fragment key={team.id}>
                  <tr className='[&:first-child>td]:pt-0'>
                    <td colSpan={3} className='pt-3 font-medium'>
                      <div className='flex items-center gap-3'>
                        <span>{team.name}</span>
                      
                        <Button size='xs'>
                          <FiPlus size={14} />
                          Add employee
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
            :
            <>
              {teams?.map(team =>
                <div className='mb-10'
                  key={team.id}
                >
                  <div className='flex items-center gap-3 mb-5'>
                    <span className='font-medium text-lg'>{team.name}</span>
                  
                    <Button size='xs'>
                      <FiPlus size={14} />
                      Add employee
                    </Button>
                  </div>

                  <Row gapX={16} gapY={32}>
                    {team.employees?.map(employee =>
                      <Col key={employee.id}
                        span={3} 
                      >
                        <EmployeesTeamsGridItem
                          link='/employees/employee' 
                          name={employee.name}
                          role={employee.role}
                        />
                      </Col>
                    )}
                  </Row>
                </div>       
              )}
            </>
          }
        </Container>
      </div>
    </Layout>
  )
}

export default EmployeesTeams;
