import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Icon from 'components/Icon';

const StyleTypography: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Typography
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-5 px-1'>
        {/* Font-family */}
        <Form.Group>
          <Form.Select 
            label='Font-family'
            size='sm'
            options={[
              {
                value: 'Sans serif',
                name: 'Sans serif'
              },
              {
                value: 'Roboto',
                name: 'Roboto'
              },
              {
                value: 'Hanken Grotesk',
                name: 'Hanken Grotesk'
              },
              {
                value: 'Chivo Mono',
                name: 'Chivo Mono'
              },
              {
                value: 'Unbounded',
                name: 'Unbounded'
              }
            ]} 
          />
        </Form.Group>

        {/* Text type */}
        <Form.Group>
          <Row gapX={6}>
            <Col span={6}>
              <Form.Select 
                label='Type'
                size='sm'
                options={[
                  {
                    value: 'h1',
                    name: 'h1'
                  },
                  {
                    value: 'h2',
                    name: 'h2'
                  },
                  {
                    value: 'h3',
                    name: 'h3'
                  },
                  {
                    value: 'h4',
                    name: 'h4'
                  },
                  {
                    value: 'h5',
                    name: 'h5'
                  },
                  {
                    value: 'h6',
                    name: 'h6'
                  },
                  {
                    value: 'p',
                    name: 'p'
                  }
                ]} 
              />
            </Col>

            {/* Size */}
            <Col span={6}>
              <Form.Select 
                label='Size'
                size='sm'
                options={[
                  {
                    value: 'xs',
                    name: 'xs'
                  },
                  {
                    value: 'sm',
                    name: 'sm'
                  },
                  {
                    value: 'base',
                    name: 'base'
                  },
                  {
                    value: 'lg',
                    name: 'lg'
                  },
                  {
                    value: 'xl',
                    name: 'xl'
                  },
                  {
                    value: '2xl',
                    name: '2xl'
                  },
                  {
                    value: '3xl',
                    name: '3xl'
                  },
                  {
                    value: '4xl',
                    name: '4xl'
                  },
                  {
                    value: '5xl',
                    name: '5xl'
                  }
                ]} 
              />
            </Col>
          </Row>
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

        <Form.Group>
          <Row gapX={6}>
            <Col span={6}>
              {/* Line-height */}
              <Form.Input 
                label='Line-height'
                size='sm'
                type='number' 
                placeholder='0' 
                prefix={<Icon name='line-height' size={16} />} 
                suffix={<span className='text-xs'>px</span>}
              />
            </Col>

            <Col span={6}>
              {/* Letter-spacing */}
              <Form.Input 
                label='Letter-spacing'
                size='sm'
                type='number' 
                placeholder='0' 
                prefix={<Icon name='letter-spacing' size={16} />} 
                suffix={<span className='text-xs'>px</span>}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row gapX={6}>
            <Col span={6}>
              {/* Styles */}
              <Row gapX={0} justify='around'>
                <Col>
                  <Form.Checkbox 
                    id='textBold'
                    value='bold'
                    hideCheckbox
                  >
                    <Icon name='text-bold' size={20} />
                  </Form.Checkbox>
                </Col>

                <Col>
                  <Form.Checkbox 
                    id='textItalic'
                    value='italic'
                    hideCheckbox
                  >
                    <Icon name='text-italic' size={20} />
                  </Form.Checkbox>
                </Col>

                <Col>
                  <Form.Checkbox 
                    id='textUnderline'
                    value='underline'
                    hideCheckbox
                  >
                    <Icon name='text-underline' size={20} />
                  </Form.Checkbox>
                </Col>
              </Row>
            </Col>

            <Col span={6}>
              {/* Transform */}
              <Row gapX={0} justify='around'>
                <Col>
                  <Form.Radio 
                    id='textUppercase'
                    name='textTransform'
                    value='uppercase'
                    hideRadio
                  >
                    <Icon name='text-uppercase' size={20} />
                  </Form.Radio>
                </Col>

                <Col>
                  <Form.Radio 
                    id='textNormal'
                    name='textTransform'
                    value='normal'
                    hideRadio
                  >
                    <Icon name='text-normal' size={20} />
                  </Form.Radio>
                </Col>

                <Col>
                  <Form.Radio 
                    id='textLowercase'
                    name='textTransform'
                    value='lowercase'
                    hideRadio
                  >
                    <Icon name='text-lowercase' size={20} />
                  </Form.Radio>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row gapX={6} justify='center'>
            <Col span={6}>
              {/* Align */}
              <Row gapX={0} justify='around'>
                <Col>
                  <Form.Radio 
                    id='alignLeft'
                    name='textAlign'
                    value='left'
                    hideRadio
                  >
                    <Icon name='text-align-left' size={20} />
                  </Form.Radio>
                </Col>

                <Col>
                  <Form.Radio 
                    id='alignCenter'
                    name='textAlign'
                    value='center'
                    hideRadio
                  >
                    <Icon name='text-align-center' size={20} />
                  </Form.Radio>
                </Col>

                <Col>
                  <Form.Radio 
                    id='alignRight'
                    name='textAlign'
                    value='right'
                    hideRadio
                  >
                    <Icon name='text-align-right' size={20} />
                  </Form.Radio>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleTypography;
