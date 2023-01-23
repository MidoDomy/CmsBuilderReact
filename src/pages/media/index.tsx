import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from 'layouts/general/Layout';
import Container from 'components/Container';
import Flex from 'components/Structuring/Flex';
import Button from 'components/Button';
import Icon from 'components/Icon';
import MediaFolder from 'layouts/media/MediaFolder';

const Media: NextPage = () => {
  return (
    <Layout>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <Flex className='pb-3 border-b border-gray-200 dark:border-gray-700' 
            justify='between'
          >
            <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Media</h2>

            <Flex gap={10}>
              <Button>
                <Icon name='plus' size={18} />
                <span>Add</span>
              </Button>

              <Button variant='primary'>
                <Icon name='checkmark' size={18} />
                <span>Save</span>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </div>

      <Container>
        <Flex gap={32}>
          <Link href='/media/details'>
            <MediaFolder name='Folder One' size='5.8 Mbs' />
          </Link>

          <Link href='/media/details'>
            <MediaFolder name='Folder Two' size='14 Mbs' />
          </Link>

          <Link href='/media/details'>
            <MediaFolder name='Folder Three' size='1.2 Mbs' />
          </Link>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Media;
