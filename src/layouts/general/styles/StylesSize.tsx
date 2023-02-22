import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StyleSize: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Size
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        <Form.Group>
          <Row gapX={6}>
            <Col span={6}>
              <Form.Input
                type='number' 
                label='Width'
                placeholder='-' 
                suffix={<span className='text-xs'>px</span>}
                size='sm'
              />
            </Col>

            <Col span={6}>
              <Form.Input
                type='number' 
                label='Height'
                placeholder='-' 
                suffix={<span className='text-xs'>px</span>}
                size='sm'
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row gapX={6}>
            <Col span={6}>
              <Form.Input
                type='number' 
                label='Max-width'
                placeholder='-' 
                suffix={<span className='text-xs'>px</span>}
                size='sm'
              />
            </Col>

            <Col span={6}>
              <Form.Input
                type='number' 
                label='Max-height'
                placeholder='-' 
                suffix={<span className='text-xs'>px</span>}
                size='sm'
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row gapX={6}>
            <Col span={6}>
              <Form.Input
                type='number' 
                label='Min-width'
                placeholder='-' 
                suffix={<span className='text-xs'>px</span>}
                size='sm'
              />
            </Col>

            <Col span={6}>
              <Form.Input
                type='number' 
                label='Min-height'
                placeholder='-' 
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

export default StyleSize;
