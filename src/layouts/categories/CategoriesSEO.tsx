import React from 'react';

import Form from 'components/Form';
import Section from 'layouts/general/Section';

const CategoriesSEO: React.FC = () => {
  return (
    <Section 
      title='SEO' 
      description='SEO informations about category.'
    >
      <Form.Input 
        label='Meta title'
        placeholder='Enter category meta title...'
      />
    </Section>
  )
}

export default CategoriesSEO;
