import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import CategoriesSidebar from 'layouts/categories/CategoriesSidebar';
import CategoriesContent from 'layouts/categories/CategoriesContent';

const Categories: NextPage = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <CategoriesSidebar />
        <CategoriesContent />
      </div>
    </Layout>
  )
}

export default Categories;
