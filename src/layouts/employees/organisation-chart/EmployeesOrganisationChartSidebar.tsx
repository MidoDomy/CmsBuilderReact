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
          <Form.Input 
            label='Card name'
            size='sm' 
          />
        </Form.Group>

        <Form.Group>
          <Form.Label size='sm'>Color</Form.Label>
          <Form.InputGroup>
            <Form.Color size='sm' />

            <Form.Input className='flex-1' 
              size='sm' 
            />
          </Form.InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Label size='sm'>Prev. image</Form.Label>
          <Form.FileUpload />
        </Form.Group>

        <Form.Group>
          <Form.Select 
            label='Assign'
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
