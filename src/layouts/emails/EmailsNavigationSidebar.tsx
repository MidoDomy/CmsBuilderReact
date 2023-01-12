import React from 'react';

import Sidebar from 'components/Sidebar';

const EmailsNavigationSidebar: React.FC = () => {
  return (
    <Sidebar className='w-72'>
      <Sidebar.Body className='px-0'>
        <h4 className='font-semibold text-lg text-slate-900'>Basic parts</h4>

        <h4 className='font-semibold text-lg text-slate-900'>Base</h4>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default EmailsNavigationSidebar;
