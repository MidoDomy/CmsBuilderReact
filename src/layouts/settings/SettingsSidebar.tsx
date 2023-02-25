import React from 'react';

import { FiSearch, FiUser, FiSettings, FiGift, FiBell, FiUsers, FiLink } from 'react-icons/fi';

import Sidebar from 'components/Sidebar';
import Form from 'components/Form';
import SettingsSidebarItem from './sidebar/SettingsSidebarItem';

const SettingsSidebar: React.FC = () => {
  return (
    <Sidebar className='w-72'>
      <Sidebar.Header className='pt-8'>
        <h3 className='mb-2.5 font-medium'>Settings</h3>

        <Form.Input
          placeholder='Search' 
          prefix={<FiSearch size={18} />} 
        />
      </Sidebar.Header>

      <Sidebar.Body>
        <ul className='flex flex-col gap-1.5'>
          <SettingsSidebarItem 
            link='/settings/profile'
            text='My details'
            icon={<FiUser size={18} />}
          />
          
          <SettingsSidebarItem 
            link='/settings/general'
            text='General'
            icon={<FiSettings size={18} />}
          />
          
          <SettingsSidebarItem 
            link='/settings/preferences'
            text='Preferences'
            icon={<FiGift size={18} />}
          />
          
          <SettingsSidebarItem 
            link='/settings/notifications'
            text='Notifications'
            icon={<FiBell size={18} />}
          />
          
          <SettingsSidebarItem 
            link='/settings/members'
            text='Members'
            icon={<FiUsers size={18} />}
          />
          
          <SettingsSidebarItem 
            link='/settings/api'
            text='API'
            icon={<FiLink size={18} />}
          />
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default SettingsSidebar;
