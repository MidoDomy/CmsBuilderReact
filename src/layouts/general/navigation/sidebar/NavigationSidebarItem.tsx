import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from 'components/Icon';

type Props = {
  icon?: string;
  name: string;
  link?: string;
  subCategories?: Array<Object> | null;
  isSidebarCollapsed: boolean;
  level?: number;
}

const NavigationSidebarItem: React.FC<Props> = ({ icon, name, link, subCategories, isSidebarCollapsed, level }) => {
  const router = useRouter();
  const active = router.pathname.includes(link);
  const [open, setOpen] = useState(active);

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <li className='mb-1 last:mb-0'>
      {subCategories && subCategories.length > 0 ?
        <div className={`${isSidebarCollapsed ? 'relative [&:hover>:last-child]:block' : ''}`}>
          <button className={`flex items-center justify-between w-full py-2 px-2 rounded ${open && !active && !isSidebarCollapsed ? 'bg-gray-50 text-slate-900' : ''} ${active ? 'bg-sky-50 text-sky-600' : 'hover:bg-gray-50 text-slate-700 hover:text-slate-900'}`}
            onClick={toggle}
          >
            <div className='flex items-center gap-2'>
              <div className={`w-5 shrink-0`}>
                {icon && <Icon name={icon} size={(level > 0) ? 8 : 18} className='mx-auto' />}
              </div>

              {!(isSidebarCollapsed && level === 0) && <span>{name}</span>}
            </div>

            {isSidebarCollapsed && level !== 0 ?
              <Icon name='arrow-head-right' size={16} />
              :
              open ? 
              <Icon name='arrow-head-up' size={16} className={`${isSidebarCollapsed && level === 0 ? 'hidden' : ''}`} />
              :
              <Icon name='arrow-head-down' size={16} className={`${isSidebarCollapsed && level === 0 ? 'hidden' : ''}`} />
            }
          </button>

          <div className={`${open ? '' : 'hidden'} ${isSidebarCollapsed ? 'absolute top-0 left-full hidden hover:block z-30' : 'pt-1'} ${isSidebarCollapsed && level === 0 ? 'pl-4' : ''} ${isSidebarCollapsed && level > 0 ? 'pl-1' : ''}`}>
            {/* SubCategories */}
            <ul className={`${isSidebarCollapsed ? 'bg-white w-56 shadow' : ''}`}>
              {subCategories?.map(child =>             
                <NavigationSidebarItem 
                  key={child.id} 
                  icon={child.icon} 
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
        <Link className={`flex items-center gap-2 py-2 px-2 rounded ${active ? 'bg-sky-50 text-sky-600' : 'hover:bg-gray-50 text-slate-700 hover:text-slate-900'}`}
          href={link}
        >
          <div className={`w-5 shrink-0`}>
            {icon && <Icon name={icon} size={(level > 0) ? 8 : 18} className='mx-auto' />}
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
