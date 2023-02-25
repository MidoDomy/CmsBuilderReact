import React from 'react';

import { FiBell, FiSettings } from 'react-icons/fi';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import Badge from 'components/Badge';
import Tabs from 'components/Tabs';
import NavigationBarNotificationsItem from './NavigationBarNotificationsItem';

const NavigationBarNotifications: React.FC = () => {
  return (
    <Dropdown position='bottom right'>
      <Dropdown.Trigger>
        <Button className='relative'
          rounded
        >
          <Badge />
          <FiBell size={18} />
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Menu className='w-96'>
        <div className='flex items-center justify-between px-4 py-2'>
          <div className='font-medium text-lg'>Notification</div>

          <Button variant='link'>
            Mark all as read
          </Button>
        </div>

        <Tabs active='All'>
          <div className='flex items-center justify-between px-4 border-b-2 border-gray-200'>
            <Tabs.Nav className='-mb-0.5'>
              <Tabs.NavItem name='All'>
                All
                <div className='ml-1 px-1 py-px bg-sky-500 rounded text-xs text-white'>1</div>
              </Tabs.NavItem>

              <Tabs.NavItem name='Archive'>Archive</Tabs.NavItem>
            </Tabs.Nav>

            <Button
              href='/settings/notifications'
              variant='ghost'
              size='sm'
              rounded
            >
              <FiSettings size={18} />
            </Button>
          </div>

          <Tabs.Content name='All'>
            <NavigationBarNotificationsItem 
              name='Anna Srzand'
              action='joined to'
              actionFor='Final Presentation'
              time='2h ago'
              category='Social Media Plan'
              unread
            />
            
            <NavigationBarNotificationsItem 
              name='Jess Raddon'
              action='is requesting to upgrade'
              actionFor='Plan'
              time='4h ago'
              category='Hobby List'
            >
              <div className='flex gap-2'>
                <Button
                  variant='primary'
                  size='sm'
                >Accept</Button>

                <Button size='sm'>Decline</Button>
              </div>
            </NavigationBarNotificationsItem>
          </Tabs.Content>

          <Tabs.Content name='Archive'>
            <NavigationBarNotificationsItem 
              name='Jess Raddon'
              action='is requesting to upgrade'
              actionFor='Plan'
              time='4h ago'
              category='Hobby List'
            />
          </Tabs.Content>
        </Tabs>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavigationBarNotifications;
