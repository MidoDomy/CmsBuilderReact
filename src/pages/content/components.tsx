import type { NextPage } from 'next';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import ComponentsNavigationSidebar from 'layouts/content/components/ComponentsNavigationSidebar';
import ComponentsSettingsSidebar from 'layouts/content/components/ComponentsSettingsSidebar';

const Components: NextPage = () => {
  return (
    <Layout>
      <Row gapX={0}>
        <Col>
          <ComponentsNavigationSidebar />
        </Col>

        <Col fill>
          <div className=''>
            <Container className='flex justify-center items-center h-full pb-60'>
              <button style={{padding: '8px 16px', background: '#38bdf8', borderRadius: '8px', color: '#ffffff'}}>
                Lorem ipsum
              </button>
            </Container>
          </div>
        </Col>

        <Col>
          <ComponentsSettingsSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default Components;
