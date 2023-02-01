import React, { useState } from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Tooltip from 'components/Tooltip';
import Modal from 'components/Modal';
import Row from 'components/Row';
import Col from 'components/Col';

type Props = {
  color: string,
  name: string
}

const ColorsGroupItem: React.FC<Props> = ({color, name}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <div className='relative [&:hover>:first-child]:block'>
        {/* Remove color */}
        <Button className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 hidden'
          variant='danger'
          size='xs'
          rounded
          onClick={toggleModal}
        >
          <Icon name='x' size={10} />
        </Button>

        {/* Color */}
        <div className='relative w-16 h-10 rounded ring-1 ring-black/5 overflow-hidden'>
          <input className='absolute -mt-[25%] -ml-[25%] w-[150%] h-[200%] bg-transparent cursor-pointer'
            type="color" 
            defaultValue={color} 
          />
        </div>

        {/* Info */}
        <Tooltip 
          text='Copied!' 
          small 
          click
          onClick={() => {navigator.clipboard.writeText(color)}}
        >
          <div className='pt-1.5 px-0.5 text-xs cursor-pointer'>
            <div className='font-medium'>{name}</div>
            <div className='text-slate-500 font-mono lowercase'>{color}</div>
          </div>
        </Tooltip>
      </div>

      <Modal 
        size='sm'
        isOpen={showModal} 
        onClose={toggleModal}
      >
        <Modal.Header>Delete color confirmation</Modal.Header>

        <Modal.Body>
          Are you sure you wanna delete this color?
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
                variant='danger'
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

export default ColorsGroupItem;
