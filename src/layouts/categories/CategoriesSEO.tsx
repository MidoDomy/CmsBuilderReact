import React from 'react';

import Form from 'components/Form';
import Section from 'layouts/general/Section';

const CategoriesGeneral: React.FC = () => {
  return (
    <>
      <Section
        title='Meta title'
        description='Meta titles should not be longer than 70 characters. Excess text will be truncated by Google and the title will not be fully displayed in the SERP snippet.'
      >
        <Form.Input 
          placeholder='Enter meta title...'
        />
      </Section>

      <Section
        title='Description'
        description='It is recommended to aim for a length of about 150 characters so that the description is not cut off in the SERP snippet.'
      >
        <Form.Textarea 
          placeholder='Enter a description...'
        />
      </Section>

      <Section title='Keywords'>
        <Form.Input 
          placeholder='Enter one or more keywords...'
        />
      </Section>
    </>
  )
}

export default CategoriesGeneral;
