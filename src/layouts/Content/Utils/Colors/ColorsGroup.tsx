import React from 'react';

import Flex from 'components/Structuring/Flex';
import Color from 'layouts/content/utils/colors/Color';

type Props = {
  className?: string,
  name?: string,
  colors: Object
}

const ColorsGroup: React.FC<Props> = ({className, name, colors, ...props}) => {
  return (
    <Flex className={className} 
      gap={16} 
      wrap={false}
      {...props}
    >
      <div className='w-16 shrink-0'>
        <div className='text-sm font-semibold text-slate-900 dark:text-slate-200'>{name}</div>
      </div>

      <Flex gap={10}>
        {colors?.map((color, index) => (
          <Color
            key={index}
            name={color.name} 
            color={color.value} 
          />
        ))}
      </Flex>
    </Flex>
  )
}

ColorsGroup.defaultProps = {
  className: '',
  name: ''
}

export default ColorsGroup;
