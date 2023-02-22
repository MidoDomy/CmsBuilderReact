import React from 'react';
import Link from 'next/link';

interface componentsNavigationSidebarItem {
  id: number;
  name: string;
}

type Props = {
  component: componentsNavigationSidebarItem;
}

const ComponentsNavigationSidebarItem: React.FC<Props> = ({ component }) => {
  // TODO: Set active condition
  const active = component.name == 'Alert';

  return (
    <Link className={`block py-1 px-2 rounded text-sm cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-600' : 'hover:bg-gray-50'}`}
      href='#'
    >
      {component.name}
    </Link>
  );
}

export default ComponentsNavigationSidebarItem;
