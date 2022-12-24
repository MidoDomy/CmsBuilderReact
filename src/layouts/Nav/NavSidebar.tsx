import React, { useState } from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Sidebar from 'components/Sidebar';
import NavSidebarLink from './NavSidebarLink';

const NavSidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleModal = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <Sidebar className={`relative pt-16 bg-white dark:bg-zinc-800 ${isSidebarCollapsed ? '' : 'w-72'}`}>
      <Button className='absolute top-5 right-0 transform translate-x-1/2'
        variant='primary'
        rounded
        onClick={toggleModal}
      >
        {isSidebarCollapsed ? 
          <Icon name='arrow-head-right' size={16} />
          :
          <Icon name='arrow-head-left' size={16} />
        }
      </Button>

      <Sidebar.Body>
        <ul>
          <NavSidebarLink icon='home' name='Dashboard' link='/' isSidebarCollapsed={isSidebarCollapsed} />
          <NavSidebarLink icon='categories' name='Categories' link='/categories' isSidebarCollapsed={isSidebarCollapsed} />

          <NavSidebarLink icon='collections' name='Collections' link='/collections' structuring isSidebarCollapsed={isSidebarCollapsed}>
            <ul>
              <NavSidebarLink icon='circle' iconSize={10} name='Overview' link='/collections/overview' />
              {/* Custom collections */}
              <NavSidebarLink icon='circle' iconSize={10} name='Blogs' link='/collections/blogs' />
            </ul>
          </NavSidebarLink>
          
          <NavSidebarLink icon='content' name='Content' link='/content' structuring isSidebarCollapsed={isSidebarCollapsed}>
            <ul>
              <NavSidebarLink icon='circle' iconSize={10} name='Utils' link='/content/utils' structuring>
                <ul>
                  <NavSidebarLink name='Colors' link='/content/utils/colors' />
                  <NavSidebarLink name='Fonts' link='/content/utils/fonts' />
                  <NavSidebarLink name='Icons' link='/content/utils/icons' />
                </ul>
              </NavSidebarLink>

              <NavSidebarLink icon='circle' iconSize={10} name='Components' link='/content/components' />
              <NavSidebarLink icon='circle' iconSize={10} name='Elements' link='/content/elements' />
              <NavSidebarLink icon='circle' iconSize={10} name='Layouts' link='/content/layouts' />
            </ul>
          </NavSidebarLink>

          <NavSidebarLink icon='media' name='Media' link='/media' isSidebarCollapsed={isSidebarCollapsed} />
          <NavSidebarLink icon='letter' name='Emails' link='/emails' isSidebarCollapsed={isSidebarCollapsed} />
          <NavSidebarLink icon='settings' name='Settings' link='/settings' isSidebarCollapsed={isSidebarCollapsed} />
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default NavSidebar;
