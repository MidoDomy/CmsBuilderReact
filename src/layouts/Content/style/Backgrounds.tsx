import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Structuring/Row';
import Col from 'components/Structuring/Col';
import Form from 'components/Form';

const StyleBackgrounds: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='text-xs font-medium uppercase'>
        Backgrounds
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-6 px-4'>
        <Row cols={1} gap={6}>
          <Col>
            <span className='text-xs'>Uploud (To-do)</span> 
          </Col>

          <Col>
            <Form.Select options={['White', 'Black', 'Primary', 'Secondary']} />
          </Col>
        </Row>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleBackgrounds;
