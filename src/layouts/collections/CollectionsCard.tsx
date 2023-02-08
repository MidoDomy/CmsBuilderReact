import React from 'react';
import Link from 'next/link';

import Image from 'components/Image';

type Props = {
  link: string;
  img?: string;
  name: string;
  count?: number;
  description?: string;
}

const CollectionsOverviewCard: React.FC<Props> = ({link, img, name, count, description}) => {
  return (
    <Link className='block h-full bg-white border border-gray-200 rounded-md cursor-pointer hover:shadow transition-shadow'
      href={link}
    >
      <div className='aspect-video'>
        <Image className='h-full w-full object-cover'
          src={img} 
          alt='Collection img'
        />
      </div>

      <div className='flex flex-col gap-2 h-28 p-4'>
        <div>
          <span className='font-medium'>{name}</span> {count && <span className='text-sm text-slate-500'>({count} Items)</span>}
        </div>

        <div className='text-sm text-slate-500'>
          {description}
        </div>
      </div>
    </Link>
  )
}

export default CollectionsOverviewCard;
