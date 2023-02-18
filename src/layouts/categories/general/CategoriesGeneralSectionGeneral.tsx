import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Section from 'layouts/general/Section';

const CategoriesGeneralSectionGeneral: React.FC = () => {
  return (
    <Section 
      title='General' 
      description='General informations about category.'
    >
      <Form.Group>
        <Row gapX={16} align='center'>
          <Col span={8}>
            <Form.Input
              label='Name'
              placeholder='Enter category name...'
            />
          </Col>

          <Col span={3}>
            <div className='flex justify-center pt-5'>
              <Form.Switch
                id='activeCollectionItem' 
                label='Active' 
              />
            </div>
          </Col>
        </Row>
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

export default CategoriesGeneralSectionGeneral;
