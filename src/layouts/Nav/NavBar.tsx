import React from 'react';
import Link from 'next/link';

import Button from 'components/Button';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';
import Badge from 'components/Badge';

type Props = {
  className?: string,
  darkMode?: Boolean,
  toggleDarkMode?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavBar: React.FC<Props> = ({className, darkMode, toggleDarkMode}) => {
  return (
    <header className='px-4'>
      <div className='container max-w-7xl flex items-center gap-4 py-4 bg-white rounded-b-lg shadow-md'>
        {/* Search */}
        <div className='flex-1'>
          <input className='bg-base-light rounded-md px-4 py-2 w-full shadow-sm'
            type='text' 
            placeholder='Search'
          />
        </div>

        {/* Actions */}
        <div className='flex gap-2'>
          {/* Theme toggle */}
          <Button className='rounded-full'
            square={true}
            onClick={toggleDarkMode}
          >
            {darkMode ? <Icon name='night' /> : <Icon name='sun' />}
          </Button>

          {/* Notifications */}
          <Button className='rounded-full relative'
            square={true}
          >
            <Badge />
            <Icon name='bell' />
          </Button>

          {/* Account link */}
          <Link className='flex' 
            href='/'
          >
            <Avatar size='lg' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
