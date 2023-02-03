import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import MediaFolderImage from 'layouts/media/folder/MediaFolderImage';

const MediaFolder: NextPage = () => {
  return (
    <Layout>
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
            <div className='py-1 px-1.5 bg-gray-200 rounded-md'>
              <Row gapX={8}>
                <Col>
                  <Button
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
    </Layout>
  )
}

export default MediaFolder;
