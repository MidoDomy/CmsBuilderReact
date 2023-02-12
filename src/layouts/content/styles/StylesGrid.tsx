import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StyleGrid: React.FC = () => {
  return (
    <Collapse active>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Grid
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-5 px-1'>
        <Form.Group>
          <Row gapX={6}>
            {/* Cols */}
            <Col span={6}>
              <Form.Input
                type='number' 
                label='Cols'
                placeholder='0' 
                size='sm'
              />
            </Col>

            {/* Rows */}
            <Col span={6}>
              <Form.Input
                type='number' 
                label='Rows'
                placeholder='0' 
                size='sm'
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row gapX={6}>
            {/* Cell width */}
            <Col span={6}>
              <Form.Input
                type='number' 
                label='Cell-width'
                placeholder='0' 
                suffix={<span className='text-xs'>px</span>}
                size='sm'
              />
            </Col>

            {/* Cell height */}
            <Col span={6}>
              <Form.Input
                type='number' 
                label='Cell-height'
                placeholder='0' 
                suffix={<span className='text-xs'>px</span>}
                size='sm'
              />
            </Col>
          </Row>
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleGrid;
