import React from 'react';

import Container from 'components/Container';
import Form from 'components/Form';
import Section from 'layouts/settings/SettingsSection';

const CategoriesContentCustomFields: React.FC = () => {
  return (
    <div>
      <Container>
        <Section title='CustomFields' description='Add custom fields to category.'>
          <div className='bg-white py-6 px-5 shadow-sm rounded-lg'>
            <div className='mb-5'>
              Uploud image (To do)
            </div>

            <label className='mb-1 inline-flex text-sm' htmlFor="">Category description</label>
            <Form.Textarea />
          </div>
        </Section>
      </Container>
    </div>
  )
}

export default CategoriesContentCustomFields;
