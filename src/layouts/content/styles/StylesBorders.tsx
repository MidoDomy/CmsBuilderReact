import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Icon from 'components/Icon';

const StyleBorders: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Borders
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-5 px-1'>
        <Form.Group>
          {/* Border radius */}
          <Row gapX={6}>
            <Col span={5}>
              <Row gapX={6} gapY={6} align='start'>
                <Col span={4}>
                  <Form.Radio 
                    id='borderRadiusTopLeft'
                    name='borderRadius'
                    value='top-left'
                    hideRadio
                  >
                    <Icon className='-rotate-90' name='border-radius-top-right' />
                  </Form.Radio>
                </Col>

                <Col span={4}></Col>
                
                <Col span={4}>
                  <Form.Radio 
                    id='borderRadiusTopRight'
                    name='borderRadius'
                    value='top-right'
                    hideRadio
                  >
                    <Icon name='border-radius-top-right' />
                  </Form.Radio>
                </Col>
                
                <Col span={4}></Col>

                <Col span={4}>
                  <Form.Radio 
                    id='borderRadiusAll'
                    name='borderRadius'
                    value='all'
                    hideRadio
                  >
                    <Icon name='border-all' />
                  </Form.Radio>
                </Col>

                <Col span={4}></Col>

                <Col span={4}>
                  <Form.Radio 
                    id='borderRadiusBottomLeft'
                    name='borderRadius'
                    value='bottom-left'
                    hideRadio
                  >
                    <Icon className='rotate-180' name='border-radius-top-right' />
                  </Form.Radio>
                </Col>

                <Col span={4}></Col>

                <Col span={4}>
                  <Form.Radio 
                    id='borderRadiusBottomRight'
                    name='borderRadius'
                    value='bottom-right'
                    hideRadio
                  >
                    <Icon className='rotate-90' name='border-radius-top-right' />
                  </Form.Radio>
                </Col>
              </Row>
            </Col>

            <Col span={7}>
              <Form.Input 
                type='number' 
                label='Radius' 
                placeholder='0' 
                size='sm'
                suffix={<span className='text-xs'>px</span>} 
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          {/* Borders */}
          <Row gapX={6} align='center'>
            <Col span={5}>
              <Row className='h-auto' 
                gapX={6} 
                gapY={12}
              >
                <Col span={4}></Col>

                <Col span={4}>
                  <Form.Radio 
                    id='borderTop'
                    name='border'
                    value='top'
                    hideRadio
                  >
                    <Icon name='border-top' />
                  </Form.Radio>
                </Col>

                <Col span={4}></Col>

                <Col span={4}>
                  <Form.Radio 
                    id='borderLeft'
                    name='border'
                    value='left'
                    hideRadio
                  >
                    <Icon name='border-left' />
                  </Form.Radio>
                </Col>

                <Col span={4}>
                  <Form.Radio 
                    id='borderAll'
                    name='border'
                    value='all'
                    hideRadio
                  >
                    <Icon name='border-all' />
                  </Form.Radio>
                </Col>

                <Col span={4}>
                  <Form.Radio 
                    id='borderRight'
                    name='border'
                    value='right'
                    hideRadio
                  >
                    <Icon className='-rotate-90' name='border-bottom' />
                  </Form.Radio>
                </Col>

                <Col span={4}></Col>

                <Col span={4}>
                  <Form.Radio 
                    id='borderBottom'
                    name='border'
                    value='bottom'
                    hideRadio
                  >
                    <Icon name='border-bottom' />
                  </Form.Radio>
                </Col>

                <Col span={4}></Col>
              </Row>
            </Col>

            <Col span={7}>
              <Form.Group>
                {/* Style */}
                <Form.Select 
                  label='Style' 
                  size='sm'
                  options={[
                    {
                      value: 'solid',
                      name: 'Solid'
                    },
                    {
                      value: 'dashed',
                      name: 'Dashed'
                    }
                  ]}
                />
              </Form.Group>

              <Form.Group>
                {/* Size */}
                <Form.Input 
                  label='Size'
                  size='sm'
                  type='number' 
                  placeholder='0' 
                  suffix={<span className='text-xs'>px</span>}
                />
              </Form.Group>
        
              <Form.Group>
                {/* Color */}
                <Form.Select 
                  label='Color'
                  size='sm'
                  options={[
                    {
                      value: 'Black',
                      name: 'Black'
                    },
                    {
                      value: 'White',
                      name: 'White'
                    },
                    {
                      value: 'Gray',
                      name: 'Gray'
                    }
                  ]} 
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleBorders;
