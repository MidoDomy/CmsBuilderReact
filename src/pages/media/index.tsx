import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import MediaOverviewFolder from 'layouts/media/overview/MediaOverviewFolder';

const MediaOverview: NextPage = () => {
  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Media'
        description='Keep your media files organized.'
        actions={
          <Button>
            <Icon name='plus' size={18} />
            <span>Add new folder</span>
          </Button>
        }
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
