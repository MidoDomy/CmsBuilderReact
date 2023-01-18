import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useScrollDirection } from 'hocs/ScrollDirection';

import Button from 'components/Button';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';
import Badge from 'components/Badge';

const NavBar: React.FC = () => {
  const [show, setShow] = useState(true);
  let scroll = useScrollDirection();

  useEffect(() => {
    scroll == 'up' ? setShow(true) : setShow(false);
  }, [scroll]);

  return (
    <header className={`sticky top-0 z-40 w-full shadow-sm backdrop-blur border-b border-gray-200 dark:border-gray-700 bg-white/75 dark:bg-neutral-900/80 transform transition-transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='flex gap-6 items-center px-5 py-2'>
        {/* Search */}
        <div className='relative flex-1 flex gap-2'>
          <Icon className='absolute top-1/2 left-1 transform -translate-y-1/2' name='search' size={20} />

          <input className='w-full py-2 pl-8 pr-5 focus:outline-none bg-transparent'
            type='text' 
            placeholder='Search'
          />
        </div>

        {/* Actions */}
        <div className='flex'>
          {/* Notifications */}
          <Button className='rounded-full relative'
            square={true}
            variant='ghost'
          >
            <Badge />
            <Icon name='bell' />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
