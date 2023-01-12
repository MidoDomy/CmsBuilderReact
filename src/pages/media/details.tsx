import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import Container from 'components/Structuring/Container';
import Flex from 'components/Structuring/Flex';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Image from 'components/Image';

const MediaDetails: NextPage = () => {
  return (
    <Layout>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <Flex className='pb-3 border-b border-gray-200 dark:border-gray-700' 
            justify='between'
          >
            <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Folder one</h2>

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

      <div>
        <Container>
          
        </Container>
      </div>

      <Container>
        <Flex gap={16}>
          <div className='cursor-pointer'>
            <div className='w-56 p-2 aspect-video bg-white border rounded'>
              <Image className='w-full h-full object-contain' src='app-image.png' />
            </div>

            <div className='pt-2 text-sm text-slate-700'>App image</div>
          </div>

          <div>
            <div className='w-56 p-2 aspect-video bg-white border rounded'>
              <Image className='w-full h-full object-contain' src='light-theme.png' />
            </div>

            <div className='pt-2 text-sm text-slate-700'>Light theme</div>
          </div>

          <div>
            <div className='w-56 p-2 aspect-video bg-white border rounded'>
              <Image className='w-full h-full object-contain' src='dark-theme.png' />
            </div>

            <div className='pt-2 text-sm text-slate-700'>Dark theme</div>
          </div>
        </Flex>
      </Container>
    </Layout>
  )
}

export default MediaDetails;
