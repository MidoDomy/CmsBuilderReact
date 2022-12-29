import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Structuring/Row';
import Col from 'components/Structuring/Col';
import Form from 'components/Form';
import Icon from 'components/Icon';

const StyleTypography: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='text-xs font-medium uppercase'>
        Typography
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-6 px-4'>
        <Row cols={2} gap={6}>
          {/* Font */}
          <Col span={2}>
            <Form.Select options={['Sans serif', 'Roboto', 'Hanken Grotesk', 'Chivo Mono', 'Unbounded']} />
          </Col>

          {/* Type */}
          <Col span={2}>
            <Form.Group justify='around'>
              <Form.Radio id='H1' name='textType' hideRadio>H1</Form.Radio>
              <Form.Radio id='H2' name='textType' hideRadio>H2</Form.Radio>
              <Form.Radio id='H3' name='textType' hideRadio>H3</Form.Radio>
              <Form.Radio id='H4' name='textType' hideRadio>H4</Form.Radio>
              <Form.Radio id='H5' name='textType' hideRadio>H5</Form.Radio>
              <Form.Radio id='H6' name='textType' hideRadio>H6</Form.Radio>
              <Form.Radio id='p' name='textType' hideRadio>p</Form.Radio>
            </Form.Group>
          </Col>

          {/* Color */}
          <Col>
            <Form.Select options={['White', 'Black', 'Primary', 'Secondary']} />
          </Col>

          {/* Size */}
          <Col>
            <Form.Select options={['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']} />
          </Col>

          {/* Line-height */}
          <Col>
            <Form.Input 
              type='number' 
              prefix={<Icon name='line-height' size={16} />} 
              suffix='%' 
              placeholder='0' 
            />
          </Col>

          {/* Letter-spacing */}
          <Col>
            <Form.Input 
              type='number' 
              prefix={<Icon name='letter-spacing' size={16} />} 
              suffix='%' 
              placeholder='0' 
            />
          </Col>

          {/* Text-style */}
          <Col>
            <Form.Group justify='between' align='center'>
              <Form.Check id='textBold' name='textBold' hideCheck>
                <Icon name='text-bold' size={20} />
              </Form.Check>

              <Form.Check id='textItalic' name='textItalic' hideCheck>
                <Icon name='text-italic' size={20} />
              </Form.Check>

              <Form.Check id='textUnderline' name='textUnderline' hideCheck>
                <Icon name='text-underline' size={20} />
              </Form.Check>
            </Form.Group>
          </Col>

          {/* Text-transform */}
          <Col>
            <Form.Group justify='between'>
              <Form.Radio id='text-uppercase' name='textTransform' hideRadio>
                <Icon name='text-uppercase' size={20} />
              </Form.Radio>
              
              <Form.Radio id='text-normal' name='textTransform' hideRadio>
                <Icon name='text-normal' size={20} />
              </Form.Radio>
              
              <Form.Radio id='text-lowercase' name='textTransform' hideRadio>
                <Icon name='text-lowercase' size={20} />
              </Form.Radio>
            </Form.Group>
          </Col>

          {/* Text align */}
          <Col>
            <Form.Group justify='between'>
              <Form.Radio id='align-left' name='textAlign' hideRadio>
                <Icon name='text-align-left' size={20} />
              </Form.Radio>
              
              <Form.Radio id='align-center' name='textAlign' hideRadio>
                <Icon name='text-align-center' size={20} />
              </Form.Radio>
              
              <Form.Radio id='align-right' name='textAlign' hideRadio>
                <Icon name='text-align-right' size={20} />
              </Form.Radio>
              
              <Form.Radio id='align-justify' name='textAlign' hideRadio>
                <Icon name='text-align-justify' size={20} />
              </Form.Radio>
            </Form.Group>
          </Col>
        </Row>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleTypography;
