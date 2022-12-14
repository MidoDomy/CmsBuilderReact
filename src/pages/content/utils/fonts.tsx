import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import FontCard from 'layouts/Content/Utils/Fonts/FontCard';

const Fonts: NextPage = () => {
  return (
    <Layout>
      <h1 className='mb-10 text-center text-4xl font-medium drop-shadow-md text-base-dark'>Fonts</h1>

      <div className='flex gap-4 flex-wrap'>
        <FontCard name='Sans serif' />
        <FontCard name='Sans serif' />
        <FontCard name='Sans serif' />
      </div>
    </Layout>
  )
}

export default Fonts;
