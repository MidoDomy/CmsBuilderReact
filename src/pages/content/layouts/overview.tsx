import type { NextPage } from 'next';
import React, { useState } from 'react';

import { FiPlus, FiList, FiGrid } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Collapse from 'components/Collapse';
import DataGrid from 'components/DataGrid';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import LayoutsOverviewTableItem from 'layouts/content/layouts/overview/LayoutsOverviewTableItem';
import LayoutsOverviewGridItem from 'layouts/content/layouts/overview/LayoutsOverviewGridItem';

const LayoutsOverview: NextPage = () => {
  const columns = [
    { key: 'image', name: '' },
    { key: 'name', name: 'Name' },
    { key: 'created', name: 'Created' },
    { key: 'modified', name: 'Modified' }
  ];
  
  const layoutsGroups = [
    {id: 0, name: 'Basic', layouts: [
        { id: 10, name: 'Header and Footer', created: 'June 8, 2020', modified: 'June 8, 2020' },
        { id: 11, name: 'Header and Footer minimal', created: 'June 8, 2020', modified: 'June 8, 2020' }
      ]
    },
    {id: 1, name: 'Pages', layouts: [
        { id: 12, name: 'Homepage', created: 'June 8, 2020', modified: 'June 8, 2020' },
        { id: 13, name: 'Blog overview', created: 'June 8, 2020', modified: 'June 8, 2020' }
      ]
    },
    {id: 2, name: 'Settings', layouts: [
        { id: 14, name: 'Settings basic layout', created: 'June 8, 2020', modified: 'June 8, 2020' }
      ]
    }
  ];

  const [isTableView, setIsTableView] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Layouts overview'
        description='You can assign layouts to pages, but also inherit content from one another.'
        actions={
          <Button href='/content/layouts/edit'>
            <FiPlus size={18} />
            Add new
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
              {layoutsGroups?.map(group =>
                <React.Fragment key={group.id}>
                  <tr className='[&:first-child>td]:pt-0'>
                    <td className='pt-3 font-medium'>{group.name}</td>
                  </tr>

                  {group.layouts?.map(layout =>
                    <LayoutsOverviewTableItem 
                      key={layout.id}
                      link='/content/layouts/edit' 
                      name={layout.name}
                      created={layout.created}
                      modified={layout.modified}
                    />
                  )}
                </React.Fragment>          
              )}
            </DataGrid>
            :
            <>
              {layoutsGroups?.map(group =>
                <Collapse className='mb-4 last:mb-0'
                  key={group.id}
                  active
                >
                  <Collapse.Trigger className='mb-4 hover:bg-gray-100 border-b rounded-none hover:rounded'>
                    <h5 className='font-medium'>{group.name}</h5>
                  </Collapse.Trigger>

                  <Collapse.Content>
                    <Row gapX={16} gapY={32}>
                      {group.layouts?.map(layout =>
                        <Col span={2.5} key={layout.id}>
                          <LayoutsOverviewGridItem
                            link='/content/layouts/edit' 
                            name={layout.name}
                          />
                        </Col>
                      )}
                    </Row>
                  </Collapse.Content>
                </Collapse>
              )}
            </>
          }
        </Container>
      </div>
    </Layout>
  )
}

export default LayoutsOverview;
