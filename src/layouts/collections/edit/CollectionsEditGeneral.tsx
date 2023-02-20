import React from 'react';

import Form from 'components/Form';
import Section from 'layouts/general/Section';

const CollectionsEditGeneral: React.FC = () => {
  return (
    <>
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

export default CollectionsEditGeneral;
