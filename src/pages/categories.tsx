import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import Flex from 'components/Structuring/Flex';
import CategoriesSidebar from 'layouts/categories/CategoriesSidebar';
import CategoriesContent from 'layouts/categories/CategoriesContent';

const Categories: NextPage = () => {
  return (
    <Layout>
      <Flex>
        <CategoriesSidebar />
        <CategoriesContent />
      </Flex>
    </Layout>
  )
}

export default Categories;
