import React, { useState } from 'react';
import Link from 'next/link';

import { NavigationMenu, NavigationGeneral } from 'constants';

import Sidebar from 'components/Sidebar';
import Image from 'components/Image';
import Button from 'components/Button';
import Icon from 'components/Icon';
import NavigationSidebarItem from './sidebar/NavigationSidebarItem';
import NavigationSidebarProfile from './sidebar/NavigationSidebarProfile';

const NavigationSidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleModal = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className={`${isSidebarCollapsed ? '' : 'w-[240px]'}`}>
      <Sidebar className='border-r border-gray-200'>
        <Sidebar.Header className='relative flex justify-between items-center border-b border-gray-200'>
          {/* Logo */}
          <Link href='/'>
            <h1 className={`flex items-center gap-2 font-medium text-2xl text-slate-900 ${isSidebarCollapsed ? 'justify-center' : ''}`}>
              <Image className='h-[26px] w-auto' />

              {!isSidebarCollapsed &&
                <span>Logo</span>
              }
            </h1>
          </Link>

          {/* Collapse button */}
          <Button className={`${isSidebarCollapsed ? 'absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10' : ''}`}
            rounded
            onClick={toggleModal}
          >
            {isSidebarCollapsed ? 
              <Icon name='arrow-head-right' size={12} />
              :
              <Icon name='arrow-head-left' size={12} />
            }
          </Button>
        </Sidebar.Header>

        <Sidebar.Body className='pt-10'>
          {/* Navigation */}
          <h5 className={`mb-2 uppercase font-medium text-slate-500 ${isSidebarCollapsed ? '-mx-3 text-2xs text-center' : 'text-xs'}`}>Menu</h5>
          <ul className='text-sm mb-10'>
            {NavigationMenu?.map(item =>             
              <NavigationSidebarItem 
                key={item.id} 
                icon={item.icon} 
                name={item.name} 
                link={item.link} 
                subCategories={item.children}
                isSidebarCollapsed={isSidebarCollapsed} 
              />
            )}
          </ul>

          <h5 className={`mb-2 uppercase font-medium text-slate-500 ${isSidebarCollapsed ? '-mx-3 text-2xs text-center' : 'text-xs'}`}>General</h5>
          <ul className='text-sm'>
            {NavigationGeneral?.map(item =>             
              <NavigationSidebarItem 
                key={item.id} 
                icon={item.icon} 
                name={item.name} 
                link={item.link} 
                subCategories={item.children}
                isSidebarCollapsed={isSidebarCollapsed} 
              />
            )}
          </ul>
        </Sidebar.Body>

        <Sidebar.Footer className={`${isSidebarCollapsed ? 'flex flex-col items-center gap-3' : ''}`}>
          {/* Account */}
          <NavigationSidebarProfile isSidebarCollapsed={isSidebarCollapsed} />
        </Sidebar.Footer>
      </Sidebar>
    </div>
  )
}

export default NavigationSidebar;
