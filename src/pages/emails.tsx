import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import EmailsNavigationSidebar from 'layouts/emails/EmailsNavigationSidebar';
import EmailsContent from 'layouts/emails/EmailsContent';
import EmailsComponentsSidebar from 'layouts/emails/EmailsComponentsSidebar';

const Emails: NextPage = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <EmailsNavigationSidebar />
        <EmailsContent />
        <EmailsComponentsSidebar />
      </div>
    </Layout>
  )
}

export default Emails;
