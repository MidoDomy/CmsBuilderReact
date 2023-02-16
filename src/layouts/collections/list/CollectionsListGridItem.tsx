import React from 'react';
import Link from 'next/link';

import Image from 'components/Image';
import CollectionsListItemDropdown from './CollectionsListItemDropdown';

type Props = {
  link: string;
  img?: string;
  name: string;
  count?: number;
  description?: string;
}

const CollectionsListGridItem: React.FC<Props> = ({link, img, name, count, description}) => {
  return (
    <div className='relative flex flex-col h-full bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow overflow-hidden'>
      <div className='absolute top-3 right-3'>
        <CollectionsListItemDropdown />
      </div>

      <div className='h-40'>
        <Image className='h-full w-full object-cover'
          src={img} 
          alt='Collection img'
        />
      </div>

      <div className='flex-1 pt-3 px-4 pb-6'>
        <Link className='inline-block mb-1 mr-2 font-medium hover:underline'
          href={link}
        >
          {name} {count && <span className='text-sm text-slate-500'>({count} Items)</span>}
        </Link>

        <div className='text-sm text-slate-500'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default CollectionsListGridItem;
