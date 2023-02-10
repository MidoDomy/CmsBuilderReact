import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Sidebar from 'components/Sidebar';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Tabs from 'components/Tabs';
import MessagesInboxSidebarItem from './inbox/MessagesInboxSidebarItem';

const MessagesInboxSidebar: React.FC = () => {
  return (
    <Sidebar className='w-80'>
      <Sidebar.Header className='pt-6 px-4'>
        <Row justify='between' align='center'>
          <Col>
            <h4 className='font-medium text-3xl'>Inbox</h4>
          </Col>

          <Col>
            <Row gapX={8}>
              <Col>
                <Button size='sm' rounded>
                  <Icon name='search' size={14} />
                </Button>
              </Col>

              <Col>
                <Button size='sm' rounded>
                  <Icon name='edit' size={14} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Sidebar.Header>

      <Sidebar.Body className='px-0'>
        <Tabs active='direct'>
          <Tabs.Nav className='mx-4 mb-4 p-1.5 bg-gray-100 rounded-md'>
            <Tabs.NavItem className='w-1/2 justify-center py-0.5 !border-0 rounded text-sm'
              activeClass='bg-gray-200'
              name='direct'
            >
              Direct
            </Tabs.NavItem>

            <Tabs.NavItem className='w-1/2 justify-center py-0.5 !border-0 rounded text-sm' 
              activeClass='bg-gray-200'
              name='group'
            >
              Groups
            </Tabs.NavItem>
          </Tabs.Nav>

          {/* Direct */}
          <Tabs.Content name='direct'>
            {/* Pinned messages */}
            <div>
              <div className='flex items-center gap-1 mb-1 px-4 text-sm text-slate-600'>
                <Icon name='pin' size={14} />
                <span>Pinned</span>
              </div>

              <MessagesInboxSidebarItem 
                name='Pedro Lalit'
                text='Meeting is by 8am.'
                time='10:32 am'
                isUnread
              />
            </div>

            {/* All messages */}
            <div>
              <div className='flex items-center gap-1 mt-4 mb-1 px-4 text-sm text-slate-600'>
                <Icon name='message' size={14} />
                <span>All messages</span>
              </div>

              <MessagesInboxSidebarItem 
                name='Wade Warren'
                text='Wow, this is really cool.'
                time='10:15 am'
              />
              <MessagesInboxSidebarItem 
                name='Robert Fox'
                text="I'll have the design by morning."
                time='10:00 am'
                active
              />
            </div>
          </Tabs.Content>

          {/* Groups */}
          <Tabs.Content name='group'>
            <div>
              <div className='flex items-center gap-1 mb-1 px-4 text-sm text-slate-600'>
                <Icon name='message' size={14} />
                <span>Group messages</span>
              </div>

              <MessagesInboxSidebarItem 
                name='Design Team'
                text="Are you available for another meeting?"
                time='9:00 am'
              />
              <MessagesInboxSidebarItem 
                name='Development'
                text="That thing that is most popular."
                time='8:43 am'
              />
            </div>
          </Tabs.Content>
        </Tabs>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default MessagesInboxSidebar;
