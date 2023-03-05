import React from 'react';

import { FiMoreVertical, FiPlus } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import BoardRowItem from './BoardRowItem';

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

const BoardRow: React.FC<Props> = ({name, tasks}) => {
  return (
    <>
      <tr className='[&:first-child>td]:pt-0'>
        <td colSpan={5} className='pt-10 font-medium'>
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
        </td>
      </tr>

      {tasks?.map(task =>
        <BoardRowItem
          key={task.id}
          role={task.role}
          name={task.name}
          completed={task.completed}
        />
      )}
    </>
  )
}

export default BoardRow;
