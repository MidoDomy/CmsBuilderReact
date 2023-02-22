import React, { useState } from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StylePosition: React.FC = () => {
  const [position, setPosition] = useState('static')

  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Position
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        {/* Position type */}
        <Form.Group>
          <Form.Select 
            label='Type'
            size='sm'
            value={position}
            options={[
              {value: 'static', name: 'Static'},
              {value: 'relative', name: 'Relative'},
              {value: 'absolute', name: 'Absolute'},
              {value: 'fixed', name: 'Fixed'},
              {value: 'sticky', name: 'Sticky'}
            ]}
            onChange={(e: any) => setPosition(e.target.value)}
          />
        </Form.Group>

        {position != 'static' &&
          <>
            {/* Position values */}
            <Form.Group>
              <div className='relative border border-gray-200 text-sm rounded'>
                <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                  type='number'  
                  id='positionTop'
                  placeholder='-' 
                  max='999' 
                />

                <Row align='center' gapX={0}>
                  <Col span={2}>
                    <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                      type='number'  
                      id='positionLeft'
                      placeholder='-' 
                      max='999' 
                    />
                  </Col>

                  <Col span={8}>
                    <div className='p-0.5 border border-gray-200 rounded text-xs text-center'>
                      Content
                    </div>
                  </Col>

                  <Col span={2}>
                    <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                      type='number'  
                      id='positionRight'
                      placeholder='-' 
                      max='999' 
                    />
                  </Col>
                </Row>

                <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                  type='number'  
                  id='positionBottom'
                  placeholder='-' 
                  max='999' 
                />
              </div>
            </Form.Group>

            {/* Z-index */}
            <Form.Group>
              <Form.Input 
                label='Z-index'
                size='sm'
                type='number'
              />
            </Form.Group>
          </>
        }
      </Collapse.Content>
    </Collapse>
  );
}

export default StylePosition;
