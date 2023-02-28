import React, { useState } from 'react';

import { FiTrash2 } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const StyleTransitionItem: React.FC = () => {
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <Dropdown position='bottom left'>
        <div className='px-2 py-0.5 border border-gray-200 rounded'>
          <Row gapX={6} align='center'>
            <Col fill>
              <Dropdown.Trigger className='block font-medium text-xs text-slate-500'>
                2s opacity linear 0s
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
              <Row gapX={6}>
                {/* Delay */}
                <Col span={6}>
                  <Form.Input 
                    label='Delay'
                    size='sm'
                    suffix={<span className='text-xs'>ms</span>}
                  />
                </Col>

                {/* Duration */}
                <Col span={6}>
                  <Form.Input 
                    label='Duration'
                    size='sm'
                    suffix={<span className='text-xs'>ms</span>}
                  />
                </Col>
              </Row>
            </Form.Group>

            {/* Properties */}
            <Form.Group>
              {/* TODO: Multiselect */}
              <Form.Select
                label='Properties'
                size='sm'
                options={[
                  {value: 'height', name: 'Height'}
                ]}
              />
            </Form.Group>

            {/* Timing */}
            <Form.Group>
              <Form.Input
                label='Timing function'
                size='sm'
              />
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

export default StyleTransitionItem;
