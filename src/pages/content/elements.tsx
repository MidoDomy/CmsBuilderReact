import type { NextPage } from "next";

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import ElementsNavigationSidebar from 'layouts/content/elements/ElementsNavigationSidebar';
import ElementsMainContent from 'layouts/content/elements/ElementsMainContent';
import ElementsSettingsSidebar from 'layouts/content/elements/ElementsSettingsSidebar';

const Elements: NextPage = () => {
  return (
    <Layout>
      <Row gapX={0}>
        <Col>
          <ElementsNavigationSidebar />
        </Col>

        <Col fill>
          <ElementsMainContent />
        </Col>

        <Col>
          <ElementsSettingsSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default Elements;
