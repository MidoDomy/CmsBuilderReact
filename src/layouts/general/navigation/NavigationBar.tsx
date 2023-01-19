import React from 'react';

import Container from 'components/Structuring/Container';
import NavigationBarSearch from './bar/NavigationBarSearch';
import NavigationBarNotifications from './bar/NavigationBarNotifications';

const NavigationBar: React.FC = () => {
  return (
    <header className={`py-[7px] bg-white/75 border-b border-gray-200 shadow-sm`}>
      <Container className='flex items-center justify-between'>
        {/* Search */}
        <NavigationBarSearch />

        {/* Actions */}
        <div className='flex gap-2'>
          <NavigationBarNotifications />
        </div>
      </Container>
    </header>
  )
}

export default NavigationBar;
