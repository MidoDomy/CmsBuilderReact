import React, { lazy } from 'react';

const importView = (element: string) =>
lazy(() =>
  import(`./widgets/${element}/preview`)
);

type Props = {
  element: string
}

const DashboardDynamicWidgetPreviewImport: React.FC<Props> = ({ element }) => {
  const Widget = importView(element);

  return (
    <React.Suspense fallback='Loading'>
      <Widget />
    </React.Suspense>
  )
}

export default DashboardDynamicWidgetPreviewImport;

