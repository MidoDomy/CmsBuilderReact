import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import ColorCard from 'layouts/Content/Utils/Colors/ColorCard';

const Colors: NextPage = () => {
  return (
    <Layout>
      <h1 className='mb-10 text-center text-4xl font-medium drop-shadow-md text-base-dark'>Colors</h1>

      {/* Group */}
      <div className='mb-12'>
        <h2 className='mb-4 text-2xl text-base-dark'>Basic</h2>

        {/* List */}
        <div className='flex gap-4 flex-wrap'>
          <ColorCard
            name='Primary' 
            color='#73964a' 
          />

          <ColorCard
            name='Secondary' 
            color='#6d757d' 
          />

          <ColorCard
            name='Light' 
            color='#f5f5f5' 
          />

          <ColorCard
            name='White' 
            color='#ffffff' 
          />

          <ColorCard
            name='Black' 
            color='#000000' 
          />
        </div>
      </div>

      {/* Group */}
      <div>
        <h2 className='mb-4 text-2xl text-base-dark'>Shades</h2>

        {/* List */}
        <div className='flex gap-4 flex-wrap'>
          <ColorCard
            name='Primary' 
            color='#73964a' 
          />

          <ColorCard
            name='Secondary' 
            color='#6d757d' 
          />

          <ColorCard
            name='Light' 
            color='#f5f5f5' 
          />

          <ColorCard
            name='White' 
            color='#ffffff' 
          />

          <ColorCard
            name='Black' 
            color='#000000' 
          />
        </div>
      </div>
    </Layout>
  )
}

export default Colors;
