import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import Icon from 'components/Icon';

const MessagesChatFooter: React.FC = () => {
  return (
    <div className='px-6 py-8 border-t border-gray-200'>
      <div className="relative">
        <Form.Input className='[&_input]:pr-36'
          placeholder='Type Something...'
          size='lg'
        />

        <div className='absolute right-3 top-1/2 -translate-y-1/2'>
          <Row gapX={16}>
            <Col>
              <Row gapX={2}>
                <Col>
                  <Button
                    variant='ghost'
                    size='sm'
                    rounded
                  >
                    <Icon name='microphone' size={16} />
                  </Button>
                </Col>

                <Col>
                  <Button
                    variant='ghost'
                    size='sm'
                    rounded
                  >
                    <Icon name='picture' size={16} />
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col className='border-l border-gray-200'>
              <Button
                variant='primary'
                size='sm'
                rounded
              >
                <Icon name='send' size={16} />
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default MessagesChatFooter;
