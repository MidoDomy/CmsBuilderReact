import React from 'react';

import Container from 'components/Container';
import NavigationBarSearch from './bar/NavigationBarSearch';
import NavigationBarNotifications from './bar/NavigationBarNotifications';
import NavigationBarMessages from './bar/NavigationBarMessages';

const NavigationBar: React.FC = () => {
  return (
    <header className={`py-[7px] bg-white/75 border-b border-gray-200 shadow-sm`}>
      <Container className='flex items-center justify-between'>
        {/* Search */}
        <div className='w-1/2'>
          <NavigationBarSearch />
        </div>

        {/* Actions */}
        <div className='flex items-center gap-2'>
          <NavigationBarNotifications />
          <NavigationBarMessages />
        </div>
      </Container>
    </header>
  )
}

export default NavigationBar;
