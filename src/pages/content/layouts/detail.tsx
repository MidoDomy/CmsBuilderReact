import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import LayoutsDetailNavigationSidebar from 'layouts/content/layouts/detail/LayoutsDetailNavigationSidebar';
import LayoutsDetailContent from 'layouts/content/layouts/detail/LayoutsDetailContent';

const LayoutsDetail: NextPage = () => {
  return (
    <Layout>
      <Row gapX={0} noWrap>
        <Col>
          <LayoutsDetailNavigationSidebar />
        </Col>

        <Col fill>
          <LayoutsDetailContent />
        </Col>

        <Col>Sidebar settings</Col>
      </Row>
    </Layout>
  )
}

export default LayoutsDetail;
