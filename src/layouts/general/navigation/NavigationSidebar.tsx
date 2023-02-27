import React, { useState } from 'react';
import Link from 'next/link';

import { HiOutlineHome } from 'react-icons/hi';
import { BiCategory, BiBookContent, BiCollection } from 'react-icons/bi';
import { MdOutlinePermMedia } from 'react-icons/md';
import { FiMail, FiCircle, FiSettings, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Sidebar from 'components/Sidebar';
import Image from 'components/Image';
import Button from 'components/Button';
import NavigationSidebarItem from './sidebar/NavigationSidebarItem';
import NavigationSidebarProfile from './sidebar/NavigationSidebarProfile';

const NavigationSidebar: React.FC = () => {
  const NavigationMenu = [
    { id: 0, icon: <HiOutlineHome size={20} />, name: 'Dashboard', link: '/dashboard', children: null },
    { id: 1, icon: <BiCategory size={20} />, name: 'Categories', link: '/categories', children: null },
    { id: 2, icon: <BiCollection size={20} />, name: 'Collections', link: '/collections', children: [
      { id: 3, icon: <FiCircle size={10} />, name: 'Overview', link: '/collections/overview', children: null },
      { id: 20, icon: <FiCircle size={10} />, name: 'Blogs', link: '/collections/list', children: null },
      { id: 21, icon: <FiCircle size={10} />, name: 'Products', link: '/collections/list', children: null }
    ]},
    { id: 4, icon: <BiBookContent size={20} />, name: 'Content', link: '/content', children: [
      { id: 5, icon: <FiCircle size={10} />, name: 'Utils', link: '/content/utils', children: [
        { id: 6, icon: null, name: 'Colors', link: '/content/utils/colors', children: null },
        { id: 7, icon: null, name: 'Fonts', link: '/content/utils/fonts', children: null },
        { id: 8, icon: null, name: 'Icons', link: '/content/utils/icons', children: null }
      ]},
      { id: 9, icon: <FiCircle size={10} />, name: 'Components', link: '/content/components', children: null },
      { id: 10, icon: <FiCircle size={10} />, name: 'Elements', link: '/content/elements', children: null },
      { id: 11, icon: <FiCircle size={10} />,  name: 'Layouts', link: '/content/layouts/overview', children: null }
    ]},
    { id: 12, icon: <MdOutlinePermMedia size={20} />, name: 'Media', link: '/media', children: null },
    { id: 13, icon: <FiMail size={20} />, name: 'Emails', link: '/emails', children: null }
  ];

  const NavigationGeneral = [
    { id: 14, icon: <FiSettings size={20} />, name: 'Settings', link: '/settings/profile', children: null },
    { id: 15, icon: <FiInfo size={20} />, name: 'Support', link: '/support', children: null }
  ];

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleModal = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className={`${isSidebarCollapsed ? '' : 'w-[240px]'}`}>
      <Sidebar className='border-r border-gray-200'>
        <Sidebar.Header className='relative flex justify-between items-center border-b border-gray-200'>
          {/* Logo */}
          <Link href='/dashboard'>
            <h1 className={`flex items-center gap-2 font-medium text-xl ${isSidebarCollapsed ? 'justify-center' : ''}`}>
              <Image className='h-[26px] w-auto' alt='' />

              {!isSidebarCollapsed &&
                <span>Logo</span>
              }
            </h1>
          </Link>

          {/* Collapse button */}
          <Button className={`${isSidebarCollapsed ? 'absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10' : '-mb-0.5'}`}
            size='sm'
            rounded
            onClick={toggleModal}
          >
            {isSidebarCollapsed ? 
              <FiChevronRight size={16} />
              :
              <FiChevronLeft size={16} />
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
                level={0}
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
                level={0}
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
