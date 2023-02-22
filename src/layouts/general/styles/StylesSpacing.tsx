import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';

const StyleSpacing: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Spacing
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        <div className='relative border border-gray-200 text-sm rounded'>
          <span className='absolute top-0 left-0 p-1 text-xs'>Margin</span>
          <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
            type='number'  
            id='marginTop'
            placeholder='-' 
            max='999' 
          />

          <Row align='center' gapX={0}>
            <Col span={2}>
              <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                type='number'  
                id='marginLeft'
                placeholder='-' 
                max='999' 
              />
            </Col>

            <Col span={8}>
              <div className='relative border border-gray-200 rounded'>
                <span className='absolute top-0 left-0 p-1 text-xs'>Padding</span>
                <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                  type='number'  
                  id='paddingTop'
                  placeholder='-' 
                  max='999' 
                />

                <Row align='center' gapX={0}>
                  <Col span={3}>
                    <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                      type='number'  
                      id='paddingLeft'
                      placeholder='-' 
                      max='999' 
                    />
                  </Col>

                  <Col span={6}>
                    <div className='p-0.5 border border-gray-200 rounded text-xs text-center'>
                      Content
                    </div>
                  </Col>

                  <Col span={3}>
                    <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                      type='number'  
                      id='paddingRight'
                      placeholder='-' 
                      max='999' 
                    />
                  </Col>
                </Row>

                <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                  type='number'  
                  id='paddingBottom'
                  placeholder='-' 
                  max='999' 
                />
              </div>
            </Col>

            <Col span={2}>
              <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
                type='number'  
                id='marginRight'
                placeholder='-' 
                max='999' 
              />
            </Col>
          </Row>

          <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center'
            type='number'  
            id='marginBottom'
            placeholder='-' 
            max='999' 
          />
        </div>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleSpacing;
