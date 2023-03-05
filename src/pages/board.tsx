import type { NextPage } from 'next';
import React, { useState } from 'react';

import { FiPlus, FiList, FiGrid } from 'react-icons/fi';
import { IoOptions } from 'react-icons/io5';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import DataGrid from 'components/DataGrid';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import BoardColumn from 'layouts/board/BoardColumn';
import BoardRow from 'layouts/board/BoardRow';

const Board: NextPage = () => {
  const columns = [
    { key: 'id', name: '' },
    { key: 'name', name: 'Name' },
    { key: 'role', name: 'Role' },
    { key: 'date', name: 'Date' }
  ];

  const boardColumns = [
    {id: 0, name: 'To do', tasks: [
      {id: 10, role: 'Design System', name: 'Component Library Update', completed: false},
      {id: 11, role: 'Feedback', name: 'Check Clients Feedback', completed: false}
    ]},
    {id: 1, name: 'Doing', tasks: [
      {id: 20, role: 'Video', name: 'Upload SpeedArt Videos', completed: false}
    ]},
    {id: 2, name: 'Review', tasks: []},
    {id: 3, name: 'Done', tasks: []}
  ];

  const [isTableView, setIsTableView] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Board'
        actions={
          <Button>
            <FiPlus size={18} />
            Add column / group
          </Button>
        }
      />

      {/* Controls */}
      <div className='pb-3 border-b border-gray-200'>
        <Container>
          <Row align='center' gapX={16}>
            <Col fill>
              <span className='text-sm text-slate-500'>Last updated on. 01/03/2022</span>
            </Col>

            <Col>
              <Button>
                <IoOptions size={18} />
                Filter
              </Button>
            </Col>

            <Col>
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
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content */}
      <div>
        <Container fluid={!isTableView}>
          {isTableView ?
            <div className='pt-10'>
              <DataGrid columns={columns}>
                {boardColumns?.map(column =>
                  <BoardRow  
                    key={column.id}
                    name={column.name}
                    tasks={column.tasks}
                  />
                )}
              </DataGrid>
            </div>
            :
            <Row gapX={0} noWrap>
              {boardColumns?.map(column =>
                <Col key={column.id}>
                  <BoardColumn 
                    name={column.name}
                    tasks={column.tasks} 
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

export default Board;
