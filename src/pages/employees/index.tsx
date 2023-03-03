import type { NextPage } from 'next';

import { FiPlus, FiSearch, FiUsers } from 'react-icons/fi';
import { BsDiagram2 } from 'react-icons/bs';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Tabs from 'components/Tabs';
import Form from 'components/Form';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import EmployeesOverview from 'layouts/employees/EmployeesOverview';
import EmployeesTeams from 'layouts/employees/EmployeesTeams';
import EmployeesOrg from 'layouts/employees/EmployeesOrg';

const Employees: NextPage = () => {
  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Employees'
        description='Easily manage your employees, teams and organization in your company.'
        actions={
          <Button>
            <FiPlus size={18} />
            Add employee
          </Button>
        }
      />

      {/* Content */}
      <div>
        <Container>
          <Tabs active='overview'>
            <div className='mb-10'>
              <Row justify='between'>
                <Col>
                  <Tabs.Nav>
                    <Tabs.NavItem name='overview'>Overview</Tabs.NavItem>

                    <Tabs.NavItem name='teams'>
                      <FiUsers size={18} />
                      <span className='pl-1'>Teams</span>
                    </Tabs.NavItem>

                    <Tabs.NavItem name='org'>
                      <BsDiagram2 size={20} />
                      <span className='pl-1'>Org Chart</span>
                    </Tabs.NavItem>
                  </Tabs.Nav>
                </Col>

                <Col>
                  <Form.Input 
                    placeholder='Search...'
                    prefix={<FiSearch size={18} />}
                  />
                </Col>
              </Row>
            </div>

            <Tabs.Content name='overview'>
              <EmployeesOverview />
            </Tabs.Content>

            <Tabs.Content name='teams'>
              <EmployeesTeams />
            </Tabs.Content>

            <Tabs.Content name='org'>
              <EmployeesOrg />
            </Tabs.Content>
          </Tabs>
        </Container>
      </div>
    </Layout>
  )
}

export default Employees;
