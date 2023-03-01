import type { NextPage } from 'next';
import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import DashboardBoard from 'layouts/dashboard/DashboardBoard';
import DashboardSidebar from 'layouts/dashboard/DashboardSidebar';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Row gapX={0}>
        <Col fill>
          <DashboardBoard />
        </Col>

        <Col>
          <DashboardSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default Dashboard;
