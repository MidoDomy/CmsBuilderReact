import React from 'react';

import Form from 'components/Form';

const CustomFieldsSectionModalAddTextarea: React.FC = () => {
  return (
    <>
      <Form.Group>
        <Form.Textarea 
          label='Default value'
          placeholder='Enter default value...'
        />
      </Form.Group>
    </>
  )
}

export default CustomFieldsSectionModalAddTextarea;
