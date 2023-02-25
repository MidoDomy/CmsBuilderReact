import React from 'react';

import Sidebar from 'components/Sidebar';

const EmailsNavigationSidebar: React.FC = () => {
  return (
    <Sidebar className='w-72'>
      <Sidebar.Body>
        <h4 className='font-medium'>Basic parts</h4>

        <h4 className='font-medium'>Base</h4>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default EmailsNavigationSidebar;
