import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import ComponentsNavigationSidebar from 'layouts/content/components/ComponentsNavigationSidebar';
import ComponentsMainContent from 'layouts/content/components/ComponentsMainContent';
import ComponentsSettingsSidebar from 'layouts/content/components/ComponentsSettingsSidebar';

const Components: NextPage = () => {
  return (
    <Layout>
      <Row gapX={0}>
        <Col>
          <ComponentsNavigationSidebar />
        </Col>

        <Col fill>
          <ComponentsMainContent />
        </Col>

        <Col>
          <ComponentsSettingsSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default Components;
