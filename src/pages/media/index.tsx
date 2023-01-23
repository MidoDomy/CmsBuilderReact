import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from 'layouts/general/Layout';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import MediaFolder from 'layouts/media/MediaFolder';

const Media: NextPage = () => {
  return (
    <Layout>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <div className='pb-3 border-b border-gray-200'>
            <Row justify='between'>
              <Col>
                <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Media</h2>
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
        <Row>
          <Col>
            <Link href='/media/details'>
              <MediaFolder name='Folder One' size='5.8 Mbs' />
            </Link>
          </Col>

          <Col>
            <Link href='/media/details'>
              <MediaFolder name='Folder Two' size='14 Mbs' />
            </Link>
          </Col>

          <Col>
            <Link href='/media/details'>
              <MediaFolder name='Folder Three' size='1.2 Mbs' />
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Media;
