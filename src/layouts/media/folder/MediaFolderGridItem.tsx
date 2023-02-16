import React from 'react';

import Image from 'components/Image';

type Props = {
  image: string;
  name: string;
  size: string;
  active?: boolean;
}

const MediaFolderGridItem: React.FC<Props> = ({image, name, size, active}) => {
  return (
    <div className='cursor-pointer'>
      <div className={`aspect-video mb-2 rounded ring-2 ring-offset-2 hover:ring-sky-500 shadow-sm hover:shadow transition-all ${active ? 'ring-sky-500' : 'ring-transparent'}`}>
        <Image className='w-full h-full object-cover rounded-lg' 
          src={image} 
          alt={name}
        />
      </div>

      <div className='font-medium'>{name}</div>
      <div className='text-sm text-slate-500'>{size}</div>
    </div>
  )
}

export default MediaFolderGridItem;
