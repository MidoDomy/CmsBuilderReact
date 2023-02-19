import React from 'react';

import Form from 'components/Form';

const CategoriesCustomFieldsSectionModalAddSelect: React.FC = () => {
  return (
    <>
      <Form.Group>
        <Form.Input 
          label='Default value'
          placeholder='Enter default value...'
          type='number'
        />
      </Form.Group>
    </>
  )
}

export default CategoriesCustomFieldsSectionModalAddSelect;
