import React from 'react';

import Form from 'components/Form';

const ElementsSettingsSidebarOptionsGeneral: React.FC = () => {
  return (
    <div>
      <Form.Group>
        {/* Name */}
        <Form.Input
          label='Element name'
          size='sm'
        />
      </Form.Group>
    </div>
  );
}

export default ElementsSettingsSidebarOptionsGeneral;
