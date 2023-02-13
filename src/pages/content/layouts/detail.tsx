import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';

const LayoutsDetail: NextPage = () => {
  return (
    <Layout>
      <Row gapX={0}>
        <Col>Navigation sidebar</Col>

        <Col fill>Main content</Col>

        <Col>Sidebar settings</Col>
      </Row>
    </Layout>
  )
}

export default LayoutsDetail;
