import React from 'react';

import Flex from 'components/Structuring/Flex';
import Icon from 'components/Icon';

const DashboardWidgetActivity: React.FC = () => {
  return (
    <div className='w-full h-full p-4 bg-white ring-1 ring-gray-100 rounded-lg hover:shadow-md'>
      <Flex align='start'>
        <div className='flex-1'>
          <div className='font-semibold text-lg text-slate-900'>120</div>
          <div className='text-sm'>Total visitors</div>
        </div>

        <div className='p-2 bg-gray-100 rounded-md'>
          <Icon name='home' size={20} />
        </div>
      </Flex>
    </div>
  )
}

export default DashboardWidgetActivity;
