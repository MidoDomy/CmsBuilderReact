import React from 'react';

import Form from 'components/Form';

const CustomFieldsSectionModalAddNumber: React.FC = () => {
  return (
    <>
      <Form.Group>
        <Form.Input 
          label='Default value'
          placeholder='Enter default value...'
        />
      </Form.Group>
    </>
  )
}

export default CustomFieldsSectionModalAddNumber;
