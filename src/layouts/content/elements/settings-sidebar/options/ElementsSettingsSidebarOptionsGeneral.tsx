import React from 'react';

import Collapse from 'components/Collapse';
import Form from 'components/Form';

const ElementsSettingsSidebarOptionsGeneral: React.FC = () => {
  return (
    <Collapse active>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        General
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-5 px-1'>
        <Form.Group>
          {/* Name */}
          <Form.Input
            label='Element name'
            size='sm'
          />
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default ElementsSettingsSidebarOptionsGeneral;
