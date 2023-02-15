import React from 'react';

import Modal from 'components/Modal';
import Form from 'components/Form';
import Divider from 'components/Divider';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const MediaFolderModalImport: React.FC<Props> = ({isOpen, onClose}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Import media file</Modal.Header>

      <Modal.Body>
        <Form.FileUpload />

        <Divider className='my-6'
          text='or' 
        />

        <Form.Input 
          label='Import from URL'
          placeholder='Add file URL'
        />
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
              Import
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default MediaFolderModalImport;
