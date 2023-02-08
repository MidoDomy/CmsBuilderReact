import type { NextPage } from 'next';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';
import Layout from 'layouts/general/Layout';
import ComponentsNavigationSidebar from 'layouts/content/components/ComponentsNavigationSidebar';

import StyleAlign from 'layouts/content/style/StyleAlign';
import StyleSize from 'layouts/content/style/Size';
import StyleSpacing from 'layouts/content/style/Spacing';
import StyleTypography from 'layouts/content/style/Typography';
import StyleBackgrounds from 'layouts/content/style/Backgrounds';
import StyleBorders from 'layouts/content/style/Borders';

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
          <Sidebar className='w-72'>
            <Tabs active='Styles'>
              <Tabs.Nav className='m-2'>
                <Tabs.NavItem name='Options'>Options</Tabs.NavItem>
                <Tabs.NavItem name='Styles'>Styles</Tabs.NavItem>
                <Tabs.NavItem name='Parts'>Parts</Tabs.NavItem>
              </Tabs.Nav>

              <Tabs.Content className='px-4' name='Options'>
                Options
              </Tabs.Content>

              <Tabs.Content name='Styles'>
                <StyleAlign />
                <StyleSize />
                <StyleSpacing />
                <StyleTypography />
                <StyleBackgrounds />
                <StyleBorders />
              </Tabs.Content>

              <Tabs.Content className='px-4' name='Parts'>
                Parts
              </Tabs.Content>
            </Tabs>
          </Sidebar>
        </Col>
      </Row>
    </Layout>
  )
}

export default Components;
