import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from 'components/Icon';

type NavSidebarLinkProps = {
  children?: React.ReactNode,
  className?: string;
  structuring?: Boolean,
  name: string;
  icon?: string;
  iconSize?: Number,
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isSidebarCollapsed?: Boolean
}

const NavSidebarLink: React.FC<NavSidebarLinkProps> = ({ children, className, structuring, name, icon, iconSize, link, isSidebarCollapsed }) => {

  const router = useRouter();
  const active = router.pathname.includes(link);
  const [collapse, setcollapse] = useState(active ? true : false);

  return (
    <li className={`select-none mb-1 overflow-hidden ${className}`}>
      { structuring ?
        <>
          {/* Collapse btn */}
          <button className={`w-full flex items-center py-3 px-5 bg-sky-600 dark:bg-sky-400 hover:bg-opacity-10 dark:hover:bg-opacity-10 transition-colors ${active ? 'bg-opacity-10 dark:bg-opacity-10 text-sky-600 dark:text-sky-400' : 'bg-opacity-0 dark:bg-opacity-0'}`} 
            onClick={() => setcollapse(!collapse)}
          >
            <div className={`w-5 shrink-0 ${!isSidebarCollapsed ? 'mr-4' : ''}`}>
              {icon && <Icon name={icon} size={iconSize} className='mx-auto' />}
            </div>

            {!isSidebarCollapsed && <span>{name}</span>}

            {collapse && !isSidebarCollapsed && <Icon name='arrow-head-up' size={18} className='ml-auto' />}
            {!collapse && !isSidebarCollapsed && <Icon name='arrow-head-right' size={18} className='ml-auto' />}
          </button>

          {/* Collapse content */}
          {collapse && !isSidebarCollapsed ?
            <div className='pt-1'>
              {children}
            </div>
            :
            ''
          }
        </>
        :
        <Link href={link} className={`flex items-center px-5 py-3 bg-sky-600 dark:bg-sky-400 hover:bg-opacity-10 dark:hover:bg-opacity-10 transition-colors ${active ? 'pl-3 bg-opacity-10 dark:bg-opacity-10 text-sky-600 dark:text-sky-400 border-l-6 border-sky-600 dark:border-sky-400' : 'bg-opacity-0 dark:bg-opacity-0'}`}>
            <div className={`w-5 shrink-0 ${!isSidebarCollapsed ? 'mr-4' : ''}`}>
              {icon ? <Icon name={icon} size={iconSize} className='mx-auto' /> : ''}
            </div>

            {!isSidebarCollapsed && <span>{name}</span>}
        </Link>
      }
    </li>
  );
}

NavSidebarLink.defaultProps = {
  iconSize: 20,
  structuring: false
}

export default NavSidebarLink;
