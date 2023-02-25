import React, { useState } from 'react';

import { FiPlus, FiMoreVertical, FiTrash2 } from 'react-icons/fi';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';

interface BoxShadow {
  type: 'outside' | 'inside';
  x: number;
  y: number;
  blur: number;
  size: number;
  color: string;
}

interface TextShadow {
  x: number;
  y: number;
  blur: number;
  color: string;
}

const StyleShadows: React.FC = () => {
  const [boxShadows, setBoxShadows] = useState<Array<BoxShadow>>([]);
  const [textShadows, setTextShadows] = useState<Array<TextShadow>>([]);

  const addBoxShadow = () => {
    setBoxShadows(prevCategories => [...prevCategories, {type: 'outside', x: 0, y: 0, blur: 0, size: 0, color: 'black'}]);
  };

  const addTextShadow = () => {
    setTextShadows(prevCategories => [...prevCategories, {x: 0, y: 0, blur: 0, color: 'black'}]);
  };

  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Shadows
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        {/* Box shadows */}
        <div className='mb-1.5'>
          {/* Box shadow - header */}
          <Row gapX={8} justify='between' align='center'>
            <Col>
              <span className='text-xs'>Box shadow:</span>
            </Col>

            <Col>
              {/* Add shadow btn */}
              <Button
                variant='ghost'
                size='xs'
                rounded
                onClick={addBoxShadow}
              >
                <FiPlus size={14} />  
              </Button>
            </Col>
          </Row>

          {/* Box shadow collection */}
          {boxShadows?.map((shadow, index) => 
            <Form.Group key={index}>
              <Row gapX={6} align='end'>
                {/* X */}
                <Col fill>
                  <Form.Input 
                    label='x'
                    size='sm'
                    value={shadow.x}
                    placeholder='-'
                  />
                </Col>

                {/* Y */}
                <Col fill>
                  <Form.Input 
                    label='y'
                    size='sm'
                    value={shadow.y}
                    placeholder='-'
                  />
                </Col>

                {/* Blur */}
                <Col fill>
                  <Form.Input 
                    label='Blur'
                    size='sm'
                    value={shadow.blur}
                    placeholder='-'
                  />
                </Col>

                {/* Size */}
                <Col fill>
                  <Form.Input 
                    label='Size'
                    size='sm'
                    value={shadow.size}
                    placeholder='-'
                  />
                </Col>

                {/* Color */}
                <Col fill>
                  <Form.Label size='sm'>Color</Form.Label>
                  <Form.Color 
                    size='sm'
                    value={shadow.color}
                  />
                </Col>

                {/* Actions (type, delete) */}
                <Col>
                  <Dropdown>
                    <Dropdown.Trigger>
                      <Button 
                        variant='ghost'
                        size='sm'
                        rounded
                      >
                        <FiMoreVertical size={16} />
                      </Button>
                    </Dropdown.Trigger>

                    <Dropdown.Menu className='-mr-1'>
                      <div className='pt-1 px-2 pb-2'>
                        <Form.Label size='sm'>Type</Form.Label>
                        <Form.InputGroup className='border border-gray-200 rounded text-center text-sm'>
                          <Form.Radio className='flex-1 py-0.5 !border-r'
                            id='boxShadowTypeOutside'
                            name='boxShadowType'
                            value='outside'
                            defaultChecked
                            hideRadio
                          >
                            Outside
                          </Form.Radio>

                          <Form.Radio className='flex-1 py-0.5'
                            id='boxShadowTypeInside'
                            name='boxShadowType'
                            value='inside'
                            hideRadio
                          >
                            Inside
                          </Form.Radio>
                        </Form.InputGroup>
                      </div>

                      <Dropdown.MenuItem variant='danger'>
                        <FiTrash2 size={16} />
                        Delete
                      </Dropdown.MenuItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Form.Group>
          )}
        </div>

        {/* Text shadows */}
        <div>
          {/* text shadow - header */}
          <Row gapX={8} justify='between' align='center'>
            <Col>
              <span className='text-xs'>Text shadow:</span>
            </Col>

            <Col>
              {/* Add shadow btn */}
              <Button
                variant='ghost'
                size='xs'
                rounded
                onClick={addTextShadow}
              >
                <FiPlus size={14} />  
              </Button>
            </Col>
          </Row>

          {/* Text shadow collection */}
          {textShadows?.map((shadow, index) => 
            <Form.Group key={index}>
              <Row gapX={6} align='end'>
                {/* X */}
                <Col fill>
                  <Form.Input 
                    label='x'
                    size='sm'
                    value={shadow.x}
                    placeholder='-'
                  />
                </Col>

                {/* Y */}
                <Col fill>
                  <Form.Input 
                    label='y'
                    size='sm'
                    value={shadow.y}
                    placeholder='-'
                  />
                </Col>

                {/* Blur */}
                <Col fill>
                  <Form.Input 
                    label='Blur'
                    size='sm'
                    value={shadow.blur}
                    placeholder='-'
                  />
                </Col>

                {/* Color */}
                <Col fill>
                  <Form.Label size='sm'>Color</Form.Label>
                  <Form.Color 
                    size='sm'
                    value={shadow.color}
                  />
                </Col>

                {/* Actions (type, delete) */}
                <Col>
                  <Button
                    variant='danger-outline'
                    size='sm'
                    rounded
                  >
                    <FiTrash2 size={14} />
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          )}
        </div>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleShadows;
