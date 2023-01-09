import React, { lazy } from 'react';

const importView = element =>
lazy(() =>
  import(`./widgets/${element}`)
);

type Props = {
  element: string
}

const DashboardDynamicWidgetImport: React.FC<Props> = ({ element }) => {
  const Widget = importView(element);

  return (
    <React.Suspense fallback='Loading'>
      <Widget />
    </React.Suspense>
  )
}

export default DashboardDynamicWidgetImport;

