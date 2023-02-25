import React, { useState } from 'react';

import { FiTrash2 } from 'react-icons/fi';

import Modal from 'components/Modal';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import DataGrid from 'components/DataGrid';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const ColorsModalAddGroup: React.FC<Props> = ({isOpen, onClose}) => {
  const [colors, setColors] = useState<Array<{id: number, name: string, value: string}>>([]);
  const [currentColor, setCurrentColor] = useState('');
  const [currentName, setCurrentName] = useState('');

  const addColor = () => {
    const color = {
      id: colors.length + 1,
      name: currentName,
      value: currentColor
    }

    setColors(prevColors => [...prevColors, color]);

    setCurrentColor('');
    setCurrentName('');
  }

  const removeColor = (index: number) => {
    setColors(prevColors => [...prevColors.filter((_, i) => i !== index)]);
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Add group</Modal.Header>

      <Modal.Body>
        {/* Group name */}
        <Form.Group>
          <Form.Input label='Group name' />
        </Form.Group>

        {/* Added colors */}
        {colors.length > 0 &&
          <Form.Group>
            <DataGrid columns={[
              { key: 'id', name: '' },
              { key: 'value', name: 'Value' },
              { key: 'name', name: 'Name' }
            ]}>
              {colors.map((color, index) => (
                <DataGrid.Row key={color.id}>
                  <DataGrid.Col className='w-10'>
                    <div className='h-4 w-4 rounded-full ring-1 ring-gray-200'
                      style={{background: color.value}}
                    ></div>
                  </DataGrid.Col>

                  <DataGrid.Col>
                    <span className='text-sm'>{color.value}</span>
                  </DataGrid.Col>

                  <DataGrid.Col>
                    <span className='font-medium text-sm'>{color.name}</span>
                  </DataGrid.Col>

                  <DataGrid.Col className='text-right'>
                    <Button 
                      variant='danger-outline'
                      size='sm'
                      rounded
                      onClick={() => removeColor(index)}
                    >
                      <FiTrash2 size={14} />
                    </Button>
                  </DataGrid.Col>
                </DataGrid.Row>
              ))}
            </DataGrid>
          </Form.Group>
        }

        {/* Add color */}
        <Form.Group>
          <Row align='end' gapX={8}>
            <Col span={5}>
              <Form.InputGroup label='Value'>
                <Form.Color 
                  value={currentColor}
                  size='sm' 
                  onChange={(e: any) => setCurrentColor(e.target.value)}
                />

                <Form.Input className='flex-1'
                  value={currentColor} 
                  size='sm' 
                  onChange={(e: any) => setCurrentColor(e.target.value)}
                />
              </Form.InputGroup>
            </Col>

            <Col span={5}>
              <Form.Input 
                label='Name'
                value={currentName} 
                size='sm' 
                onChange={(e: any) => setCurrentName(e.target.value)}
              />
            </Col>

            <Col span={2}>
              <Button 
                size='sm' 
                block
                disabled={!(currentColor && currentName)}
                onClick={addColor}
              >
                Add
              </Button>
            </Col>
          </Row>
        </Form.Group>
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
              Add
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default ColorsModalAddGroup;
