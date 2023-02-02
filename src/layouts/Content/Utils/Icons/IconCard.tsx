import React, {useState} from 'react';

import Icon from 'components/Icon';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Tooltip from 'components/Tooltip';
import Dropdown from 'components/Dropdown';
import Row from 'components/Row';
import Col from 'components/Col';

type Props = {
  icon: string
}

const IconCard: React.FC<Props> = ({icon}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <Tooltip text={icon}>
        <div className='relative [&:hover>:first-child]:block flex items-center justify-center h-full p-3 bg-white border border-gray-200 rounded-lg hover:shadow cursor-pointer transition-shadow'>            
          {/* Dropdown menu */}
          <Dropdown className='!absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10'
            closedClasses='hidden'
            openClasses='block'
          >
            <Dropdown.Trigger>
              <Button
                size='xs'
                rounded
              >
                <Icon name='three-dots' size={13} />
              </Button>
            </Dropdown.Trigger>
            
            <Dropdown.Menu className='-mr-2.5 mt-[5px]'>
              <Dropdown.MenuItem icon='edit'>
                Edit
              </Dropdown.MenuItem>

              <Dropdown.MenuItem 
                icon='trash'
                variant='danger'
                onClick={toggleModal}
              >
                Delete
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>

          <Icon name={icon} size={24} />
        </div>
      </Tooltip>
      
      {/* Modal delete icon */}
      <Modal 
        size='sm' 
        isOpen={isOpen} 
        onClose={toggleModal}
      >
        <Modal.Header>
          Delete confirmation
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete this icon?
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
                variant='danger' 
                size='sm'
                onClick={toggleModal}
              >
                Confirm
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default IconCard;
