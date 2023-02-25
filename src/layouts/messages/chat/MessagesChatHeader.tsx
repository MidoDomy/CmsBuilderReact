import React from 'react';

import { FiCamera, FiPhone, FiMoreVertical } from 'react-icons/fi'

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Avatar from 'components/Avatar';

const MessagesChatHeader: React.FC = () => {
  return (
    <div className='px-6 py-4'>
      <Row gapX={12} align='center'>
        <Col>
          <Avatar size='lg' />
        </Col>

        <Col fill>
          <div className='font-medium'>Robert Fox</div>
          <div className='text-sm text-slate-500'>Active 2 mins ago</div>
        </Col>

        <Col>
          <Row gapX={8}>
            <Col>
              <Button rounded>
                <FiCamera size={16} />
              </Button>
            </Col>

            <Col>
              <Button rounded>
                <FiPhone size={16} />
              </Button>
            </Col>

            <Col>
              <Button rounded>
                <FiMoreVertical size={16} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default MessagesChatHeader;
