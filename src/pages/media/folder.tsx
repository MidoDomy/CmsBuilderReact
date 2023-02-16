import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import DataGrid from 'components/DataGrid';
import MediaFolderModalImport from 'layouts/media/folder/MediaFolderModalImport';
import MediaFolderGridItem from 'layouts/media/folder/MediaFolderGridItem';
import MediaFolderTableItem from 'layouts/media/folder/MediaFolderTableItem';
import MediaFolderSidebar from 'layouts/media/folder/MediaFolderSidebar';

const MediaFolder: NextPage = () => {
  const columns = [
    { key: 'image', name: '' },
    { key: 'name', name: 'Name' },
    { key: 'fileName', name: 'File name' },
    { key: 'size', name: 'Size' },
    { key: 'dimensions', name: 'Dimensions' },
    { key: 'created', name: 'Created' },
    { key: 'modified', name: 'Modified' }
  ];
  
  const medias = [
    { id: 2, name: 'App image', fileName: 'app-image.png', size: '2.8 MB', dimensions: '4032 * 3024', created: 'June 8, 2020', modified: 'June 8, 2020' },
    { id: 0, name: 'Light theme', fileName: 'light-theme.png', size: '3.2 MB', dimensions: '4032 * 3024', created: 'June 8, 2020', modified: 'June 8, 2020' },
    { id: 1, name: 'Dark theme', fileName: 'dark-theme.png', size: '2.5 MB', dimensions: '4032 * 3024', created: 'June 8, 2020', modified: 'June 8, 2020' }
  ];

  const [isTableView, setIsTableView] = useState(true);
  const [showModalImport, setShowModalImport] = useState(false);

  return (
    <Layout>
      <Row gapX={0}>
        <Col fill>
          {/* Page header */}
          <PageHeader
            returnRoute='/media'
            title='Media folder'
            actions={
              <Button onClick={() => setShowModalImport(true)}>
                <Icon name='plus' size={18} />
                <span>Import new</span>
              </Button>
            }
          />

          {/* Modal import */}
          <MediaFolderModalImport 
            isOpen={showModalImport}
            onClose={() => setShowModalImport(false)}
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

          {/* Media files */}
          <div>
            <Container>
              {isTableView ? 
                <DataGrid columns={columns}>
                  {medias?.map(media =>
                    <MediaFolderTableItem 
                      key={media. id}
                      image={media.fileName}
                      name={media.name}
                      fileName={media.fileName}
                      size={media.size}
                      dimensions={media.dimensions}
                      created={media.created}
                      modified={media.modified}
                      active={media.id == 1}
                    />
                  )}
                </DataGrid>
                :
                <Row gapX={16} gapY={32}>
                  {medias?.map(media =>
                    <Col span={2} 
                      key={media.id}
                    >
                      <MediaFolderGridItem
                        image={media.fileName}
                        name={media.name}
                        size={media.size}
                        active={media.id == 1}
                      />
                    </Col>
                  )}
                </Row>
              }
            </Container>
          </div>
        </Col>

        {/* Sidebar */}
        <Col>
          <MediaFolderSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default MediaFolder;
