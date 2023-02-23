import React from 'react';
import Link from 'next/link';

interface elementsNavigationSidebarItem {
  id: number;
  name: string;
}

type Props = {
  element: elementsNavigationSidebarItem;
}

const ElementsNavigationSidebarItem: React.FC<Props> = ({ element }) => {
  // TODO: Set active condition
  const active = element.name == 'Blog card';

  return (
    <>
      {/* Name */}
      <Link className={`block py-1 px-2 rounded text-sm cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
        href='#'
      >
        {element.name}
      </Link>
    </>
  );
}

export default ElementsNavigationSidebarItem;
