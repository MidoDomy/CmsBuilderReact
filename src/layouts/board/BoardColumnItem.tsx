import React from 'react';

import { BiMessageSquareDots } from 'react-icons/bi';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import BoardItemDropdown from './BoardItemDropdown';

type Props = {
  role: string;
  name: string;
  completed: boolean;
}

const BoardColumnItem: React.FC<Props> = ({role, name, completed}) => {
  return (
    <div className='mb-3 last:mb-0 px-4 py-3 bg-white border border-gray-200 shadow-sm hover:shadow rounded-md transition-shadow cursor-pointer'>
      <Row gapX={8}>
        <Col>
          <Form.Checkbox 
            id='task0'
            value='completed'
          />
        </Col>

        <Col fill>
          <div>
            <Row align='center'>
              <Col fill>
                <div className='uppercase text-xs text-slate-500'>{role}</div>
              </Col>

              <Col>
                <BoardItemDropdown />
              </Col>
            </Row>
          </div>

          <div className='mb-4 font-medium'>{name}</div>
          
          <div>
            <span className='inline-flex gap-1 items-center text-xs text-slate-500'>
              <BiMessageSquareDots size={14} />
              3 Comments
            </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default BoardColumnItem;
