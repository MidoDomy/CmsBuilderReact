import React from 'react';

import Form from 'components/Form';
import Section from 'layouts/general/Section';

const CategoriesGeneral: React.FC = () => {
  return (
    <Section 
      title='General' 
      description='General informations about category.'
    >
      <Form.Group>
        <Form.Switch
          id='activeCategory' 
          label='Activate category' 
        />
      </Form.Group>

      <Form.Group>
        <Form.Input
          label='Name'
          placeholder='Enter category name...'
        />
      </Form.Group>

      <Form.Group>
        <Form.Textarea
          label='Description'
          placeholder='Enter category description...'
        />
      </Form.Group>

      <Form.Group>
        <Form.FileUpload label='Image' />
      </Form.Group>
    </Section>
  )
}

export default CategoriesGeneral;
