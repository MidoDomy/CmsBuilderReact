import React from 'react';
import Tooltip from 'components/Tooltip';

type Props = {
  className?: string,
  color: string,
  name: string
}

const Color: React.FC<Props> = ({className, color, name}) => {
  return (
    <div className={className ? className : ''}>
      {/* Color */}
      <div className='relative w-16 h-10 rounded ring-1 ring-black/5 dark:ring-white/10 overflow-hidden'>
        <input className='absolute -mt-[25%] -ml-[25%] w-[150%] h-[200%] bg-transparent cursor-pointer'
          type="color" 
          defaultValue={color} 
        />
      </div>

      {/* Info */}
      <Tooltip 
        text='Copied!' 
        small 
        click
        onClick={() => {navigator.clipboard.writeText(color)}}
      >
        <div className='pt-1.5 px-0.5 text-xs cursor-pointer'>
          <div className='font-medium text-slate-900 dark:text-white'>{name}</div>
          <div className='text-slate-500 font-mono lowercase dark:text-slate-400'>{color}</div>
        </div>
      </Tooltip>
    </div>
  )
}

Color.defaultProps = {
  className: ''
}

export default Color;
