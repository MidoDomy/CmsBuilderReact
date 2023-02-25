import type { NextPage } from 'next';

import { FiCheck } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Tabs from 'components/Tabs';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import CategoriesSidebar from 'layouts/categories/CategoriesSidebar';
import CategoriesGeneral from 'layouts/categories/CategoriesGeneral';
import CategoriesCustomFields from 'layouts/categories/CategoriesCustomFields';
import CategoriesSEO from 'layouts/categories/CategoriesSEO';
import CategoriesLayout from 'layouts/categories/CategoriesLayout';

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
            description='Category description'
            actions={
              <Button variant='primary'>
                <FiCheck size={18} />
                <span>Save</span>
              </Button>
            }
          />
          
          {/* Content */}
          <div>
            <Container>
              <Tabs active='general'>
                <Tabs.Nav className='mb-10'>
                  <Tabs.NavItem name='general'>
                    General
                  </Tabs.NavItem>

                  <Tabs.NavItem name='customFields'>
                    Custom fields
                  </Tabs.NavItem>

                  <Tabs.NavItem name='seo'>
                    SEO
                  </Tabs.NavItem>

                  <Tabs.NavItem name='layout'>
                    Layout
                  </Tabs.NavItem>
                </Tabs.Nav>

                <Tabs.Content name='general'>
                  <CategoriesGeneral />
                </Tabs.Content>

                <Tabs.Content name='customFields'>
                  <div className='-mt-5 mb-8 text-slate-500 text-sm'>
                    Editing fields and sections will affect all categories.
                  </div>

                  <CategoriesCustomFields />
                </Tabs.Content>

                <Tabs.Content name='seo'>
                  <CategoriesSEO />
                </Tabs.Content>

                <Tabs.Content name='layout'>
                  <CategoriesLayout />
                </Tabs.Content>
              </Tabs>
            </Container>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Categories;
