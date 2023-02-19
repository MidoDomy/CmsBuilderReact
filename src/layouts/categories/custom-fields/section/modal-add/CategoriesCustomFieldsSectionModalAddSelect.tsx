import React from 'react';

import Form from 'components/Form';

const CategoriesCustomFieldsSectionModalAddSelect: React.FC = () => {
  return (
    <>
      <Form.Group>
        <Form.Select 
          label='Default value'
          placeholder='Choose default value...'
          options={[
            {value: '', name: 'Add option'}
          ]}
        />
      </Form.Group>
    </>
  )
}

export default CategoriesCustomFieldsSectionModalAddSelect;
