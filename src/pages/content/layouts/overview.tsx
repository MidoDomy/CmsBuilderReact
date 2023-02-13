import type { NextPage } from 'next';
import { useState } from 'react';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Collapse from 'components/Collapse';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import LayoutsOverviewCard from 'layouts/content/layouts/overview/LayoutsOverviewCard';

const LayoutsOverview: NextPage = () => {
  const [isTableView, setIsTableView] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Layouts overview'
        description='You can assign layouts to pages, but also inherit content from one another.'
        actions={
          <Button href='/content/layouts/detail'>
            <Icon name='plus' size={18} />
            <span>Add new</span>
          </Button>
        }
      />

      {/* Controls */}
      <div className='mb-5'>
        <Container>
          <div className='flex justify-end'>
            <div className='p-0.5 bg-gray-100 rounded-md'>
              <Row gapX={3}>
                <Col>
                  <Button className={`${isTableView ? 'bg-white' : 'hover:bg-white'}`}
                    variant='ghost'
                    size='sm'
                    square
                    onClick={() => setIsTableView(true)}  
                  >
                    <Icon name='list' size={18} />
                  </Button>
                </Col>

                <Col>
                  <Button className={`${!isTableView ? 'bg-white' : 'hover:bg-white'}`}
                    variant='ghost'
                    size='sm'
                    square
                    onClick={() => setIsTableView(false)}  
                  >
                    <Icon name='categories' size={18} />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <div>
        <Container>
          {isTableView ? 
            <div>
              TODO: https://dev-oasis.atlassian.net/browse/CB-99
            </div>
            :
            <div>
              {/* Layout group */}
              <Collapse className='mb-10'
                active
              >
                <Collapse.Trigger className='mb-6 border-b'>
                  <h5 className='font-medium text-lg'>Basic</h5>
                </Collapse.Trigger>

                <Collapse.Content>
                  <Row gapX={16}>
                    <Col span={3}>
                      <LayoutsOverviewCard
                        link='/content/layouts/detail' 
                        name='Header and Footer'
                      />
                    </Col>

                    <Col span={3}>
                      <LayoutsOverviewCard
                        link='/content/layouts/detail' 
                        name='Header and Footer minimal'
                      />
                    </Col>
                  </Row>
                </Collapse.Content>
              </Collapse>

              {/* Layout group */}
              <Collapse className='mb-10'
                active
              >
                <Collapse.Trigger className='mb-6 border-b'>
                  <h5 className='font-medium text-lg'>Pages</h5>
                </Collapse.Trigger>

                <Collapse.Content>
                  <Row gapX={16}>
                    <Col span={3}>
                      <LayoutsOverviewCard
                        link='/content/layouts/detail' 
                        name='Homepage'
                      />
                    </Col>

                    <Col span={3}>
                      <LayoutsOverviewCard
                        link='/content/layouts/detail' 
                        name='Landing page'
                      />
                    </Col>
                  </Row>
                </Collapse.Content>
              </Collapse>

              {/* Layout group */}
              <Collapse className='mb-10'
                active
              >
                <Collapse.Trigger className='mb-6 border-b'>
                  <h5 className='font-medium text-lg'>Settings</h5>
                </Collapse.Trigger>

                <Collapse.Content>
                  <Row gapX={16}>
                    <Col span={3}>
                      <LayoutsOverviewCard
                        link='/content/layouts/detail' 
                        name='Basic settings layout'
                      />
                    </Col>
                  </Row>
                </Collapse.Content>
              </Collapse>
            </div>
          }
        </Container>
      </div>
    </Layout>
  )
}

export default LayoutsOverview;
