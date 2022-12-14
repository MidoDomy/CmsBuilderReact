import React from 'react';

type Props = {
  className?: string,
  color: string,
  name: string
}

const ColorCard: React.FC<Props> = ({className, color, name}) => {
  return (
    <div className={`flex flex-col w-56 shadow-md bg-base-white p-4 rounded-lg ${className}`}>
      <div className='relative flex-1 aspect-video overflow-hidden'>
        <input className='absolute -mt-[25%] -ml-[25%] w-[150%] h-[150%] bg-transparent'
          type="color" 
          defaultValue={color} 
        />
      </div>

      <div className='pt-1.5 font-medium text-base-dark'>
        {name}
      </div>
    </div>
  )
}

ColorCard.defaultProps = {
  className: ''
}

export default ColorCard;
