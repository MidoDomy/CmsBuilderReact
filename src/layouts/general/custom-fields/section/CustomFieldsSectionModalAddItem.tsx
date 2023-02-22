import React, { useState } from 'react';

import Modal from 'components/Modal';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import Divider from 'components/Divider';
import CustomFieldsSectionModalAddTextarea from './modal-add/CustomFieldsSectionModalAddTextarea';
import CustomFieldsSectionModalAddSelect from './modal-add/CustomFieldsSectionModalAddSelect';
import CustomFieldsSectionModalAddText from './modal-add/CustomFieldsSectionModalAddNumber';
import CustomFieldsSectionModalAddNumber from './modal-add/CustomFieldsSectionModalAddNumber';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const CustomFieldsSectionModalAddItem: React.FC<Props> = ({isOpen, onClose}) => {
  const types = [
    {
      value: 'text',
      name: 'Text'
    },
    {
      value: 'number',
      name: 'Number'
    },
    {
      value: 'select',
      name: 'Select'
    },
    {
      value: 'textarea',
      name: 'Textarea'
    }
  ]

  const [type, setType] = useState('text');

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Add field</Modal.Header>

      <Modal.Body>
        <Form.Group>
          <Row gapX={16}>
            {/* Key name */}
            <Col span={6}>
              <Form.Input 
                label='Key name' 
                placeholder='Enter key name...'
              />
            </Col>

            {/* Type */}
            <Col span={6}>
              <Form.Select 
                label='Type'
                value={type}
                placeholder='Choose type...'
                options={types} 
                onChange={(e: any) => setType(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row gapX={16}>
            {/* Label */}
            <Col span={6}>
              <Form.Input 
                label='Label' 
                placeholder='Enter label...'
              />
            </Col>

            {/* Placeholder */}
            <Col span={6}>
              <Form.Input 
                label='Placeholder' 
                placeholder='Enter placeholder...'
              />
            </Col>
          </Row>
        </Form.Group>

        {/* Options */}
        <Form.Group>
          <Divider text='Options' />
        </Form.Group>

        {type == 'textarea' ?
            <CustomFieldsSectionModalAddTextarea />
          :
          type == 'select' ?
            <CustomFieldsSectionModalAddSelect />
          :
          type == 'number' ?
          <CustomFieldsSectionModalAddNumber />
          :
          <CustomFieldsSectionModalAddText />
        }
      </Modal.Body>

      <Modal.Footer>
        <Row gapX={8} justify='end'>
          <Col>
            <Button onClick={onClose}>
              Cancel
            </Button>
          </Col>

          <Col>
            <Button 
              variant='primary'
              onClick={onClose}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomFieldsSectionModalAddItem;
