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
          <Tabs active='General'>
            <Tabs.Nav className='mb-10'>
              <Tabs.NavItem name='General'>
                General
              </Tabs.NavItem>

              <Tabs.NavItem name='Item'>
                Item config
              </Tabs.NavItem>
            </Tabs.Nav>

            {/* Collection data */}
            <Tabs.Content name='General'>
              {/* General */}
              <Section 
                title='General' 
                description='General informations about collection.'
              >
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
            </Tabs.Content>

            {/* Collection item data */}
            <Tabs.Content name='Item'>
              {/* Added section */}
              <Section
                title='Section name'
                description='Section description.'
              >
                TODO: https://dev-oasis.atlassian.net/browse/CB-89
              </Section>

              {/* Add new section */}
              <div className='flex flex-col items-center justify-center gap-1 py-8'>
                <div className='font-medium text-sm'>Click to add new section</div>
                <Button
                  variant='primary'
                  size='sm'
                  rounded
                >
                  <Icon name='plus' size={16} />
                </Button>
              </div>
            </Tabs.Content>
          </Tabs>
        </Container>
      </div>
    </Layout>
  )
}

export default CollectionsConfig;
