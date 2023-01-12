import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import Flex from 'components/Structuring/Flex';
import EmailsNavigationSidebar from 'layouts/emails/EmailsNavigationSidebar';
import EmailsContent from 'layouts/emails/EmailsContent';
import EmailsComponentsSidebar from 'layouts/emails/EmailsComponentsSidebar';

const Emails: NextPage = () => {
  return (
    <Layout>
      <Flex>
        <EmailsNavigationSidebar />
        <EmailsContent />
        <EmailsComponentsSidebar />
      </Flex>
    </Layout>
  )
}

export default Emails;
