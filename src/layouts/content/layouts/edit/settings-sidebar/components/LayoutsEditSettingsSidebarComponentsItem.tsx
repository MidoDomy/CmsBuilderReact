import React from 'react';

type Props = {
  children: React.ReactNode;
  name: string;
}

const LayoutsEditSettingsSidebarComponentsItem: React.FC<Props> = ({children, name}) => {
  return (
    <div>
      <div className='flex items-center justify-center h-28 p-3 bg-gray-50 hover:bg-gray-100 rounded transition-colors cursor-pointer'>
        {children}
      </div>
      
      <div className='pt-2 font-medium text-sm text-center'>
        {name}
      </div>
    </div>
  )
}

export default LayoutsEditSettingsSidebarComponentsItem;
