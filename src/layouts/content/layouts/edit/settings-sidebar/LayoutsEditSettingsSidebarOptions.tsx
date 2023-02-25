import React from 'react';

import { FiTrash2, FiPlus } from 'react-icons/fi';

import Form from 'components/Form';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';

const LayoutsEditSettingsSidebarOptions: React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      {/* Actions */}
      {/* <div>
        <Row gapX={10}>
          <Col span={6}>
            <Button
              size='sm'
              block
            >
              <FiTrash2 size={16} />
              Remove
            </Button>
          </Col>

          <Col span={6}>
            <Button
              variant='primary'
              size='sm'
              block
            >
              <FiPlus size={16} />
              Component
            </Button>
          </Col>
        </Row>
      </div> */}

      {/* General */}
      <div>
        <div className='mb-3 font-medium text-sm'>General:</div>

        <div>
          <Form.Group>
            {/* Name */}
            <Form.Input
              label='Layout name'
              size='sm'
            />
          </Form.Group>

          {/* Layout */}
          <Form.Group>
            <Form.Select
              label='Inherit layout'
              size='sm'
              options={[
                {
                  value: '',
                  name: 'Header and footer'
                }
              ]}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

export default LayoutsEditSettingsSidebarOptions;
