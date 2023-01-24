import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Avatar from 'components/Avatar';

const MessagesChatHeader: React.FC = () => {
  return (
    <div className='px-6 py-4 bg-white border border-t-0 border-gray-200'>
      <Row gapX={12} align='center'>
        <Col>
          <Avatar size='lg' />
        </Col>

        <Col fill>
          <div className='font-medium'>Robert Fox</div>
          <div className='text-sm text-slate-600'>Active 2 mins ago</div>
        </Col>

        <Col>
          <Row gapX={4}>
            <Col>
              <Button
                variant='ghost'
                size='sm'
                rounded
              >
                <Icon name='camera' size={20} />
              </Button>
            </Col>

            <Col>
              <Button
                variant='ghost'
                size='sm'
                rounded
              >
                <Icon name='phone' size={20} />
              </Button>
            </Col>

            <Col>
              <Button
                variant='ghost'
                size='sm'
                rounded
              >
                <Icon name='three-dots' size={20} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default MessagesChatHeader;
