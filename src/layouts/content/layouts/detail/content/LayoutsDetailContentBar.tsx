import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';

const LayoutsDetailContentBar: React.FC = () => {
  return (
    <div className='sticky top-5 left-0 right-0'>
      <div className='absolute left-1/2 -translate-x-1/2 min-w-[1000px] px-3 py-1.5 bg-gray-100 rounded-lg shadow'>
        <Row gapX={10} align='center'>
          <Col span={4}>
            <div className='inline-block py-1 px-1.5 border border-gray-200 rounded-md'>
              <Row gapX={5} align='center'>
                <Col>
                  <Button
                    variant='ghost'
                    size='xs'
                    square
                  >
                    <Icon name='mobile' size={16} />
                  </Button>
                </Col>

                <Col>
                  <Button
                    variant='ghost'
                    size='xs'
                    square
                  >
                    <Icon name='tablet' size={16} />
                  </Button>
                </Col>

                <Col>
                  <Button
                    variant='ghost'
                    size='xs'
                    square
                  >
                    <Icon name='laptop' size={16} />
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col span={4}>
            <div className='text-center text-sm text-slate-500'>
              Viewport size
            </div>
            
            <div className='pt-0.5 font-medium text-center text-sm'>
              1280(px) x 1780(px)
            </div>
          </Col>

          <Col span={4}>
            <div className='text-end'>
              <Button 
                variant='primary'
                size='sm'
              >
                Publish
                <Icon name='arrow-head-right' size={16} />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LayoutsDetailContentBar;
