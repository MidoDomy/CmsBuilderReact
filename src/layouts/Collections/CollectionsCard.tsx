import React, {useState} from 'react';
import Link from 'next/link';

import Image from 'components/Image';

type Props = {
  className?: string,
  link: string,
  img?: string,
  name: string
}

const CollectionsCard: React.FC<Props> = ({className, link, img, name}) => {
  return (
    <Link href={link} className={`flex flex-col w-72 shadow-md bg-base-white p-4 rounded-lg cursor-pointer ${className}`}>
      <div className='relative flex-1 aspect-video'>
        <Image src={img} />
      </div>

      <div className='pt-1.5 font-medium text-base-dark'>
        {name}
      </div>
    </Link>
  )
}

CollectionsCard.defaultProps = {
  className: ''
}

export default CollectionsCard;
