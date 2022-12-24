import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import Container from 'components/Grid/Container';
import Button from 'components/Button';
import Icon from 'components/Icon';
import FontCard from 'layouts/Content/Utils/Fonts/FontCard';

const Fonts: NextPage = () => {
  return (
    <Layout>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <div className='flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700'>
            <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Fonts</h2>

            <div className='flex gap-2.5'>
              <Button>
                <Icon name='plus' size={18} />
                <span>Add</span>
              </Button>

              <Button variant='primary'>
                <Icon name='checkmark' size={18} />
                <span>Save</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className='flex gap-6 items-start'>
            <div className='flex flex-wrap gap-6 flex-1'>
              <FontCard name='Sans serif' weights={['100', '200', '300', '400', '500', '600']} />
              <FontCard name='Roboto' weights={['100', '400', '500', '600']} />
              <FontCard name='Hanken Grotesk' weights={['300', '400', '500', '600']} />
              <FontCard name='Chivo Mono' weights={['400', '600']} />
              <FontCard name='Unbounded' weights={['200', '400', '600']} />
              <FontCard name='Open Sans' weights={['100', '200', '300', '400', '500', '600', '700', '900']} />
            </div>

            <div className='w-1/4 py-10 px-6 rounded-lg bg-gray-100 dark:bg-gray-800'>
              <div className='mb-4 text-xl text-slate-900 dark:text-slate-50'>Controls</div>

              <div>Weight</div>
              <div>Size</div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Fonts;
