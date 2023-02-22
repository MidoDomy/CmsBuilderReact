import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StylesTransition: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Transition
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        <Form.Group>
          <Row gapX={6}>
            <Col span={6}>
              <Form.Input 
                label='Delay'
                size='sm'
                suffix={<span className='text-xs'>s</span>}
              />
            </Col>

            <Col span={6}>
              <Form.Input 
                label='Duration'
                size='sm'
                suffix={<span className='text-xs'>s</span>}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          {/* TODO: Multiselect */}
          <Form.Select
            label='Properties'
            size='sm'
            options={[
              {value: 'height', name: 'Height'}
            ]}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Timing function'
            size='sm'
          />
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default StylesTransition;
