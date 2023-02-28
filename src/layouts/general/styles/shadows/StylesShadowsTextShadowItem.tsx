import React, { useState } from 'react';

import { FiTrash2 } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const StyleShadowsTextShadowItem: React.FC = () => {
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <Dropdown position='bottom left'>
        <div className='px-2 py-0.5 border border-gray-200 rounded'>
          <Row gapX={6} align='center'>
            <Col fill>
              <Dropdown.Trigger className='block font-medium text-xs text-slate-500'>
                0 0 2px <span className='inline-flex w-2.5 h-2.5 ml-1 mr-0.5 bg-black'></span> black
              </Dropdown.Trigger>
            </Col>

            <Col>
              <Button 
                variant='danger-ghost'
                size='xs'
                rounded
                onClick={() => setShowModalConfirmDeletion(true)}
              >
                <FiTrash2 size={14} />
              </Button>
            </Col>
          </Row>
        </div>

        <Dropdown.Menu className='-mr-1'>
          <div className='p-2'>
            <Form.Group>
              <Row gapX={8} align='center'>
                <Col span={6}>
                  {/* X offset */}
                  <Form.Group className='mb-1'>
                    <Row gapX={8}>
                      <Col className='text-right' 
                        span={4}
                      >
                        <Form.Label size='sm'>x</Form.Label>
                      </Col>

                      <Col fill>
                        <Form.Input 
                          size='sm'
                          placeholder='-'
                          suffix={<span className='text-xs'>px</span>}
                        />
                      </Col>
                    </Row>
                  </Form.Group>

                  {/* Y offset */}
                  <Form.Group>
                    <Row gapX={8}>
                      <Col className='text-right' 
                        span={4}
                      >
                        <Form.Label size='sm'>y</Form.Label>
                      </Col>

                      <Col fill>
                        <Form.Input 
                          size='sm'
                          placeholder='-'
                          suffix={<span className='text-xs'>px</span>}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>

                <Col fill>
                  {/* Center */}
                </Col>
              </Row>
            </Form.Group>

            {/* Blur */}
            <Form.Group>
              <Row gapX={8} align='center'>
                <Col className='text-right'
                  span={2}
                >
                  <Form.Label size='sm'>Blur</Form.Label>
                </Col>

                <Col fill>
                  <Form.Input 
                    size='sm'
                    placeholder='-'
                    suffix={<span className='text-xs'>px</span>}
                  />
                </Col>
              </Row>
            </Form.Group>

            {/* Color */}
            <Form.Group>
              <Row gapX={8} align='center'>
                <Col className='text-right'
                  span={2}
                >
                  <Form.Label size='sm'>Color</Form.Label>
                </Col>

                <Col fill>
                  <Form.Select 
                    size='sm'
                    options={[
                      {value: '#000000', name: 'Black'},
                      {value: '#ffffff', name: 'White'}
                    ]}
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      
      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </>
  );
}

export default StyleShadowsTextShadowItem;
