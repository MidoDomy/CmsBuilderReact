import type { NextPage } from 'next';
import { useState } from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Button from 'components/Button';
import Icon from 'components/Icon';
import IconCard from 'layouts/content/utils/icons/IconsCard';
import IconsModalAdd from 'layouts/content/utils/icons/IconsModalAdd';

const Icons: NextPage = () => {
  const icons = [
    'arrow-head-down', 
    'arrow-head-left', 
    'arrow-head-right', 
    'arrow-head-up',
    'bell', 
    'categories', 
    'circle', 
    'checkmark', 
    'collections', 
    'content', 
    'edit', 
    'home', 
    'letter', 
    'media',
    'night',
    'plus',
    'search',
    'settings',
    'sun',
    'three-dots',
    'trash',
    'x'
  ]

  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Icons'
        description='Add icons that you will use in your project.'
        actions={
          <Button onClick={() => setShowModalAdd(true)}>
            <Icon name='plus' size={18} />
            <span>Add icon</span>
          </Button>
        }
      />

      {/* Modal add icon */}
      <IconsModalAdd
        isOpen={showModalAdd}
        onClose={() => setShowModalAdd(false)}
      />

      {/* Content */}
      <div>
        <Container>
          <Row gapX={16} gapY={20}>
            {icons?.map((icon, index) => (
              <Col key={index}>
                <IconCard icon={icon} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Icons;
