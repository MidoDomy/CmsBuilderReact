import React from 'react';

import Modal from 'components/Modal';
import Form from 'components/Form';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const MediaOverviewModalAdd: React.FC<Props> = ({isOpen, onClose}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Add new folder</Modal.Header>

      <Modal.Body>
        <Form.Input 
          label='Folder name'
          placeholder='Enter folder name'
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
              Save
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default MediaOverviewModalAdd;
