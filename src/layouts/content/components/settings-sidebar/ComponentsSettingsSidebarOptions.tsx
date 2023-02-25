import React, { useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';

const ComponentsSettingsSidebarOptions: React.FC = () => {
  const [variants, setVariants] = useState([
    {id: 0, name: 'Size', options: [
      {value: 'sm', name: 'Small'},
      {value: 'md', name: 'Medium'},
      {value: 'lg', name: 'Large'}
    ]},
    {id: 1, name: 'Type', options: [
      {value: 'primary', name: 'Primary'},
      {value: 'secondary', name: 'Secondary'},
      {value: 'info', name: 'Info'}
    ]}
  ]);

  return (
    <div className='flex flex-col gap-5'>
      {/* Variants */}
      <div>
        <div className='mb-3'>
          <Row justify='between' align='center' gapX={8}>
            <Col>
              <div className='font-medium text-sm'>Variants:</div>
            </Col>

            <Col>
              <Button
                variant='ghost'
                size='sm'
                rounded
              >
                <FiPlus size={14} />
              </Button>
            </Col>
          </Row>
        </div>

        <div>
          {variants?.map(variant => 
            <Form.Group key={variant.id}>
              <Row gapX={12} align='center'>
                <Col span={3}>
                  <Form.Label size='sm'>{variant.name}</Form.Label>
                </Col>

                <Col fill>
                  <Form.Select 
                    size='sm'
                    options={variant.options}
                  />
                </Col>
              </Row>
            </Form.Group>
          )}
        </div>
      </div>

      {/* Properties (standard / not changeable options for component) */}
      <div>
        <div className='mb-3 font-medium text-sm'>Properties:</div>

        <div>
          <Form.Group>
            <Form.Select 
              label='Icon'
              size='sm'
              options={[
                {value: 'arrow-right', name: 'Arrow right'}
              ]}
            />
          </Form.Group>

          <Form.Group>
            <Form.Input  
              label='Header'
              size='sm'
            />
          </Form.Group>

          <Form.Group>
            <Form.Textarea 
              label='Content'
              small
            />
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

export default ComponentsSettingsSidebarOptions;
