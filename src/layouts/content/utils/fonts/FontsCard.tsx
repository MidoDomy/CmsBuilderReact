import React from 'react';

import Tag from 'components/Tag';
import FontsCardDropdown from './FontsCardDropdown';

type Props = {
  name: string;
  weights: Array<string>;
  text: string;
  fontSize: number;
  fontWeight: number;
  italic: boolean;
}

const FontsCard: React.FC<Props> = ({name, weights, text, fontSize, fontWeight, italic}) => {
  return (
    <div className='relative p-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
      {/* Dropdown menu */}
      <div className='absolute top-4 right-4'>
        <FontsCardDropdown />
      </div>
      
      {/* Font info */}
      <div className='flex flex-col'>
        <div className='mb-1.5 font-medium text-lg'>
          {name}
        </div>

        <div className='flex flex-wrap gap-1 mb-6'>
          {weights.map((weight, index) => (
            <Tag key={index}>{weight}</Tag>
          ))}
        </div>

        <div style={{fontSize: fontSize + 'px', fontWeight: fontWeight, fontStyle: italic ? 'italic' : 'normal'}}>
          {text}
        </div>
      </div>
    </div>
  )
}

FontsCard.defaultProps = {
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  fontSize: 22,
  fontWeight: 400,
  italic: false
}

export default FontsCard;
