import React from 'react';

import Sidebar from 'components/Sidebar';

import NavSidebarLink from './NavSidebarLink';

const NavSidebar: React.FC = () => {
  return (
    <Sidebar className='w-72 bg-white dark:bg-zinc-800'>
      <Sidebar.Body>
        <ul>
          <NavSidebarLink icon='home' name='Dashboard' link='/' />
          <NavSidebarLink icon='categories' name='Categories' link='/categories' />

          <NavSidebarLink icon='collections' name='Collections' link='/collections' structuring={true}>
            <ul>
              <NavSidebarLink icon='circle' iconSize={10} name='Overview' link='/collections/overview' />
              {/* Custom collections */}
              <NavSidebarLink icon='circle' iconSize={10} name='Blogs' link='/collections/blogs' />
            </ul>
          </NavSidebarLink>
          
          <NavSidebarLink icon='content' name='Content' link='/content' structuring={true}>
            <ul>
              <NavSidebarLink icon='circle' iconSize={10} name='Utils' link='/content/utils' structuring={true}>
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

          <NavSidebarLink icon='media' name='Media' link='/media' />
          <NavSidebarLink icon='letter' name='Emails' link='/emails' />
          <NavSidebarLink icon='settings' name='Settings' link='/settings' />
        </ul>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default NavSidebar;
