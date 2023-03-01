import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FiChevronUp, FiChevronRight, FiChevronDown } from 'react-icons/fi';

interface navigationSidebarItem {
  id: number; 
  icon: React.ReactNode | null; 
  name: string; 
  link: string; 
  children: navigationSidebarItem[] | null | undefined;
}

type Props = {
  icon?: React.ReactNode;
  name: string;
  link?: string;
  subCategories?: navigationSidebarItem[] | null | undefined;
  isSidebarCollapsed: boolean;
  level: number;
}

const NavigationSidebarItem: React.FC<Props> = ({ icon, name, link, subCategories, isSidebarCollapsed, level }) => {
  const router = useRouter();
  const active = router.pathname.includes(link ? link : '');
  const [open, setOpen] = useState(active);

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <li className='mb-1 last:mb-0'>
      {subCategories && subCategories.length > 0 ?
        <div className={`${isSidebarCollapsed ? 'relative [&:hover>:last-child]:block' : ''}`}>
          <button className={`flex items-center w-full py-2 px-2 rounded transition-colors ${open && !active && !isSidebarCollapsed ? 'bg-gray-50 text-slate-900' : ''} ${active ? 'bg-sky-50 text-sky-600' : 'hover:bg-gray-50 text-slate-500 hover:text-slate-900'} ${isSidebarCollapsed && level === 0 ? 'justify-center' : 'justify-between'}`}
            onClick={toggle}
          >
            <div className='flex items-center gap-2'>
              <div className={`w-5 shrink-0 flex justify-center`}>
                {icon && icon}
              </div>

              {!(isSidebarCollapsed && level === 0) && <span>{name}</span>}
            </div>

            {isSidebarCollapsed && level !== 0 ?
              <FiChevronRight size={16} />
              :
              open ? 
                isSidebarCollapsed && level === 0 ? '' : <FiChevronUp size={16} />
              :
                isSidebarCollapsed && level === 0 ? '' : <FiChevronDown size={16} />
            }
          </button>

          <div className={`${open ? '' : 'hidden'} ${isSidebarCollapsed ? 'absolute top-0 left-full hidden hover:block z-30' : 'pt-1'} ${isSidebarCollapsed && level === 0 ? 'pl-4' : ''} ${isSidebarCollapsed && level > 0 ? 'pl-1' : ''}`}>
            {/* SubCategories */}
            <ul className={`${isSidebarCollapsed ? 'bg-white w-56 shadow-lg' : ''}`}>
              {subCategories?.map(child =>             
                <NavigationSidebarItem 
                  key={child.id} 
                  icon={child.icon ? child.icon : ''} 
                  name={child.name} 
                  link={child.link} 
                  subCategories={child.children}
                  isSidebarCollapsed={isSidebarCollapsed} 
                  level={level + 1}
                />
              )}
            </ul>
          </div>
        </div>
        :
        <Link className={`flex items-center gap-2 py-2 px-2 rounded transition-colors ${active ? 'bg-sky-50 text-sky-600' : 'hover:bg-gray-50 text-slate-500 hover:text-slate-900'} ${isSidebarCollapsed && level === 0 ? 'justify-center' : ''}`}
          href={link ? link : '/'}
        >
          <div className={`w-5 shrink-0 flex justify-center`}>
            {icon && icon}
          </div>

          {!(isSidebarCollapsed && level === 0) && <span>{name}</span>}
        </Link>
      }
    </li>
  );
}

NavigationSidebarItem.defaultProps = {
  level: 0
}

export default NavigationSidebarItem;
