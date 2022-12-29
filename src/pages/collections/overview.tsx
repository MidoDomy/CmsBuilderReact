import type { NextPage } from 'next';
import { useState } from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';

import Layout from 'layouts/Layout';
import CollectionsCard from 'layouts/collections/CollectionsCard';

const CollectionsOverview: NextPage = () => {

  const [isTableView, setIsTableView] = useState(true);

  return (
    <Layout>
      <div className='flex justify-between items-end mb-16 pr-10 border-b'>
        <h1 className='text-center text-4xl font-medium text-base-primary pb-4'>Collections</h1>

        <div>
          <Button className='transform translate-y-1/2 bg-red-400 rounded-full'
            square
            onPress={() => alert('Button pressed!')}
          >
            <Icon name='plus' />
          </Button>
        </div>
      </div>

      <div className='flex gap-2 items-center justify-end border-b border-base-white mb-4 py-3'>
        <Button
          variant='secondary' 
          square
          onPress={() => setIsTableView(false)}  
        >
          <Icon name='categories' />
        </Button>

        <Button 
          variant='secondary' 
          square
          onPress={() => setIsTableView(true)}  
        >
          Table
        </Button>
      </div>

      {isTableView ? 
        <div>
          Table view
        </div>
        :
        <div className='flex flex-wrap gap-4'>
          <CollectionsCard link='/collections/blogs' name='Blogs' />
          <CollectionsCard link='/collections/overview' name='Articles' />
        </div>
      }
    </Layout>
  )
}

export default CollectionsOverview;
