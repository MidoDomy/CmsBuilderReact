import React, { useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import StylesTransformItem from './transform/StylesTransformItem';

interface Transform {
  type: 'move' | 'scale' | 'rotate' | 'skew';
  x: number;
  y: number;
  z: number;
}

const StylesTransform: React.FC = () => {
  const [transforms, setTransforms] = useState<Array<Transform>>([]);

  const addTransform = () => {
    setTransforms(prevCategories => [...prevCategories, {type: 'scale', x: 1, y: 1, z: 1}]);
  };

  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Transform
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        {/* Origin */}
        <Form.Group>
          <div className='text-center'>
            <Form.Label size='sm'>Origin</Form.Label>
          </div>

          <Row gapX={16}>
            <Col span={6}>
              <Row gapX={8} align='center'>
                <Col span={3}>
                  <Form.Label size='sm'>Left</Form.Label>
                </Col>

                <Col fill>
                  <Form.Input 
                    size='sm'
                    placeholder='-'
                    suffix={<span className='text-xs'>%</span>}
                  />
                </Col>
              </Row>
            </Col>

            <Col span={6}>
              <Row gapX={8} align='center'>
                <Col span={3}>
                  <Form.Label size='sm'>Top</Form.Label>
                </Col>

                <Col fill>
                  <Form.Input 
                    size='sm'
                    placeholder='-'
                    suffix={<span className='text-xs'>%</span>}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Form.Group>

        {/* Backface */}
        <Form.Group>
          <Form.Label size='sm'>Backface</Form.Label>
          
          <Form.InputGroup className='border border-gray-200 rounded text-center text-xs'>
            <Form.Radio className='flex-1 py-1 !border-r'
              id='transformBackfaceVisible'
              name='transformBackface'
              value='visible'
              defaultChecked
              hideRadio
            >
              Visible
            </Form.Radio>

            <Form.Radio className='flex-1 py-1'
              id='transformBackfaceHidden'
              name='transformBackface'
              value='hidden'
              hideRadio
            >
              Hidden
            </Form.Radio>
          </Form.InputGroup>
        </Form.Group>

        {/* Transform - header */}
        <div className='mb-1 px-0.5'>
          <Row gapX={8} justify='between' align='center'>
            <Col>
              <span className='text-xs'>Transforms:</span>
            </Col>

            <Col>
              {/* Add transform btn */}
              <Button
                variant='ghost'
                size='xs'
                rounded
                onClick={addTransform}
              >
                <FiPlus size={14} />  
              </Button>
            </Col>
          </Row>
        </div>

        {/* Box transform collection */}
        {transforms.length > 0 &&
          <ul className='flex flex-col gap-1'>
            {transforms?.map((transform, index) => 
              <li key={index}>
                <StylesTransformItem />
              </li>
            )}
          </ul>
        }
      </Collapse.Content>
    </Collapse>
  );
}

export default StylesTransform;
