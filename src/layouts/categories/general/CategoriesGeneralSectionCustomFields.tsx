import React, { useState } from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import Form from 'components/Form';
import Row from 'components/Row';
import Col from 'components/Col';
import Section from 'layouts/general/Section';

const CategoriesGeneralSectionCustomFields: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <Section title='CustomFields' description='Add custom fields to category.'>
      <div className='flex flex-col items-center justify-center py-3 bg-white border border-gray-200 rounded'>
        <div className='text-sm text-slate-500'>Empty custom fields</div>
      </div>

      <Button className='mt-4'
        size='sm'
        block
        onClick={toggleModal}
      >
        <Icon name='plus' size={16} />
        <span>Add field</span>
      </Button>

      <Modal 
        size='sm'
        isOpen={showModal} 
        onClose={toggleModal}
      >
        <Modal.Header>Add new custom field</Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Select 
              label='Type'
              options={[
                {
                  value: 'text',
                  name: 'Text'
                },
                {
                  value: 'select',
                  name: 'Select'
                },
                {
                  value: 'textarea',
                  name: 'Textarea'
                }
              ]} 
            />
          </Form.Group>

          <Form.Group>
            <Form.Input label='Label' />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Row gapX={8} justify='end'>
            <Col>
              <Button
                size='sm'
                onClick={toggleModal}
              >
                Cancel
              </Button>
            </Col>

            <Col>
              <Button
                size='sm'
                variant='primary'
                onClick={toggleModal}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </Section>
  )
}

export default CategoriesGeneralSectionCustomFields;
