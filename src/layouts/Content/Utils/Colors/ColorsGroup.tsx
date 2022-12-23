import React from 'react';

import Color from 'layouts/Content/Utils/Colors/Color';

type Props = {
  className?: string,
  name?: string,
  colors: Object
}

const ColorsGroup: React.FC<Props> = ({className, name, colors, ...props}) => {
  return (
    <div className={`flex gap-4 mb-8 last:mb-0 ${className ? className : ''}`} {...props}>
      <div className='w-16 shrink-0'>
        <div className='text-sm font-semibold text-slate-900 dark:text-slate-200'>{name}</div>
      </div>

      <div className='flex gap-2.5 flex-wrap'>
        {colors?.map((color, index) => (
          <Color
            key={index}
            name={color.name} 
            color={color.value} 
          />
        ))}
      </div>
    </div>
  )
}

ColorsGroup.defaultProps = {
  className: '',
  name: ''
}

export default ColorsGroup;
