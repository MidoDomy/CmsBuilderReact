import React from 'react';

import { FiMoreVertical } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Sidebar from 'components/Sidebar';
import Button from 'components/Button';
import Avatar from 'components/Avatar';
import Collapse from 'components/Collapse';
import Image from 'components/Image';

const MessagesProfileSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80'>
      <Sidebar.Header className='pt-6 px-4'>
        <Row justify='between' align='center' gapX={12}>
          <Col>
            <h4 className='font-medium text-xl'>Profile</h4>
          </Col>

          <Col>
            <Button 
              variant='ghost'
              size='sm' 
              rounded
            >
              <FiMoreVertical size={18} />
            </Button>
          </Col>
        </Row>
      </Sidebar.Header>

      <Sidebar.Body className='px-4'>
        <Avatar className='mx-auto mb-3' 
          size='xl' 
        />

        <div className='mb-10 font-medium text-lg text-center'>Robert Fox</div>

        <div className='mb-5'>
          <div className='mb-1 text-sm text-slate-500'>About</div>
          <div>Passionate about creating digital product design</div>
        </div>

        <div className='mb-5'>
          <div className='mb-1 text-sm text-slate-500'>Phone no.</div>
          <div>+1(706-4344-004)</div>
        </div>

        <div>
          <Collapse className='-mx-2'>
            <Collapse.Trigger className='text-sm' 
              openClasses='bg-white' 
              closeClasses='bg-white text-slate-700 hover:text-slate-900'
            >
              Media (32)
            </Collapse.Trigger>

            <Collapse.Content className='px-2'>
              <Row gapX={8} gapY={8}>
                <Col span={4}>
                  <Image alt='' />
                </Col>

                <Col span={4}>
                  <Image alt='' />
                </Col>

                <Col span={4}>
                  <Image alt='' />
                </Col>

                <Col span={4}>
                  <Image alt='' />
                </Col>

                <Col span={4}>
                  <Image alt='' />
                </Col>

                <Col span={4}>
                  <Image alt='' />
                </Col>
              </Row>
            </Collapse.Content>
          </Collapse>
        </div>

        <div>
          <Collapse className='-mx-2'>
            <Collapse.Trigger className='text-sm' 
              openClasses='bg-white' 
              closeClasses='text-slate-700 hover:text-slate-900'
            >
              Documents (2)
            </Collapse.Trigger>

            <Collapse.Content className='px-2'>
              Documents here...
            </Collapse.Content>
          </Collapse>
        </div>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default MessagesProfileSidebar;
