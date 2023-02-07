import React from 'react';

import Sidebar from 'components/Sidebar';
import Form from 'components/Form';
import Icon from 'components/Icon';
import SettingsSidebarLink from './sidebar/SettingsSidebarLink';

const SettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-72'>
      <Sidebar.Header className='pt-8'>
        <h3 className='mb-2.5 font-medium'>Settings</h3>

        <Form.Input
          placeholder='Search' 
          prefix={<Icon name='search' size={18} />} 
        />
      </Sidebar.Header>

      <Sidebar.Body>
        <ul className='flex flex-col gap-1'>
          <SettingsSidebarLink 
            link="/settings/profile"
            icon='profile'
          >
            My details
          </SettingsSidebarLink>
          
          <SettingsSidebarLink 
            link="/settings/general"
            icon='settings'
          >
            General
          </SettingsSidebarLink>
          
          <SettingsSidebarLink 
            link="/settings/preferences"
            icon='stars'
          >
            Preferences
          </SettingsSidebarLink>
          
          <SettingsSidebarLink 
            link="/settings/notifications"
            icon='bell'
          >
            Notifications
          </SettingsSidebarLink>
          
          <SettingsSidebarLink 
            link="/settings/members"
            icon='users'
          >
            Members
          </SettingsSidebarLink>
          
          <SettingsSidebarLink 
            link="/settings/api"
            icon='api'
          >
            API
          </SettingsSidebarLink>
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default SettingsSidebar;
