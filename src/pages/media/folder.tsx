import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import MediaFolderImage from 'layouts/media/folder/MediaFolderImage';
import MediaFolderSidebar from 'layouts/media/folder/MediaFolderSidebar';

const MediaFolder: NextPage = () => {
  return (
    <Layout>
      <Row>
        {/* Main content */}
        <Col fill>
          {/* Page header */}
          <PageHeader
            returnRoute='/media'
            title='Images'
            actions={
              <Button>
                <Icon name='plus' size={18} />
                <span>Import new</span>
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
                      <Button className='hover:bg-white'
                        variant='ghost'
                        size='sm'
                        square
                      >
                        <Icon name='list' size={18} />
                      </Button>
                    </Col>

                    <Col>
                      <Button className='bg-white'
                        variant='ghost'
                        size='sm'
                        square
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
              <Row>
                <Col span={2}>
                  <MediaFolderImage 
                    image='app-image.png'
                    name='app-image.png'
                    size='3.9 MB'
                  />
                </Col>

                <Col span={2}>
                  <MediaFolderImage 
                    image='light-theme.png'
                    name='light-theme.png'
                    size='2.1 MB'
                  />
                </Col>

                <Col span={2}>
                  <MediaFolderImage 
                    image='dark-theme.png'
                    name='dark-theme.png'
                    size='3.3 MB'
                    active
                  />
                </Col>
              </Row>
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
