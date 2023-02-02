import React from 'react';

import Dropdown from 'components/Dropdown';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';

type Props = {
  isSidebarCollapsed: boolean;
}

const NavigationSidebarProfile: React.FC<Props> = ({ isSidebarCollapsed }) => {
  return (
    <Dropdown position='top left'>
      <Dropdown.Trigger>
        <div className='flex gap-1.5 items-center'>
          <Avatar size={isSidebarCollapsed ? 'sm' : 'md'} />
          
          {!isSidebarCollapsed &&
            <div className='flex-1 flex items-center justify-between pr-2'>
              <div>
                <div className='font-medium text-sm text-slate-900'>Midhat Perenda</div>
                <div className='text-xs text-slate-700'>Administrator</div>
              </div>

              <Icon name='arrow-head-up' size={18} className='ml-2' />
            </div>
          }
        </div>
      </Dropdown.Trigger>

      <Dropdown.Menu className={`${isSidebarCollapsed ? '-ml-0.5' : 'ml-0.5'}`}>
        <Dropdown.MenuItem link='/settings/profile'>
          Profile settings
        </Dropdown.MenuItem>

        <Dropdown.MenuItem 
          link='/'
          variant='danger'
          icon='logout'
        >
          Log out
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavigationSidebarProfile;
