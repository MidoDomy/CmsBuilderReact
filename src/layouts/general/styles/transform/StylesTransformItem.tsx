import React, { useState } from 'react';

import { FiTrash2 } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const StyleTransformItem: React.FC = () => {
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <Dropdown position='bottom left'>
        <div className='px-2 py-0.5 border border-gray-200 rounded'>
          <Row gapX={6} align='center'>
            <Col fill>
              <Dropdown.Trigger className='block font-medium text-xs text-slate-500'>
                scale: 1, 1, 1
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
            {/* Type */}
            <Form.Group>
              <Form.Label size='sm'>Type</Form.Label>
              
              <Form.InputGroup className='border border-gray-200 rounded text-center text-xs'>
                <Form.Radio className='flex-1 py-1 !border-r'
                  id='transformTransformTypeMove'
                  name='transformTransformType'
                  value='move'
                  defaultChecked
                  hideRadio
                >
                  Move
                </Form.Radio>

                <Form.Radio className='flex-1 py-1 !border-r'
                  id='transformTransformTypeScale'
                  name='transformTransformType'
                  value='scale'
                  hideRadio
                >
                  Scale
                </Form.Radio>

                <Form.Radio className='flex-1 py-1 !border-r'
                  id='transformTransformTypeRotate'
                  name='transformTransformType'
                  value='rotate'
                  hideRadio
                >
                  Rotate
                </Form.Radio>

                <Form.Radio className='flex-1 py-1'
                  id='transformTransformTypeSkew'
                  name='transformTransformType'
                  value='skew'
                  hideRadio
                >
                  Skew
                </Form.Radio>
              </Form.InputGroup>
            </Form.Group>

            {/* X */}
            <Form.Group>
              <Row align='center' gapX={8}>
                <Col span={1}>
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

            {/* Y */}
            <Form.Group>
              <Row align='center' gapX={8}>
                <Col span={1}>
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

            {/* Z */}
            <Form.Group>
              <Row align='center' gapX={8}>
                <Col span={1}>
                  <Form.Label size='sm'>z</Form.Label>
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

export default StyleTransformItem;
