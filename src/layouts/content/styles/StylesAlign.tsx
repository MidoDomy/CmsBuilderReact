import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Icon from 'components/Icon';

const StylesAlign: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Alignment
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-5 px-1'>
        <Row>
          <Col span={6}>
            {/* Justify */}
            <Row gapX={4} justify='between'>
              <Col>
                <Form.Radio 
                  id='justifyStart' 
                  value='start'
                  name='justify' 
                  hideRadio
                >
                  <Icon name='justify-start' size={18} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='justifyCenter' 
                  value='center'
                  name='justify' 
                  hideRadio
                >
                  <Icon name='justify-center' size={18} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='justifyEnd' 
                  value='end'
                  name='justify' 
                  hideRadio
                >
                  <Icon name='justify-end' size={18} />
                </Form.Radio>
              </Col>
            </Row>
          </Col>

          <Col span={6}>
            {/* Align */}
            <Row gapX={4} justify='between'>
              <Col>
                <Form.Radio 
                  id='alignStart' 
                  value='start'
                  name='align' 
                  hideRadio
                >
                  <Icon name='align-start' size={18} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='alignCenter' 
                  value='center'
                  name='align' 
                  hideRadio
                >
                  <Icon name='align-center' size={18} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='alignEnd' 
                  value='end'
                  name='align' 
                  hideRadio
                >
                  <Icon name='align-end' size={18} />
                </Form.Radio>
              </Col>
            </Row>
          </Col>
        </Row>
      </Collapse.Content>
    </Collapse>
  );
}

export default StylesAlign;
