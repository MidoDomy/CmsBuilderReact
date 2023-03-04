import type { NextPage } from 'next';
import { useState } from 'react';

import { FiPlus, FiList, FiGrid } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import DataGrid from 'components/DataGrid';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import EmployeesTableItem from 'layouts/employees/overview/EmployeesTableItem';
import EmployeesGridItem from 'layouts/employees/overview/EmployeesGridItem';

const EmployeesOverview: NextPage = () => {
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

  const [isTableView, setIsTableView] = useState(true);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Employees'
        description='Easily manage your employees in your company.'
        actions={
          <Button href='/employees/employee'>
            <FiPlus size={18} />
            Add employee
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
              {employees?.map(employee =>
                <EmployeesTableItem 
                  key={employee.id}
                  link='/employees/employee' 
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
            :
            <Row gapX={16} gapY={32}>
              {employees?.map(employee =>
                <Col span={3} 
                  key={employee.id}
                >
                  <EmployeesGridItem
                    link='/employees/employee' 
                    name={employee.name}
                    role={employee.role}
                  />
                </Col>
              )}
            </Row>
          }
        </Container>
      </div>
    </Layout>
  )
}

export default EmployeesOverview;
