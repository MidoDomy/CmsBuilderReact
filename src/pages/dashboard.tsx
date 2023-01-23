import type { NextPage } from 'next';
import React from 'react';

import Layout from 'layouts/general/Layout';
import DashboardBoard from 'layouts/dashboard/DashboardBoard';
import DashboardSidebar from 'layouts/dashboard/DashboardSidebar';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <div className="flex">
        <DashboardBoard />

        <DashboardSidebar />
      </div>
    </Layout>
  )
}

export default Dashboard;
