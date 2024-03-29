import type { NextPage } from 'next';

import { FiCheck } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Tabs from 'components/Tabs';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
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
              <div className='-mt-5 mb-8 text-slate-500 text-sm'>
                Editing fields and sections will affect all collection items.
              </div>

              <CollectionsEditCustomFields />
            </Tabs.Content>
          </Tabs>
        </Container>
      </div>
    </Layout>
  )
}

export default CollectionsConfig;
