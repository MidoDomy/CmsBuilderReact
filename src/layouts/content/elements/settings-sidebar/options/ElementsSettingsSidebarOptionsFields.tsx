import React from 'react';

import Collapse from 'components/Collapse';
import Form from 'components/Form';

const ElementsSettingsSidebarOptionsFields: React.FC = () => {
  return (
    <Collapse active>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Fields
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-5 px-1'>
        <Form.Group>
          {/* Image */}
          <Form.Label size='sm'>Image</Form.Label>
          <Form.FileUpload />
        </Form.Group>

        <Form.Group>
          {/* Name */}
          <Form.Input
            label='Name'
            size='sm'
          />
        </Form.Group>

        <Form.Group>
          {/* Description */}
          <Form.Input
            label='Description'
            size='sm'
          />
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default ElementsSettingsSidebarOptionsFields;
