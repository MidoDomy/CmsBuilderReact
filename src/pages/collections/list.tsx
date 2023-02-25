import type { NextPage } from 'next';
import { useState } from 'react';

import { FiPlus, FiList, FiGrid, FiEdit2 } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import DataGrid from 'components/DataGrid';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import CollectionsListTableItem from 'layouts/collections/list/CollectionsListTableItem';
import CollectionsListGridItem from 'layouts/collections/list/CollectionsListGridItem';

const CollectionsList: NextPage = () => {
  const columns = [
    { key: 'image', name: '' },
    { key: 'name', name: 'Name' },
    { key: 'description', name: 'Description' },
    { key: 'created', name: 'Created' },
    { key: 'modified', name: 'Modified' },
    { key: 'active', name: 'Active' }
  ];
  
  const collections = [
    { id: 0, name: 'Item 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', created: 'June 8, 2020', modified: 'June 8, 2020', active: false },
    { id: 1, name: 'Item 2', description: '', created: 'June 8, 2020', modified: 'June 8, 2020', active: true },
    { id: 2, name: 'Item 3', description: 'Lorem ipsum dolor sit amet consectetur.', created: 'June 8, 2020', modified: 'June 8, 2020', active: true }
  ];

  const [isTableView, setIsTableView] = useState(true);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader 
        title='Collection name'
        description='Collection small description goes here.'
        returnRoute='/collections/overview'
        actions={
          <Row gapX={8}>
            <Col>
              <Button href='/collections/edit'>
                <FiEdit2 size={16} />
                Edit
              </Button>
            </Col>

            <Col>
              <Button href='/collections/item'>
                <FiPlus size={16} />
                Add item
              </Button>
            </Col>
          </Row>
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
                <CollectionsListTableItem 
                  key={collection. id}
                  link='/collections/item' 
                  name={collection.name}
                  description={collection.description}
                  created={collection.created}
                  modified={collection.modified}
                  active={collection.active}
                />
              )}
            </DataGrid>
            :
            <Row gapX={16} gapY={32}>
              {collections?.map(collection =>
                <Col span={3} 
                  key={collection.id}
                >
                  <CollectionsListGridItem
                    link='/collections/item' 
                    name={collection.name}
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

export default CollectionsList;
