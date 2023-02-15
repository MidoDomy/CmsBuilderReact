import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';

import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import MediaOverviewModalAdd from 'layouts/media/overview/MediaOverviewModalAdd';
import MediaOverviewFolder from 'layouts/media/overview/MediaOverviewFolder';

const MediaOverview: NextPage = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Media'
        description='Keep your media files organized.'
        actions={
          <Button onClick={() => setShowModalAdd(true)}>
            <Icon name='plus' size={18} />
            <span>Add folder</span>
          </Button>
        }
      />

      {/* Modal add folder */}
      <MediaOverviewModalAdd 
        isOpen={showModalAdd}
        onClose={() => setShowModalAdd(false)}
      />

      {/* Content */}
      <div>
        <Container>
          <Row>
            <Col>
              <Link href='/media/folder'>
                <MediaOverviewFolder name='Images' size='5.8 Mbs' />
              </Link>
            </Col>

            <Col>
              <Link href='/media/folder'>
                <MediaOverviewFolder name='Videos' size='14 Mbs' />
              </Link>
            </Col>

            <Col>
              <Link href='/media/folder'>
                <MediaOverviewFolder name='Banners' size='1.2 Mbs' />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default MediaOverview;
