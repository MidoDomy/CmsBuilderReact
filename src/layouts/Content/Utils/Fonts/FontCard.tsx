import React, {useState} from 'react';

import Image from 'components/Image';
import Modal from 'components/Modal';
import Button from 'components/Button';

type Props = {
  className?: string,
  img?: string,
  name: string
}

const FontCard: React.FC<Props> = ({className, img, name}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`flex flex-col w-56 shadow-md bg-base-white p-4 rounded-lg cursor-pointer ${className}`}
        onClick={toggleModal}
      >
        <div className='relative flex-1 aspect-video'>
          <Image src={img} />
        </div>

        <div className='pt-1.5 font-medium text-base-dark'>
          {name}
        </div>
      </div>
    
      {/* Modal edit font */}
      <Modal size='sm' isOpen={isOpen} toggle={toggleModal} headline="Edit font">
        <div className='pb-4'>
          Edit font
        </div>
        
        <div className="flex gap-4">
          <Button 
            variant='secondary' 
            outline
            size='sm'
            onPress={toggleModal}
          >
            Cancel
          </Button>

          <Button 
            variant='primary' 
            size='sm'
            onPress={toggleModal}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  )
}

FontCard.defaultProps = {
  className: ''
}

export default FontCard;
