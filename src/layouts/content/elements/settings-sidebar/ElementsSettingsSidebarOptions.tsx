import React from 'react';

import ElementsSettingsSidebarOptionsGeneral from './options/ElementsSettingsSidebarOptionsGeneral';

const ElementsSettingsSidebarOptions: React.FC = () => {
  return (
    <div className='flex flex-col gap-1.5'>
      <ElementsSettingsSidebarOptionsGeneral />
    </div>
  )
}

export default ElementsSettingsSidebarOptions;
