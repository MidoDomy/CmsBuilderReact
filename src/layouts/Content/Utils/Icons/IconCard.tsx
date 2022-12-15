import React, {useState} from 'react';

import Icon from 'components/Icon';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Tooltip from 'components/Tooltip';

type Props = {
  className?: string,
  icon: string,
  name: string
}

const IconCard: React.FC<Props> = ({className, icon, name}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <Tooltip text={name}>
        <div className={`shadow-md bg-base-white p-3 rounded-lg cursor-pointer ${className}`} onClick={toggleModal}>
          <Icon name={icon} size={24} />
        </div>
      </Tooltip>
      
      {/* Modal edit font */}
      <Modal size='sm' isOpen={isOpen} toggle={toggleModal}>
        <Modal.Header headline="Edit icon" toggle={toggleModal} />

        <Modal.Body>
          Icon svg file uploud here..
        </Modal.Body>

        <Modal.Footer>
          <div className="flex gap-4">
            <Button 
              variant='secondary' 
              outline
              size='sm'
              onClick={toggleModal}
            >
              Cancel
            </Button>

            <Button 
              variant='primary' 
              size='sm'
              onClick={toggleModal}
            >
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

IconCard.defaultProps = {
  className: ''
}

export default IconCard;
