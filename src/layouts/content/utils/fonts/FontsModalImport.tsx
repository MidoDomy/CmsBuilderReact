import React from 'react';

import Modal from 'components/Modal';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import Divider from 'components/Divider';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const FontsModalImport: React.FC<Props> = ({isOpen, onClose}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Import font</Modal.Header>

      <Modal.Body>
        <Form.Group>
          <Form.FileUpload />
        </Form.Group>

        <Divider className='my-5' 
          text='or'
        />

        <Form.Group>
          <Form.Input label='Upload from url' />
        </Form.Group>

        <Divider className='my-5 -mx-6' />

        <Form.Group>
          <Form.Input label='Font name' />
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
              Generate
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default FontsModalImport;
