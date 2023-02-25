import type { NextPage } from 'next';
import { useState } from 'react';

import { FiPlus, FiList, FiGrid } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import DataGrid from 'components/DataGrid';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import CollectionsOverviewTableItem from 'layouts/collections/overview/CollectionsOverviewTableItem';
import CollectionsOverviewGridItem from 'layouts/collections/overview/CollectionsOverviewGridItem';

const CollectionsOverview: NextPage = () => {
  const columns = [
    { key: 'image', name: '' },
    { key: 'name', name: 'Name' },
    { key: 'description', name: 'Description' },
    { key: 'itemsCount', name: 'Items count' },
    { key: 'created', name: 'Created' },
    { key: 'modified', name: 'Modified' }
  ];
  
  const collections = [
    { id: 0, name: 'Blogs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', itemsCount: 43, created: 'June 8, 2020', modified: 'June 8, 2020' },
    { id: 1, name: 'Products', description: '', itemsCount: 3, created: 'June 8, 2020', modified: 'June 8, 2020' },
    { id: 2, name: 'Projects', description: 'Lorem ipsum dolor sit amet consectetur.', itemsCount: 7, created: 'June 8, 2020', modified: 'June 8, 2020' }
  ];

  const [isTableView, setIsTableView] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader 
        title='Collections'
        description='Create collections with similar data to keep your business organized.'
        actions={
          <Button href='/collections/edit'>
            <FiPlus size={16} />
            Add collection
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
                    <FiList size={18} />
                  </Button>
                </Col>

                <Col>
                  <Button className={`${!isTableView ? 'bg-white' : 'hover:bg-white'}`}
                    variant='ghost'
                    size='sm'
                    square
                    onClick={() => setIsTableView(false)}  
                  >
                    <FiGrid size={18} />
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
            <DataGrid columns={columns}>
              {collections?.map(collection =>
                <CollectionsOverviewTableItem 
                  key={collection. id}
                  link='/collections/list'
                  name={collection.name}
                  description={collection.description}
                  itemsCount={collection.itemsCount}
                  created={collection.created}
                  modified={collection.modified}
                />
              )}
            </DataGrid>
            :
            <Row gapX={16} gapY={32}>
              {collections?.map(collection =>
                <Col span={3} 
                  key={collection.id}
                >
                  <CollectionsOverviewGridItem
                    link='/collections/list' 
                    name={collection.name}
                    count={collection.itemsCount}
                    description={collection.description}
                  />
                </Col>
              )}
            </Row>
          }
        </Container>
      </div>
    </Layout>
  )
}

export default CollectionsOverview;
