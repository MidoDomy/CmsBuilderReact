import type { NextPage } from "next";

import Layout from 'layouts/Layout';
import IconCard from "layouts/Content/Utils/Icons/IconCard";

const Icons: NextPage = () => {
  return (
    <Layout>
      <h1 className='mb-10 text-center text-4xl font-medium drop-shadow-md text-base-dark'>Icons</h1>

      <div className='flex gap-4 flex-wrap'>
        <IconCard name='x' icon="x" />
        <IconCard name='content' icon='content' />
        <IconCard name='home' icon='home' />
      </div>
    </Layout>
  )
}

export default Icons;
