import React, { useState } from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import Form from 'components/Form';
import Button from 'components/Button';

const ColorsGroupItemAdd: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <div className='add-color flex items-center justify-center w-16 h-10 rounded border-2 border-gray-200 border-dashed opacity-0 transition-opacity cursor-pointer'
        onClick={toggleModal}
      >
        <Icon name='circle-plus' size={18} />
      </div>

      <Modal 
        size='sm'
        isOpen={showModal} 
        onClose={toggleModal}
      >
        <Modal.Header>Add color</Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Input label='Color name' />
          </Form.Group>

          <Form.Group>
            <Form.Input 
              label='Chose color value' 
              type='color'
            />
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
    </>
  )
}

export default ColorsGroupItemAdd;
