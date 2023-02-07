import React from 'react';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import PageHeader from '../general/PageHeader';
import SettingsSidebar from './SettingsSidebar';

type Props = {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  title?: string;
  description?: string;
}

const SettingsLayout: React.FC<Props> = ({children, actions, title, description}) => {
  return (
    <Layout>
      <Row className='h-full'
        gapX={0}
      >
        <Col>
          <SettingsSidebar />
        </Col>

        <Col fill>
          {/* Page header */}
          <PageHeader
            title={title}
            description={description}
            actions={actions}
          />

          {/* Content */}
          <div>
            <Container>
              {children}
            </Container>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default SettingsLayout;
