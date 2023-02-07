import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Icon from 'components/Icon';

const StyleAlign: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='text-xs font-medium uppercase'>
        Alignment
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-6 px-4'>
        <Row cols={2} gapX={4}>
          <Col>
            {/* Justify */}
            {/* <Form.Group justify='between'>
              <Form.Radio id='justifyStart' name='justify' hideRadio>
                <Icon name='justify-start' size={18} />
              </Form.Radio>
              
              <Form.Radio id='justifyCenter' name='justify' hideRadio>
                <Icon name='justify-center' size={18} />
              </Form.Radio>
              
              <Form.Radio id='justifyEnd' name='justify' hideRadio>
                <Icon name='justify-end' size={18} />
              </Form.Radio>
            </Form.Group> */}
          </Col>

          <Col>
            {/* Align */}
            {/* <Form.Group justify='between'>
              <Form.Radio id='alignStart' name='align' hideRadio>
                <Icon name='align-start' size={18} />
              </Form.Radio>
              
              <Form.Radio id='alignCenter' name='align' hideRadio>
                <Icon name='align-center' size={18} />
              </Form.Radio>
              
              <Form.Radio id='alignEnd' name='align' hideRadio>
                <Icon name='align-end' size={18} />
              </Form.Radio>
            </Form.Group> */}
          </Col>
        </Row>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleAlign;
