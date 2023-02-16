import React from 'react';
import Link from 'next/link';

import Image from 'components/Image';
import LayoutsOverviewItemDropdown from './LayoutsOverviewItemDropdown';

type Props = {
  link: string;
  img?: string;
  name: string;
}

const LayoutsOverviewGridItem: React.FC<Props> = ({link, img, name}) => {
  return (
    <div className='relative flex flex-col h-full p-3 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
      <div className='absolute top-4 right-4'>
        <LayoutsOverviewItemDropdown />
      </div>

      <Link className='block h-32 mb-2'
        href={link}
      >
        <Image className='h-full w-full object-cover rounded'
          src={img} 
          alt='Collection img'
        />
      </Link>

      <Link className='inline-block px-0.5 font-medium text-sm hover:underline'
        href={link}
      >
        {name}
      </Link>
    </div>
  )
}

export default LayoutsOverviewGridItem;
