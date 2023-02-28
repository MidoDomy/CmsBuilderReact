import React, { useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import StylesShadowsBoxShadowItem from './shadows/StylesShadowsBoxShadowItem';
import StylesShadowsTextShadowItem from './shadows/StylesShadowsTextShadowItem';

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
          <div className='mb-1 px-0.5'>
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
          </div>

          {/* Box shadow collection */}
          {boxShadows.length > 0 &&
            <ul className='flex flex-col gap-1'>
              {boxShadows?.map((shadow, index) => 
                <li key={index}>
                  <StylesShadowsBoxShadowItem />
                </li>
              )}
            </ul>
          }
        </div>

        {/* Text shadows */}
        <div>
          {/* Text shadow - header */}
          <div className='mb-1 px-0.5'>
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
          </div>

          {/* Text shadow collection */}
          {textShadows.length > 0 &&
            <ul className='flex flex-col gap-1'>
              {textShadows?.map((shadow, index) => 
                <li key={index + 10}>
                  <StylesShadowsTextShadowItem />
                </li>
              )}
            </ul>
          }
        </div>
      </Collapse.Content>
    </Collapse>
  );
}

export default StyleShadows;
