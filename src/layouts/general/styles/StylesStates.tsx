import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StylesStates: React.FC = () => {
  return (
    <div className='mb-5 px-2'>
      <Row gapX={12} align='center' justify='end'>
        <Col span={2}>
          <Form.Label size='sm'>State</Form.Label>
        </Col>

        <Col span={5}>
          <Form.Select 
            size='sm'
            options={[
              {value: 'default', name: 'Default'},
              {value: 'hover', name: 'Hover'},
              {value: 'focus', name: 'Focus/Pressed'},
              {value: 'visited', name: 'Visited/Active'}
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default StylesStates;
