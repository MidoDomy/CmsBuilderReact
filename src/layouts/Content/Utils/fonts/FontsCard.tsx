import React, {useState} from 'react';

import Tag from 'components/Tag';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import Row from 'components/Row';
import Col from 'components/Col';

type Props = {
  name: string;
  weights: Array<string>;
  fontSize: number;
  fontWeight: number;
}

const FontsCard: React.FC<Props> = ({name, weights, fontSize, fontWeight}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className='relative [&:hover>:first-child]:block w-full h-full p-4 bg-white rounded-lg border border-gray-200 hover:shadow transition-shadow cursor-pointer'>
        {/* Dropdown menu */}
        <Dropdown className='!absolute top-2 right-2'
          closedClasses='hidden'
          openClasses='block'
        >
          <Dropdown.Trigger>
            <Button
              size='sm'
              rounded
            >
              <Icon name='three-dots' size={16} />
            </Button>
          </Dropdown.Trigger>
          
          <Dropdown.Menu className='-mr-1 mt-2'>
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
        
        {/* Font info */}
        <div className='flex flex-col'>
          <div className='mb-1.5 font-medium text-lg'>
            {name}
          </div>

          <div className='flex flex-wrap gap-1 mb-6'>
            {weights.map((weight, index) => (
              <Tag key={index}>{weight}</Tag>
            ))}
          </div>

          <div style={{fontSize: fontSize + 'px', fontWeight: fontWeight}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    
      {/* Modal delete font */}
      <Modal 
        size='sm' 
        isOpen={isOpen} 
        onClose={toggleModal}
      >
        <Modal.Header>
          Delete confirmation
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete this font?
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

FontsCard.defaultProps = {
  fontSize: 16,
  fontWeight: 400
}

export default FontsCard;
