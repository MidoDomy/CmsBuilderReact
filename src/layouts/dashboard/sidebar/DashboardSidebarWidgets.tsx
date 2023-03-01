import React from 'react';

import DashboardBaseWidget from '../DashboardBaseWidget';
import DashboardDynamicWidgetPreviewImport from '../DashboardDynamicWidgetPreviewImport'

const DashboardSidebarWidgets: React.FC = () => {
  const widgets = [
    {id: 0, element: 'DashboardWidgetText', name: 'Text'},
    {id: 1, element: 'DashboardWidgetStatisticalOverview', name: 'Statistical overview'},
    {id: 2, element: 'DashboardWidgetActivityTimeline', name: 'Activity timeline'},
    {id: 3, element: 'DashboardWidgetEmployeeStatus', name: 'Employee status'},
    {id: 4, element: 'DashboardWidgetWorkingFormat', name: 'Working format'}
  ];

  return (
    <div className='flex flex-col gap-4'>
      {widgets?.map((widget, index) => (
        <DashboardBaseWidget key={index} widget={widget}>
          <div className='px-3 py-4 border border-gray-200 rounded-md shadow-sm hover:shadow'>
            <DashboardDynamicWidgetPreviewImport element={widget.element} />
          </div>
        </DashboardBaseWidget>
      ))}
    </div>
  )
}

export default DashboardSidebarWidgets;
