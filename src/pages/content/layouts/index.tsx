import type { NextPage } from 'next';
import { useState } from 'react';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import LayoutsCard from 'layouts/content/layouts/LayoutsCard';

const Layouts: NextPage = () => {
  const [isTableView, setIsTableView] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Layouts'
        description='You can assign layouts to pages, but also inherit content from one another.'
        actions={
          <Button href='/layouts/detail'>
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
              TODO: https://dev-oasis.atlassian.net/browse/CB-84
            </div>
            :
            <div>
              {/* Layout group */}
              <div className='mb-10'>
                <h5 className='mb-6 pb-2 font-medium text-lg border-b'>Basic</h5>
                <Row gapX={16}>
                  <Col span={3}>
                    <LayoutsCard
                      link='/layouts/detail' 
                      name='Header and Footer'
                    />
                  </Col>

                  <Col span={3}>
                    <LayoutsCard
                      link='/layouts/detail' 
                      name='Header and Footer minimal'
                    />
                  </Col>
                </Row>
              </div>

              {/* Layout group */}
              <div className='mb-10'>
                <h5 className='mb-6 pb-2 font-medium text-lg border-b'>Pages</h5>

                <Row gapX={16}>
                  <Col span={3}>
                    <LayoutsCard
                      link='/layouts/detail' 
                      name='Homepage'
                    />
                  </Col>

                  <Col span={3}>
                    <LayoutsCard
                      link='/layouts/detail' 
                      name='Landing page'
                    />
                  </Col>
                </Row>
              </div>

              {/* Layout group */}
              <div className='mb-10'>
                <h5 className='mb-6 pb-2 font-medium text-lg border-b'>Settings</h5>

                <Row gapX={16}>
                  <Col span={3}>
                    <LayoutsCard
                      link='/layouts/detail' 
                      name='Basic settings layout'
                    />
                  </Col>
                </Row>
              </div>
            </div>
          }
        </Container>
      </div>
    </Layout>
  )
}

export default Layouts;
