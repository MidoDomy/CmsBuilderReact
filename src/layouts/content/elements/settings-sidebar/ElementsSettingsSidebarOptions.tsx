import React from 'react';

import ElementsSettingsSidebarOptionsGeneral from './options/ElementsSettingsSidebarOptionsGeneral';
import ElementsSettingsSidebarOptionsFields from './options/ElementsSettingsSidebarOptionsFields';

const ElementsSettingsSidebarOptions: React.FC = () => {
  return (
    <div className='flex flex-col gap-1.5'>
      <ElementsSettingsSidebarOptionsGeneral />
      <ElementsSettingsSidebarOptionsFields />
    </div>
  )
}

export default ElementsSettingsSidebarOptions;
