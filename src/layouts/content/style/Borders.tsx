import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Icon from 'components/Icon';

const StyleBorders: React.FC = () => {
  return (
    <Collapse>
      <Collapse.Trigger className='text-xs font-medium uppercase'>
        Borders
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-6 px-4'>
        {/* Border radius */}
        <Row cols={2} gapX={6} align='center' className='mb-6'>
          <Col>
            <Row cols={3} gapX={6} align='center'>
              {/* <Col>
                <Form.Radio id='borderRadiusTopLeft' name='borderRadius' hideRadio>
                  <Icon className='-rotate-90' name='border-radius-top-right' />
                </Form.Radio>
              </Col>
              <Col></Col>
              <Col>
                <Form.Radio id='borderRadiusTopRight' name='borderRadius' hideRadio>
                  <Icon name='border-radius-top-right' />
                </Form.Radio>
              </Col>
              
              <Col></Col>
              <Col>
                <Form.Radio id='borderRadiusAll' name='borderRadius' hideRadio>
                  <Icon name='border-all' />
                </Form.Radio>
              </Col>
              <Col></Col>

              <Col>
                <Form.Radio id='borderRadiusBottomLeft' name='borderRadius' hideRadio>
                  <Icon className='rotate-180' name='border-radius-top-right' />
                </Form.Radio>
              </Col>
              <Col></Col>
              <Col>
                <Form.Radio id='borderRadiusBottomRight' name='borderRadius' hideRadio>
                  <Icon className='rotate-90' name='border-radius-top-right' />
                </Form.Radio>
              </Col> */}
            </Row>
          </Col>

          <Col>
            <Form.Input type='number' suffix='px' placeholder='0' />
          </Col>
        </Row>

        {/* Borders */}
        <Row cols={2} gapX={6} align='center'>
          <Col>
            <Row cols={3} gapX={6} align='center'>
              {/* <Col>
                <Form.Radio id='borderLeft' name='borderSide' hideRadio>
                  <Icon name='border-left' />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio id='borderTop' name='borderSide' hideRadio>
                  <Icon name='border-top' />
                </Form.Radio>
                
                <Form.Radio className='my-2.5' id='borderAll' name='borderSide' hideRadio>
                  <Icon name='border-all' />
                </Form.Radio>

                <Form.Radio id='borderBottom' name='borderSide' hideRadio>
                  <Icon name='border-bottom' />
                </Form.Radio>
              </Col>

              <Col>
                <Form.Radio id='borderRight' name='borderSide' hideRadio>
                  <Icon className='-rotate-90' name='border-bottom' />
                </Form.Radio>
              </Col> */}
            </Row>
          </Col>

          <Col>
            {/* <Form.Group className='mb-1.5' justify='between' align='center'>
              <Form.Radio id='none' name='borderStyle' hideRadio>
                <Icon name='x' size={18} />
              </Form.Radio>

              <Form.Radio id='solid' name='borderStyle' hideRadio>
                <div className='py-2'>
                  <div className='w-5 border-t-2 border-solid border-slate-900 dark:border-white'></div>
                </div>
              </Form.Radio>

              <Form.Radio id='dashed' name='borderStyle' hideRadio>
                <div className='py-2'>
                  <div className='w-5 border-t-2 border-dashed border-slate-900 dark:border-white'></div>
                </div>
              </Form.Radio>

              <Form.Radio id='doted' name='borderStyle' hideRadio>
                <div className='py-2'>
                  <div className='w-5 border-t-2 border-dotted border-slate-900 dark:border-white'></div>
                </div>
              </Form.Radio>
            </Form.Group>

            <Form.Input className='mb-1.5' type='number' suffix='px' placeholder='0' />

            <Form.Select options={['White', 'Black', 'Primary', 'Secondary']} /> */}
          </Col>
        </Row>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleBorders;
