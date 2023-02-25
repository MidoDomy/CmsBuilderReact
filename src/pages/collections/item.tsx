import type { NextPage } from 'next';

import { FiCheck } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Tabs from 'components/Tabs';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import CollectionsItemGeneral from 'layouts/collections/item/CollectionsItemGeneral';
import CollectionsItemCustomFields from 'layouts/collections/item/CollectionsItemCustomFields';
import CollectionsItemLayout from 'layouts/collections/item/CollectionsItemLayout';

const CollectionsItem: NextPage = () => {
  return (
    <Layout>
      {/* Page header */}
      <PageHeader 
        title='Item name'
        description='Item description'
        returnRoute='/collections/list'
        actions={
          <Row gapX={8}>
            <Col>
              <Button href='/collections/list'>
                Cancel
              </Button>
            </Col>

            <Col>
              <Button variant='primary'>
                <FiCheck size={18} />
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

              <Tabs.NavItem name='customFields'>
                Fields
              </Tabs.NavItem>

              <Tabs.NavItem name='layout'>
                Layout
              </Tabs.NavItem>
            </Tabs.Nav>

            {/* General */}
            <Tabs.Content name='general'>
              <CollectionsItemGeneral />
            </Tabs.Content>

            {/* Custom fields */}
            <Tabs.Content name='customFields'>
              <CollectionsItemCustomFields />
            </Tabs.Content>

            {/* Assign layout to item */}
            <Tabs.Content name='layout'>
              <CollectionsItemLayout />
            </Tabs.Content>
          </Tabs>
        </Container>
      </div>
    </Layout>
  )
}

export default CollectionsItem;
