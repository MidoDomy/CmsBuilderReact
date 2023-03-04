import React from 'react';

import Sidebar from 'components/Sidebar';
import Form from 'components/Form';

const EmployeesOrganisationChartSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80'>
      <Sidebar.Header className='pt-8'>
        <h3 className='font-medium'>Options</h3>
      </Sidebar.Header>

      <Sidebar.Body>
        <Form.Group>
          <Form.Label>Card name</Form.Label>
          <Form.Input size='sm' />
        </Form.Group>

        <Form.Group>
          <Form.InputGroup label='Color'>
            <Form.Color size='sm' />

            <Form.Input className='flex-1' 
              size='sm' 
            />
          </Form.InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Label>Assign</Form.Label>
          <Form.Select 
            size='sm' 
            options={[
              {value: 'Employee name 1', name: 'Employee name 1'},
              {value: 'Employee name 2', name: 'Employee name 2'},
              {value: 'Employee name 3', name: 'Employee name 3'}
            ]}
          />
        </Form.Group>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default EmployeesOrganisationChartSidebar;
