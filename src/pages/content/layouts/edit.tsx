import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import LayoutsEditNavigationSidebar from 'layouts/content/layouts/edit/LayoutsEditNavigationSidebar';
import LayoutsEditContent from 'layouts/content/layouts/edit/LayoutsEditContent';
import LayoutsEditSettingsSidebar from 'layouts/content/layouts/edit/LayoutsEditSettingsSidebar';

const LayoutsEdit: NextPage = () => {
  return (
    <Layout>
      <Row gapX={0} noWrap>
        <Col>
          <LayoutsEditNavigationSidebar />
        </Col>

        <Col className='max-w-[calc(100vw_-_669px)] overflow-auto'
          fill
        >
          <LayoutsEditContent />
        </Col>

        <Col>
          <LayoutsEditSettingsSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default LayoutsEdit;
