import React from 'react';

import Sidebar from 'components/Sidebar';
import SettingsSidebarLink from './SettingsSidebarLink';
import Form from 'components/Form';
import Icon from 'components/Icon';

const SettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-72'>
      <Sidebar.Header className='pt-10'>
        <h3 className='font-semibold text-slate-900'>Settings</h3>
      </Sidebar.Header>

      <Sidebar.Body>
        <Form.Input className='mb-3 bg-white' 
          placeholder='Search' 
          prefix={<Icon name='search' size={18} />} 
        />

        <ul className='flex flex-col gap-1'>
          <li>
            <SettingsSidebarLink href="/settings/profile">
              <Icon name='profile' />
              My details
            </SettingsSidebarLink>
          </li>

          <li>
            <SettingsSidebarLink href="/settings/users-and-permissions">
              <Icon name='users' />
              Users & Permissions
            </SettingsSidebarLink>
          </li>

          <li>
            <SettingsSidebarLink href="/settings/appearance">
              <Icon name='stars' />
              Appearance
            </SettingsSidebarLink>
          </li>

          <li>
            <SettingsSidebarLink href="/settings/api">
              <Icon name='api' />
              API
            </SettingsSidebarLink>
          </li>
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default SettingsSidebar;
