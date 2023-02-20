import type { NextPage } from 'next';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Form from 'components/Form';
import Tabs from 'components/Tabs';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Section from 'layouts/general/Section';
import CollectionsEditGeneral from 'layouts/collections/edit/CollectionsEditGeneral';
import CollectionsEditCustomFields from 'layouts/collections/edit/CollectionsItemCustomFields';

const CollectionsConfig: NextPage = () => {
  return (
    <Layout>
      {/* Page header */}
      <PageHeader 
        title='Collection create/edit'
        description='Add sections and fields that will be available in collection item.'
        actions={
          <Row gapX={8}>
            <Col>
              <Button href='/collections/overview'>
                Cancel
              </Button>
            </Col>

            <Col>
              <Button variant='primary'>
                <Icon name='checkmark' size={16} />
                Save
              </Button>
            </Col>
          </Row>
        }
      />

      {/* Content */}
      <div>
        <Container>
          <Tabs active='general'>
            <Tabs.Nav className='mb-10'>
              <Tabs.NavItem name='general'>
                General
              </Tabs.NavItem>

              <Tabs.NavItem name='item'>
                Item fields
              </Tabs.NavItem>
            </Tabs.Nav>

            {/* General */}
            <Tabs.Content name='general'>
              <CollectionsEditGeneral />
            </Tabs.Content>

            {/* Collection item data */}
            <Tabs.Content name='item'>
              <CollectionsEditCustomFields />
            </Tabs.Content>
          </Tabs>
        </Container>
      </div>
    </Layout>
  )
}

export default CollectionsConfig;
