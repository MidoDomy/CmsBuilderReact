import type { NextPage } from 'next';

import { FiPlus } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Tabs from 'components/Tabs';
import Button from 'components/Button';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';

const Board: NextPage = () => {
  return (
    <Layout>
      <PageHeader
        title='Task management'
        description=''
        actions={
          <Button>
            <FiPlus size={18} />
            Add task
          </Button>
        }
      />


      <div>
        <Container fluid>
          
        </Container>
      </div>
    </Layout>
  )
}

export default Board;
