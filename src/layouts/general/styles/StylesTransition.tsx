import React, { useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import StylesTreansitionItem from './transition/StylesTreansitionItem';

interface Transition {
  delay: number;
  duration: number;
  properties: Array<string>;
  timingFunction: string;
}

const StylesTransition: React.FC = () => {
  const [transitions, setTransitions] = useState<Array<Transition>>([]);

  const addTransition = () => {
    setTransitions(prevCategories => [...prevCategories, {delay: 0, duration: 2, properties: ['height'], timingFunction: 'linear'}]);
  };

  return (
    <Collapse>
      <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
        Transition
      </Collapse.Trigger>

      <Collapse.Content className='pt-3 pb-3 px-1'>
        {/* Transition - header */}
        <div className='mb-1 px-0.5'>
          <Row gapX={8} justify='between' align='center'>
            <Col>
              <span className='text-xs'>Transitions:</span>
            </Col>

            <Col>
              {/* Add transition btn */}
              <Button
                variant='ghost'
                size='xs'
                rounded
                onClick={addTransition}
              >
                <FiPlus size={14} />  
              </Button>
            </Col>
          </Row>
        </div>

        {/* Box transition collection */}
        {transitions.length > 0 &&
          <ul className='flex flex-col gap-1'>
            {transitions?.map((transition, index) => 
              <li key={index}>
                <StylesTreansitionItem />
              </li>
            )}
          </ul>
        }
      </Collapse.Content>
    </Collapse>
  );
}

export default StylesTransition;
