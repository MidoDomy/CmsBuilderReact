import React from 'react';

import Collapse from 'components/Collapse';

const StylesTransform: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Transform
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        TODO: Transforms
      </Collapse.Content>
    </Collapse>
  );
}

export default StylesTransform;
