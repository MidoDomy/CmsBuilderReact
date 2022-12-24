import React, {useState} from 'react';

import Icon from 'components/Icon';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Tooltip from 'components/Tooltip';
import ContextMenu from 'components/ContextMenu';

type Props = {
  className?: string,
  icon: string
}

const IconCard: React.FC<Props> = ({className, icon}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <div className='relative [&:hover>:first-child]:block'>            
        <ContextMenu className='absolute -top-2 -right-2 hidden bg-white rounded-full z-10'>
          <ContextMenu.Item icon='edit' text='Edit' onClick={toggleModal} />
          <ContextMenu.Item icon='trash' text='Delete' onClick={toggleModal} />
        </ContextMenu>

        <Tooltip text={icon}>
          <div className={`flex items-center justify-center h-full p-3 rounded-lg ring-1 ring-black/5 dark:ring-white/10 hover:shadow-lg dark:shadow-white/5 cursor-pointer transition-shadow ${className}`}>
            <Icon name={icon} size={24} />
          </div>
        </Tooltip>
      </div>
      
      {/* Modal edit font */}
      <Modal size='sm' isOpen={isOpen} toggle={toggleModal} headline="Edit icon">
        <div>
          <label className='block pb-1'>Svg</label>
          <textarea className='w-full border border-gray-200 rounded py-1.5 px-3 placeholder:font-light'
            rows="7"
            value='
              <svg>
                <g>
                  <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"/>
                </g>
              </svg>
            '
          ></textarea>
        </div>
        
        <div className="flex gap-3 justify-end mt-4 -mx-6 px-6 pt-3 border-t border-gray-200">
          <Button 
            onPress={toggleModal}
          >
            Cancel
          </Button>

          <Button 
            variant='primary'
            onPress={toggleModal}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  )
}

IconCard.defaultProps = {
  className: ''
}

export default IconCard;
