import type { NextPage } from 'next';

import Container from 'components/Container';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import CategoriesSidebar from 'layouts/categories/CategoriesSidebar';
import PageHeader from 'layouts/general/PageHeader';
import CategoriesGeneral from 'layouts/categories/CategoriesGeneral';
import CategoriesSEO from 'layouts/categories/CategoriesSEO';
import CategoriesCustomFields from 'layouts/categories/CategoriesCustomFields';

const Categories: NextPage = () => {
  return (
    <Layout>
      <Row gapX={0}>
        <Col>
          <CategoriesSidebar />
        </Col>

        <Col fill>
          {/* Page header */}
          <PageHeader
            title='Category Name'
            actions={
              <Button variant='primary'>
                <Icon name='checkmark' size={18} />
                <span>Save</span>
              </Button>
            }
          />
          
          {/* Content */}
          <Container>
            <CategoriesGeneral />
            <CategoriesSEO />
            <CategoriesCustomFields />
          </Container>
        </Col>
      </Row>
    </Layout>
  )
}

export default Categories;
