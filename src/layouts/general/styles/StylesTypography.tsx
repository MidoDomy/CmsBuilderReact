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

      <Collapse.Content className='pt-3 pb-3 px-1'>
        <Form.Group>
          {/* Font-family */}
          <Form.Select 
            label='Font-family'
            size='sm'
            options={[
              {value: 'Sans serif', name: 'Sans serif'},
              {value: 'Roboto', name: 'Roboto'},
              {value: 'Hanken Grotesk', name: 'Hanken Grotesk'},
              {value: 'Chivo Mono', name: 'Chivo Mono'},
              {value: 'Unbounded', name: 'Unbounded'}
            ]} 
          />
        </Form.Group>

        <Form.Group>
          <Row gapX={6}>
            {/* Text type */}
            <Col span={6}>
              <Form.Select 
                label='Type'
                size='sm'
                options={[
                  {value: 'h1', name: 'h1'},
                  {value: 'h2', name: 'h2'},
                  {value: 'h3', name: 'h3'},
                  {value: 'h4', name: 'h4'},
                  {value: 'h5', name: 'h5'},
                  {value: 'h6', name: 'h6'},
                  {value: 'p', name: 'p'},
                  {value: 'span', name: 'span'}
                ]} 
              />
            </Col>

            {/* Size */}
            <Col span={6}>
              <Form.Input 
                label='Size'
                size='sm'
                defaultValue={16}
                placeholder='-'
                suffix={<span className='text-xs'>px</span>}
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
              {value: 'Black', name: 'Black'},
              {value: 'White', name: 'White'},
              {value: 'Gray', name: 'Gray'}
            ]} 
          />
        </Form.Group>

        <Form.Group>
          <Row gapX={6}>
            {/* Line-height */}
            <Col span={6}>
              <Form.Input 
                label='Line-height'
                size='sm'
                type='number' 
                defaultValue={100}
                placeholder='-' 
                prefix={<Icon name='line-height' size={16} />} 
                suffix={<span className='text-xs'>px</span>}
              />
            </Col>

            {/* Letter-spacing */}
            <Col span={6}>
              <Form.Input 
                label='Letter-spacing'
                size='sm'
                type='number' 
                defaultValue={0}
                placeholder='-' 
                prefix={<Icon name='letter-spacing' size={16} />} 
                suffix={<span className='text-xs'>px</span>}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row gapX={6}>
            {/* Styles */}
            <Col span={6}>
              <Form.Label size='sm'>Styles</Form.Label>
              <div className='py-1.5 border border-gray-200 rounded-md'>
                <Row gapX={0} justify='around'>
                  <Col>
                    <Form.Checkbox 
                      id='textBold'
                      value='bold'
                      hideCheckbox
                    >
                      <Icon name='text-bold' size={16} />
                    </Form.Checkbox>
                  </Col>

                  <Col>
                    <Form.Checkbox 
                      id='textItalic'
                      value='italic'
                      hideCheckbox
                    >
                      <Icon name='text-italic' size={16} />
                    </Form.Checkbox>
                  </Col>

                  <Col>
                    <Form.Checkbox 
                      id='textUnderline'
                      value='underline'
                      hideCheckbox
                    >
                      <Icon name='text-underline' size={16} />
                    </Form.Checkbox>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Transform */}
            <Col span={6}>
              <Form.Label size='sm'>Transform</Form.Label>
              <div className='py-1.5 border border-gray-200 rounded-md'>
                <Row gapX={0} justify='around'>
                  <Col>
                    <Form.Radio 
                      id='textUppercase'
                      name='textTransform'
                      value='uppercase'
                      hideRadio
                    >
                      <Icon name='text-uppercase' size={16} />
                    </Form.Radio>
                  </Col>

                  <Col>
                    <Form.Radio 
                      id='textNormal'
                      name='textTransform'
                      value='normal'
                      defaultChecked
                      hideRadio
                    >
                      <Icon name='text-normal' size={16} />
                    </Form.Radio>
                  </Col>

                  <Col>
                    <Form.Radio 
                      id='textLowercase'
                      name='textTransform'
                      value='lowercase'
                      hideRadio
                    >
                      <Icon name='text-lowercase' size={16} />
                    </Form.Radio>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          {/* Align */}
          <Form.Label size='sm'>Text-align</Form.Label>
          <div className='py-1.5 border border-gray-200 rounded-md'>
            <Row gapX={0} justify='around'>
              <Col>
                <Form.Radio 
                  id='textAlignLeft'
                  name='textAlign'
                  value='left'
                  defaultChecked
                  hideRadio
                >
                  <Icon name='text-align-left' size={16} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='textAlignCenter'
                  name='textAlign'
                  value='center'
                  hideRadio
                >
                  <Icon name='text-align-center' size={16} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='textAlignRight'
                  name='textAlign'
                  value='right'
                  hideRadio
                >
                  <Icon name='text-align-right' size={16} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='textAlignJustify'
                  name='textAlign'
                  value='justify'
                  hideRadio
                >
                  <Icon name='text-align-justify' size={16} />
                </Form.Radio>
              </Col>
            </Row>
          </div>
        </Form.Group>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleTypography;
