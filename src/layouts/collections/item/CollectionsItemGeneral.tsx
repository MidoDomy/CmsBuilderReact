import React from 'react';

import Form from 'components/Form';
import Section from 'layouts/general/Section';

const CollectionsItemGeneral: React.FC = () => {
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

      {/* Preview image */}
      <Section
        title='Preview image'
      >
        <Form.FileUpload />
      </Section>
    </>
  )
}

export default CollectionsItemGeneral;
