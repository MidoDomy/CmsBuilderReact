import type { NextPage } from 'next';
import { useState } from 'react';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import CollectionsCard from 'layouts/collections/CollectionsCard';

const CollectionsList: NextPage = () => {
  const [isTableView, setIsTableView] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader 
        title='Collection name'
        description='Small collection description.'
        returnRoute='/collections/overview'
        actions={
          <Button>
            <Icon name='plus' size={16} />
            Add new item
          </Button>
        }
      />

      {/* Controls */}
      <div>
        <Container>
          <div className='flex justify-end mb-5'>
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
              TODO: https://dev-oasis.atlassian.net/browse/CB-85
            </div>
            :
            <div>
              <Row gapX={16}>
                <Col span={3}>
                  <CollectionsCard 
                    link='/collections/item' 
                    name='Item 1' 
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                  />
                </Col>

                <Col span={3}>
                  <CollectionsCard 
                    link='/collections/item' 
                    name='Item 2' 
                  />
                </Col>
              </Row>
            </div>
          }
        </Container>
      </div>
    </Layout>
  )
}

export default CollectionsList;
