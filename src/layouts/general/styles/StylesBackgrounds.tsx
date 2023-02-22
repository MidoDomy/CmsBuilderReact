import React from 'react';

import Collapse from 'components/Collapse';
import Form from 'components/Form';

const StyleBackgrounds: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Backgrounds
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        <Form.Group>
          {/* Background image */}
          <Form.Label size='sm'>Background-image</Form.Label>
          <Form.FileUpload />
        </Form.Group>
        
        <Form.Group>
          {/* Background color */}
          <Form.Select 
            label='Background-color'
            size='sm'
            options={[
              {value: 'Black', name: 'Black'},
              {value: 'White', name: 'White'},
              {value: 'Gray', name: 'Gray'}
            ]} 
          />
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleBackgrounds;
