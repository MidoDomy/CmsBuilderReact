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
          <Tabs active='General'>
            <Tabs.Nav className='mb-10'>
              <Tabs.NavItem name='General'>
                General
              </Tabs.NavItem>

              <Tabs.NavItem name='Layout'>
                Layout
              </Tabs.NavItem>
            </Tabs.Nav>

            {/* Sections and fields */}
            <Tabs.Content name='General'>
              {/* General */}
              <Section 
                title='General' 
                description='General informations about collection item.'
              >
                <Form.Group>
                  <Form.Switch
                    id='activeCollectionItem' 
                    label='Activate' 
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Input
                    label='Name'
                    placeholder='Enter name...'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Textarea
                    label='Description'
                    placeholder='Enter description...'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.FileUpload label='Image' />
                </Form.Group>
              </Section>

              {/* Additional sections and fields */}
              <Section 
                title='Additional section' 
                description='Created additional sections in collection.'
              >
                Additional fields
              </Section>
            </Tabs.Content>

            {/* Assign layout to item */}
            <Tabs.Content name='Layout'>
              TODO: https://dev-oasis.atlassian.net/browse/CB-88
            </Tabs.Content>
          </Tabs>
        </Container>
      </div>
    </Layout>
  )
}

export default CollectionsItem;
