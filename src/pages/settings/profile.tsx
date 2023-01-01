import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import SettingsLayout from 'layouts/settings/SettingsLayout';

const SettingsProfile: NextPage = () => {
  return (
    <Layout>
      <SettingsLayout 
        title='My profile' 
        description='Change my profile data.'
      >
        
      </SettingsLayout>
    </Layout>
  )
}

export default SettingsProfile;
