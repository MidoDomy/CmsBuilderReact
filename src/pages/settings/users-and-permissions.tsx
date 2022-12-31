import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import SettingsLayout from 'layouts/settings/SettingsLayout';

const SettingsUsersAndPermissions: NextPage = () => {
  return (
    <Layout>
      <SettingsLayout 
        title='Users and Permissions' 
        description='Change  data.'
      >
        
      </SettingsLayout>
    </Layout>
  )
}

export default SettingsUsersAndPermissions;
