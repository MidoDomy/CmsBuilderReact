import React from 'react';

import Icon from 'components/Icon';
import Tooltip from 'components/Tooltip';
import IconsCardDropdown from './IconsCardDropdown';

type Props = {
  icon: string
}

const IconsCard: React.FC<Props> = ({icon}) => {
  return (
    <div className='[&:hover>:first-child>div]:opacity-100 relative max-w-[50px]'>            
      {/* Dropdown menu */}
      <div className='absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-10'>
        <IconsCardDropdown />
      </div>

      {/* Info */}
      <Tooltip 
        text='Copied!' 
        small 
        click
        onClick={() => {navigator.clipboard.writeText(icon)}}
      >
        <div className='aspect-square p-3 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow cursor-pointer'>
          <Icon name={icon} size={24} />
        </div>
      </Tooltip>
    </div>
  )
}

export default IconsCard;
