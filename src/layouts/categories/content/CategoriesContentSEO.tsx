import React from 'react';

import Container from 'components/Container';
import Form from 'components/Form';
import Section from 'layouts/settings/SettingsSection';

const CategoriesContentSEO: React.FC = () => {
  return (
    <div>
      <Container>
        <Section title='SEO' description='SEO informations about category.'>
          <div className='bg-white py-6 px-5 shadow-sm rounded-lg'>
            <label className='mb-1 inline-flex text-sm' htmlFor="">Category meta title</label>
            <Form.Input className='mb-5' placeholder='Enter category meta title...' />
          </div>
        </Section>
      </Container>
    </div>
  )
}

export default CategoriesContentSEO;
