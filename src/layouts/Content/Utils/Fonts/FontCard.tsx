import React, {useState} from 'react';

import Tag from 'components/Tag';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Icon from 'components/Icon';

type Props = {
  className?: string,
  name: string,
  weights: Array<String>
}

const FontCard: React.FC<Props> = ({className, name, weights}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`relative [&:hover>:first-child]:scale-100 flex flex-col w-72 p-4 rounded-lg ring-1 ring-black/5 dark:ring-white/10 hover:shadow-lg dark:shadow-white/5 transition-shadow cursor-pointer ${className}`}>
        <Button className='absolute top-1 right-1 transform scale-0 transition-transform'
          square 
          variant='ghost' 
          onClick={toggleModal}
        >
          <Icon name='edit' size={18} />
        </Button>

        <div className='text-lg font-medium text-slate-900 dark:text-white'>
          {name}
        </div>

        {weights &&
          <div className='flex flex-wrap gap-1 mt-1'>
            {weights.map((weight, index) => (
              <Tag key={index}>{weight}</Tag>
            ))}
          </div>
        }

        <div className='mt-6 text-2xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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
      </Modal>
    </>
  )
}

FontCard.defaultProps = {
  className: ''
}

export default FontCard;
