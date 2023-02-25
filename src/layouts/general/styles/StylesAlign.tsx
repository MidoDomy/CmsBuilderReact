import React from 'react';

import { CiAlignBottom, CiAlignCenterH, CiAlignCenterV, CiAlignLeft, CiAlignRight, CiAlignTop } from 'react-icons/ci';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

const StylesAlign: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Alignment
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        <Row>
          {/* Justify */}
          <Col span={6}>
            <Row gapX={4} justify='between'>
              <Col>
                <Form.Radio 
                  id='justifyStart' 
                  value='start'
                  name='justify' 
                  defaultChecked
                  hideRadio
                >
                  <CiAlignLeft size={22} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='justifyCenter' 
                  value='center'
                  name='justify' 
                  hideRadio
                >
                  <CiAlignCenterH size={22} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='justifyEnd' 
                  value='end'
                  name='justify' 
                  hideRadio
                >
                  <CiAlignRight size={22} />
                </Form.Radio>
              </Col>
            </Row>
          </Col>

          {/* Align */}
          <Col span={6}>
            <Row gapX={4} justify='between'>
              <Col>
                <Form.Radio 
                  id='alignStart' 
                  value='start'
                  name='align' 
                  defaultChecked
                  hideRadio
                >
                  <CiAlignTop size={22} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='alignCenter' 
                  value='center'
                  name='align' 
                  hideRadio
                >
                  <CiAlignCenterV size={22} />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio 
                  id='alignEnd' 
                  value='end'
                  name='align' 
                  hideRadio
                >
                  <CiAlignBottom size={22} />
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
