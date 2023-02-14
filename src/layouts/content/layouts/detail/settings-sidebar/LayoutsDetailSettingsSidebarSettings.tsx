import React from 'react';

import Form from 'components/Form';
import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';

const LayoutsDetailSettingsSidebarSettings: React.FC = () => {
  return (
    <div>
      {/* Actions */}
      <div className='mb-6'>
        <div className='mb-1 font-medium text-sm'>Actions</div>
        <Row gapX={10}>
          <Col span={6}>
            <Button
              size='sm'
              block
            >
              <Icon name='trash' size={16} />
              Remove
            </Button>
          </Col>

          <Col span={6}>
            <Button
              variant='primary'
              size='sm'
              block
            >
              <Icon name='plus' size={16} />
              Component
            </Button>
          </Col>
        </Row>
      </div>

      <Collapse active>
        <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
          Layout settings
        </Collapse.Trigger>

        <Collapse.Content className='pt-3 pb-5 px-1'>
          {/* Name */}
          <Form.Group>
            <Form.Input
              label='Name'
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
        </Collapse.Content>
      </Collapse>

      <Collapse active>
        <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
          Section settings
        </Collapse.Trigger>

        <Collapse.Content className='pt-3 pb-5 px-1'>
          {/* Name */}
          <Form.Group>
            <Form.Input
              label='Name'
              size='sm'
            />
          </Form.Group>

          {/* Id */}
          <Form.Group>
            <Form.Input
              label='Id'
              size='sm'
            />
          </Form.Group>
        </Collapse.Content>
      </Collapse>

      <Collapse active>
        <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
          Element settings/fields
        </Collapse.Trigger>

        <Collapse.Content className='pt-3 pb-5 px-1'>
          {/* Small text */}
          <Form.Group>
            <Form.Input
              label='Small text'
              size='sm'
            />
          </Form.Group>

          {/* Headline */}
          <Form.Group>
            <Form.Input
              label='Headline'
              size='sm'
            />
          </Form.Group>

          {/* Description */}
          <Form.Group>
            <Form.Input
              label='Description'
              size='sm'
            />
          </Form.Group>
        </Collapse.Content>
      </Collapse>
    </div>
  )
}

export default LayoutsDetailSettingsSidebarSettings;
