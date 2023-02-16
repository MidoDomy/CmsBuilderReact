import React from 'react';

import Modal from 'components/Modal';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const ModalConfirmDeletion: React.FC<Props> = ({isOpen, onClose}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Confirm deletion</Modal.Header>

      <Modal.Body>
        Are you sure you want to delete this item?
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
              variant='danger'
              onClick={onClose}
            >
              Confirm
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalConfirmDeletion;
