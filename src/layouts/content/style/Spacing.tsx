import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StyleSpacing: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='text-xs font-medium uppercase'>
        Spacing
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-6 px-4'>
        <div className='relative border border-gray-200 dark:border-gray-700 text-sm rounded'>
          <span className='absolute top-0 left-0 p-1 text-xs'>Margin</span>
          <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center text-slate-800 dark:text-slate-200'
            type='number'  
            id='marginTop'
            placeholder='0' 
            max='999' 
          />

          <Row align='center' gapX={0}>
            <Col span={2}>
              <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center text-slate-800 dark:text-slate-200'
                type='number'  
                id='marginLeft'
                placeholder='0' 
                max='999' 
              />
            </Col>

            <Col span={8}>
              <div className='relative border border-gray-200 dark:border-gray-700 rounded'>
                <span className='absolute top-0 left-0 p-1 text-xs'>Padding</span>
                <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center text-slate-800 dark:text-slate-200'
                  type='number'  
                  id='paddingTop'
                  placeholder='0' 
                  max='999' 
                />

                <Row align='center' gapX={0}>
                  <Col span={3}>
                    <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center text-slate-800 dark:text-slate-200'
                      type='number'  
                      id='paddingLeft'
                      placeholder='0' 
                      max='999' 
                    />
                  </Col>

                  <Col span={6}>
                    <div className='p-0.5 border border-gray-200 dark:border-gray-700 rounded text-xs text-center'>
                      Content
                    </div>
                  </Col>

                  <Col span={3}>
                    <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center text-slate-800 dark:text-slate-200'
                      type='number'  
                      id='paddingRight'
                      placeholder='0' 
                      max='999' 
                    />
                  </Col>
                </Row>

                <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center text-slate-800 dark:text-slate-200'
                  type='number'  
                  id='paddingBottom'
                  placeholder='0' 
                  max='999' 
                />
              </div>
            </Col>

            <Col span={2}>
              <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center text-slate-800 dark:text-slate-200'
                type='number'  
                id='marginRight'
                placeholder='0' 
                max='999' 
              />
            </Col>
          </Row>

          <input className='appearance-textfield w-full px-1.5 py-1 bg-transparent outline-none text-center text-slate-800 dark:text-slate-200'
            type='number'  
            id='marginBottom'
            placeholder='0' 
            max='999' 
          />
        </div>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleSpacing;
