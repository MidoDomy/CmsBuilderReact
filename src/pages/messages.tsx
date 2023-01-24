import type { NextPage } from 'next';
import React from 'react';

import Layout from 'layouts/general/Layout';
import Row from 'components/Row';
import Col from 'components/Col';
import MessagesInboxSidebar from 'layouts/messages/MessagesInboxSidebar';

const Messages: NextPage = () => {
  return (
    <Layout>
      <Row className='h-full'
        gapX={0}
      >
        <Col>
          <MessagesInboxSidebar />
        </Col>

        <Col fill>
          Messages
        </Col>

        <Col>
        </Col>
      </Row>
    </Layout>
  )
}

export default Messages;
