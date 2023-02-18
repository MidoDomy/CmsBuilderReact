import React from 'react';

import Modal from 'components/Modal';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const IconsModalAdd: React.FC<Props> = ({isOpen, onClose}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Add icon</Modal.Header>

      <Modal.Body>
        <Form.Group>
          <Form.Input label='Name' 
            placeholder='Enter icon name...'
          />
        </Form.Group>

        <Form.Group>
          <Form.Textarea label='Svg content' 
            placeholder='Enter svg ...'
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Row gapX={8} justify='end'>
          <Col>
            <Button onClick={onClose}>
              Cancel
            </Button>
          </Col>

          <Col>
            <Button 
              variant='primary'
              onClick={onClose}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default IconsModalAdd;
