import React from 'react';

import Avatar from 'components/Avatar';

const DashboardWidgetEmployeeStatusPreview: React.FC = () => {
  return (
    <div>
      <div className='mb-3 font-medium text-sm'>
        Employees status
      </div>

      <div>
        <div className='flex mb-1 font-medium text-xs'>
          <div className='w-10'></div>

          <div className='w-1/3'>
            Employee
          </div>

          <div className='w-1/4'>
            Salary
          </div>

          <div className='flex-1'>
            Status
          </div>
        </div>

        <div>
          <div className='flex items-center mb-0.5 px-1 py-0.5 border border-gray-200 rounded-md text-xs'>
            <div className='w-10'>
              <Avatar size='xs' />
            </div>

            <div className='w-1/3'>
              Employee
            </div>

            <div className='w-1/4'>
              Salary
            </div>

            <div className='flex-1'>
              Status
            </div>
          </div>

          <div className='flex items-center px-1 py-0.5 border border-gray-200 rounded-md text-xs'>
            <div className='w-10'>
              <Avatar size='xs' />
            </div>

            <div className='w-1/3'>
              Employee
            </div>

            <div className='w-1/4'>
              Salary
            </div>

            <div className='flex-1'>
              Status
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardWidgetEmployeeStatusPreview;
