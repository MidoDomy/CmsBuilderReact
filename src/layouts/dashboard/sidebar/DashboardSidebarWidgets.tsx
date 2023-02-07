import React from 'react';

import DashboardBaseWidget from '../DashboardBaseWidget';
import DashboardDynamicWidgetImport from '../DashboardDynamicWidgetImport'

const DashboardSidebarWidgets: React.FC = () => {
  const widgets = [
    {
      id: 1, 
      element: 'DashboardWidgetActivity',
      name: 'Activity'
    },
    {
      id: 2, 
      element: 'DashboardWidgetStatus',
      name: 'Status'
    }
  ] 

  return (
    <div className='flex flex-col gap-4'>
      {widgets?.map((widget, index) => (
        <DashboardBaseWidget key={index} widget={widget}>
          <DashboardDynamicWidgetImport element={widget.element} />
        </DashboardBaseWidget>
      ))}
    </div>
  )
}

export default DashboardSidebarWidgets;
