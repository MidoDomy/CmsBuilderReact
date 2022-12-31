import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import SettingsLayout from 'layouts/settings/SettingsLayout';

const SettingsApi: NextPage = () => {
  return (
    <Layout>
      <SettingsLayout 
        title='Api' 
        description='Go headless.'
      >
        
      </SettingsLayout>
    </Layout>
  )
}

export default SettingsApi;
