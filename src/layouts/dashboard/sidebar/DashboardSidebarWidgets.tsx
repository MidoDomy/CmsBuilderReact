import React from 'react';

import Flex from 'components/Structuring/Flex';
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
    <>
      <Flex gap={16} direction='column'>
        {widgets?.map((widget, index) => (
          <DashboardBaseWidget key={index} widget={widget}>
            <DashboardDynamicWidgetImport element={widget.element} />
          </DashboardBaseWidget>
        ))}
      </Flex>
    </>
  )
}

export default DashboardSidebarWidgets;
