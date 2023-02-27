import React from 'react';

import { FiChevronUp, FiUser, FiLogOut } from 'react-icons/fi';

import Dropdown from 'components/Dropdown';
import Avatar from 'components/Avatar';

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

              <FiChevronUp size={18} className='ml-2' />
            </div>
          }
        </div>
      </Dropdown.Trigger>

      <Dropdown.Menu className={`${isSidebarCollapsed ? '-ml-0.5' : 'ml-0.5'}`}>
        <Dropdown.MenuItem link='/settings/profile'>
          <FiUser size={16} />
          Profile settings
        </Dropdown.MenuItem>

        <Dropdown.MenuItem 
          link='/login'
          variant='danger'
        >
          <FiLogOut size={16} />
          Log out
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavigationSidebarProfile;
