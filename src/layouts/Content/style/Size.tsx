import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StyleSize: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='text-xs font-medium uppercase'>
        Size
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-6 px-4'>
        <Row cols={2} gap={6}>
          <Col>
            <Form.Input
              type='number' 
              placeholder='0' 
              prefix='W' 
              suffix='px'
            />
          </Col>

          <Col>
            <Form.Input
              type='number' 
              placeholder='0' 
              prefix='H' 
              suffix='px'
            />
          </Col>

          <Col>
            <Form.Input
              type='number' 
              placeholder='0' 
              prefix='minW' 
              suffix='px'
            />
          </Col>

          <Col>
            <Form.Input
              type='number' 
              placeholder='0' 
              prefix='minH' 
              suffix='px'
            />
          </Col>

          <Col>
            <Form.Input
              type='number' 
              placeholder='0' 
              prefix='maxW' 
              suffix='px'
            />
          </Col>

          <Col>
            <Form.Input
              type='number' 
              placeholder='0' 
              prefix='maxH' 
              suffix='px'
            />
          </Col>
        </Row>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleSize;
