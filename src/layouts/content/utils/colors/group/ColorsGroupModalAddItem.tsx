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

const ColorsGroupModalAddItem: React.FC<Props> = ({isOpen, onClose}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Add color</Modal.Header>

      <Modal.Body>
        <Form.Group>
          <Form.InputGroup label='Value'>
            <Form.Color />
            <Form.Input className='flex-1' />
          </Form.InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Input label='Name' />
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

export default ColorsGroupModalAddItem;
