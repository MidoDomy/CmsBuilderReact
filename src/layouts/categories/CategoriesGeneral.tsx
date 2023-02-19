import React from 'react';

import Form from 'components/Form';
import Section from 'layouts/general/Section';

const CategoriesGeneral: React.FC = () => {
  return (
    <>
      {/* Active */}
      <Section
        title='Activate'
      >
        <Form.Switch
          id='activeCollectionItem' 
        />
      </Section>

      {/* Name */}
      <Section
        title='Name'
      >
        <Form.Input
          placeholder='Enter category name...'
        />
      </Section>

      {/* Description */}
      <Section
        title='Description'
      >
        <Form.Textarea
          placeholder='Enter category description...'
        />
      </Section>

      {/* Type */}
      <Section
        title='Type'
      >
        <Form.Select
          options={[
            {value: 'normalPage', name: 'Normal page'},
            {value: 'structuringElement', name: 'Structuring element'},
            {value: 'link', name: 'Link'}
          ]}
        />
      </Section>
    </>
  )
}

export default CategoriesGeneral;
