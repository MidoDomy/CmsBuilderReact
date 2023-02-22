import React from 'react';

import Collapse from 'components/Collapse';
import Form from 'components/Form';

const StylesEffects: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Effects
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        <Form.Group>
          <Form.Input
            label='Opacity'
            size='sm'
          />
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default StylesEffects;
