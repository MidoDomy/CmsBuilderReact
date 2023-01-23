import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Image from 'components/Image';

const MediaDetails: NextPage = () => {
  return (
    <Layout>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <div className='pb-3 border-b border-gray-200'>
            <Row justify='between'>
              <Col>
                <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Folder one</h2>
              </Col>

              <Col>
                <Row gap={10}>
                  <Col>
                    <Button>
                      <Icon name='plus' size={18} />
                      <span>Add</span>
                    </Button>
                  </Col>

                  <Col>
                    <Button variant='primary'>
                      <Icon name='checkmark' size={18} />
                      <span>Save</span>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container>
        <Row gap={16}>
          <Col>
            <div className='cursor-pointer'>
              <div className='w-56 p-2 aspect-video bg-white border rounded'>
                <Image className='w-full h-full object-contain' src='app-image.png' />
              </div>

              <div className='pt-2 text-sm text-slate-700'>App image</div>
            </div>
          </Col>

          <Col>
            <div>
              <div className='w-56 p-2 aspect-video bg-white border rounded'>
                <Image className='w-full h-full object-contain' src='light-theme.png' />
              </div>

              <div className='pt-2 text-sm text-slate-700'>Light theme</div>
            </div>
          </Col>

          <Col>
            <div>
              <div className='w-56 p-2 aspect-video bg-white border rounded'>
                <Image className='w-full h-full object-contain' src='dark-theme.png' />
              </div>

              <div className='pt-2 text-sm text-slate-700'>Dark theme</div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default MediaDetails;
