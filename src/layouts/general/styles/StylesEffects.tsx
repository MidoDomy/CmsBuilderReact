import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StylesEffects: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Effects
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        <Form.Group>
          <Form.Label size='sm'>Opacity</Form.Label>
          <Row align='center' gapX={8}>
            <Col fill>
              <Form.Range
                size='sm'
                defaultValue={100}
                min={0}
                max={100}
              />
            </Col>

            <Col span={3}>
              <Form.Input 
                size='sm'
                defaultValue={100}
                placeholder='-'
                suffix={<span className='text-xs'>px</span>}
              />
            </Col>
          </Row>
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default StylesEffects;
