import React from 'react';

import Tooltip from 'components/Tooltip';
import ColorsGroupItemDropdown from './ColorsGroupItemDropdown';

type Props = {
  color: string,
  name: string
}

const ColorsGroupItem: React.FC<Props> = ({color, name}) => {
  return (
    <div className='relative [&:hover>:first-child>div]:opacity-100'>
      {/* Dropdown menu */}
      <div className='absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-10'>
        <ColorsGroupItemDropdown />
      </div>

      {/* Color */}
      <div className='relative w-16 h-10 rounded ring-1 ring-black/5 shadow-sm hover:shadow overflow-hidden'
        style={{background: color}}
      ></div>

      {/* Info */}
      <Tooltip 
        text='Copied!' 
        small 
        click
        onClick={() => {navigator.clipboard.writeText(color)}}
      >
        <div className='pt-1.5 px-0.5 text-xs cursor-pointer'>
          <div className='font-medium'>{name}</div>
          <div className='text-slate-500 font-mono lowercase'>{color}</div>
        </div>
      </Tooltip>
    </div>
  )
}

export default ColorsGroupItem;
