import React from 'react';

import Container from 'components/Structuring/Container';
import Form from 'components/Form';
import Section from 'layouts/general/Section';

const CategoriesContentGeneral: React.FC = () => {
  return (
    <div>
      <Container>
        <Section title='General' description='General informations about category.'>
          <div className='bg-white py-6 px-5 shadow-sm rounded-lg'>
            <label className='mb-1 inline-flex text-sm' htmlFor="">Category name</label>
            <Form.Input className='mb-5' placeholder='Enter category name...' />

            <Form.Switch className='mb-5' id='activeCategory' label='Activate category' />
          </div>
        </Section>
      </Container>
    </div>
  )
}

export default CategoriesContentGeneral;
