import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const DashboardSidebarSettings: React.FC = () => {
  return (
    <div>
      <h3 className='my-3 font-medium'>Layout</h3>

      <div>
        <Form.Group>
          <Row gapX={8} align='center'>
            <Col span={6}>
              <Form.Input 
                type='number'
                label='Columns'
                size='sm'
                defaultValue={20} 
              />
            </Col>

            <Col span={6}>
              <Form.Input 
                type='number'
                label='Rows'
                size='sm'
                defaultValue={15} 
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row gapX={8} align='center'>
            <Col span={6}>
              <Form.Input 
                type='number'
                label='Row height'
                size='sm'
                defaultValue={20} 
                suffix={<span className='text-sm'>px</span>}
              />
            </Col>

            <Col span={6}>
              <Form.Input 
                type='number'
                label='Gutter'
                size='sm'
                defaultValue={15} 
                suffix={<span className='text-sm'>px</span>}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Switch 
            id='fullWidthBoard' 
            label='Full width' 
          />
        </Form.Group>
      </div>
    </div>
  )
}

export default DashboardSidebarSettings;
