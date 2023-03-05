import React from 'react';

import { FiMoreVertical, FiPlus } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import BoardColumnItem from 'layouts/board/BoardColumnItem';

interface BoardTask {
  id: number;
  role: string;
  name: string;
  completed: boolean;
}

type Props = {
  name: string;
  tasks: BoardTask[];
}

const BoardColumn: React.FC<Props> = ({name, tasks}) => {
  return (
    <div className='min-h-screen w-96 border-r border-gray-200'>
      {/* Column header */}
      <div className='py-3 px-5'>
        <Row justify='between' align='center'>
          <Col>
            <span className='font-medium'>{name}</span>
          </Col>

          <Col>
            <Row gapX={8} align='center'>
              <Col>
                <Button
                  size='sm'
                  rounded
                >
                  <FiPlus size={14} />
                </Button>
              </Col>

              <Col>
                <Button
                  size='sm'
                  rounded
                >
                  <FiMoreVertical size={14} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Column tasks */}
      <div className='py-3 px-5'>
        {tasks?.map(task =>
          <BoardColumnItem 
            key={task.id}
            role={task.role}
            name={task.name}
            completed={task.completed}
          />
        )}
      </div>
    </div>
  )
}

export default BoardColumn;
