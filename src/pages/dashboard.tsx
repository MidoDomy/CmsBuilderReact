import type { NextPage } from 'next';
import React from 'react';

import Layout from 'layouts/general/Layout';
import Flex from 'components/Structuring/Flex';
import DashboardBoard from 'layouts/dashboard/DashboardBoard';
import DashboardSidebar from 'layouts/dashboard/DashboardSidebar';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Flex>
        <DashboardBoard />

        <DashboardSidebar />
      </Flex>
    </Layout>
  )
}

export default Dashboard;
