import type { NextPage } from 'next';
import { useState } from 'react';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
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
    {
      id: 0,
      name: 'Basic',
      layouts: [
        { id: 0, name: 'Header and Footer', created: 'June 8, 2020', modified: 'June 8, 2020' },
        { id: 1, name: 'Header and Footer minimal', created: 'June 8, 2020', modified: 'June 8, 2020' }
      ]
    },
    {
      id: 1,
      name: 'Pages',
      layouts: [
        { id: 0, name: 'Homepage', created: 'June 8, 2020', modified: 'June 8, 2020' },
        { id: 1, name: 'Blog overview', created: 'June 8, 2020', modified: 'June 8, 2020' }
      ]
    },
    {
      id: 2,
      name: 'Settings',
      layouts: [
        { id: 0, name: 'Settings basic layout', created: 'June 8, 2020', modified: 'June 8, 2020' }
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
            <DataGrid columns={columns}>
              {layoutsGroups?.map(group =>
                <>
                  <tr className='[&:first-child>td]:pt-0'>
                    <td className='pt-3 font-medium'>{group.name}</td>
                  </tr>

                  {group.layouts?.map(layout =>
                    <LayoutsOverviewTableItem 
                      key={layout.id}
                      link='/content/layout/edit' 
                      name={layout.name}
                      created={layout.created}
                      modified={layout.modified}
                    />
                  )}
                </>
              )}
            </DataGrid>
            :
            <>
              {layoutsGroups?.map(group =>
                <Collapse className='mb-6 last:mb-0'
                  key={group.id}
                  active
                >
                  <Collapse.Trigger className='mb-4 hover:bg-gray-100 border-b rounded-md'>
                    <h5 className='font-medium'>{group.name}</h5>
                  </Collapse.Trigger>

                  <Collapse.Content>
                    <Row gapX={16} gapY={32}>
                      {group.layouts?.map(layout =>
                        <Col span={2.5} key={layout.id}>
                          <LayoutsOverviewGridItem
                            link='/content/layout/edit' 
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
