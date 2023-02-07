import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Form from 'components/Form';
import IconCard from 'layouts/content/utils/icons/IconCard';

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

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Icons'
        description='Add icons that you will use in your project.'
        actions={
          <Button onClick={toggleModal}>
            <Icon name='plus' size={18} />
            <span>Add icon</span>
          </Button>
        }
      />

      {/* Content */}
      <div>
        <Container>
          <div className="flex flex-wrap gap-5">
            {icons?.map((icon, index) => (
              <IconCard key={index} icon={icon} />
            ))}
          </div>
        </Container>
      </div>

      {/* Modal add icon */}
      <Modal 
        size='sm' 
        isOpen={isOpen} 
        onClose={toggleModal}
      >
        <Modal.Header>
          Add new icon
        </Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Input label='Icon name' 
              placeholder='Enter icon name...'
            />
          </Form.Group>

          <Form.Group>
            <Form.Textarea label='Svg content' 
              placeholder='Enter svg ...'
            />
          </Form.Group>
        </Modal.Body>
        
        <Modal.Footer>
          <Row gapX={8} justify='end'>
            <Col>
              <Button 
                size='sm'
                onClick={toggleModal}
              >
                Cancel
              </Button>
            </Col>

            <Col>
              <Button 
                variant='primary'
                size='sm'
                onClick={toggleModal}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Icons;
