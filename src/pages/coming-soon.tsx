import type { NextPage } from 'next';

import { BiUpvote } from 'react-icons/bi';

import Button from 'components/Button';
import Layout from 'layouts/general/Layout';

const ComingSoon: NextPage = () => {
  return (
    <Layout>
      <div className='h-full flex items-center justify-center'>
        <div className='w-full max-w-2xl pb-20 text-center'>
          <h1 className='mb-4 font-semibold text-6xl'>Coming soon</h1>

          <p className='mb-14 font-medium text-slate-500'>This feature is not yet implemented, click the button if you would like to have this option as soon as possible</p>

          <Button size='lg' variant='primary'>
            <BiUpvote size={16} />
            Vote up
            <BiUpvote size={16} />
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default ComingSoon;
