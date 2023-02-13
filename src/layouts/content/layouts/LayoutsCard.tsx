import React from 'react';
import Link from 'next/link';

import Image from 'components/Image';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import Icon from 'components/Icon';

type Props = {
  link: string;
  img?: string;
  name: string;
}

const LayoutsCard: React.FC<Props> = ({link, img, name}) => {
  return (
    <div className='relative [&:hover>:first-child]:block'>
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

          <Dropdown.MenuItem icon='copy'>
            Duplicate
          </Dropdown.MenuItem>

          <Dropdown.MenuItem 
            icon='trash'
            variant='danger'
          >
            Delete
          </Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>

      <Link className='block h-full p-3 bg-white border border-gray-200 rounded-md cursor-pointer hover:shadow transition-shadow'
        href={link}
      >
        <div className='aspect-video'>
          <Image className='h-full w-full object-cover rounded'
            src={img} 
            alt='Layout prew. img'
          />
        </div>

        <div className='flex flex-col gap-2 pt-2 text-sm'>
          <span className='font-medium'>{name}</span>
        </div>
      </Link>
    </div>
  )
}

export default LayoutsCard;
