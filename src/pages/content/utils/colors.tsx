import type { NextPage } from 'next';
import { useState } from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import Form from 'components/Form';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import ColorsGroup from 'layouts/content/utils/colors/ColorsGroup';

const Colors: NextPage = () => {
  const colorsGroups = [
    {
      id: '0',
      name: 'Basic',
      colors: [
        {id: '0', name: 'White', value: '#ffffff'}, 
        {id: '1', name: 'Black', value: '#000000'}, 
        {id: '2', name: 'Primary', value: '#0284c7'}, 
        {id: '3', name: 'Secondary', value: '#475569'}
      ]
    },
    {
      id: '1',
      name: 'Primary',
      colors: [
        {id: '0', name: '50', value: '#f0f9ff'},
        {id: '1', name: '100', value: '#e0f2fe'},
        {id: '2', name: '200', value: '#bae6fd'},
        {id: '3', name: '300', value: '#7dd3fc'},
        {id: '4', name: '400', value: '#38bdf8'},
        {id: '5', name: '500', value: '#0ea5e9'}
      ]
    },
    {
      id: '2',
      name: 'Secondary',
      colors: [
        {id: '0', name: '50', value: '#f8fafc'},
        {id: '1', name: '100', value: '#f1f5f9'},
        {id: '2', name: '200', value: '#e2e8f0'},
        {id: '3', name: '300', value: '#cbd5e1'},
        {id: '4', name: '400', value: '#94a3b8'},
        {id: '5', name: '500', value: '#64748b'}
      ]
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <Layout metaTitle='Cms builder - colors'>
      {/* Page header */}
      <PageHeader
        title='Colors'
        description='Add colors that you will use in your project.'
        actions={
          <Button onClick={toggleModal}>
            <Icon name='plus' size={18} />
            <span>Add Group</span>
          </Button>
        }
      />

      {/* Content */}
      <div>
        <Container>
          <div className='flex flex-col gap-8'>
            {colorsGroups?.map(group => (
              <ColorsGroup
                key={group.id} 
                name={group.name} 
                colors={group.colors} 
              />
            ))}
          </div>
        </Container>
      </div>

      {/* Add color group modal */}
      <Modal 
        size='sm'
        isOpen={showModal} 
        onClose={toggleModal}
      >
        <Modal.Header>Add color group</Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Input label='Color group name' />
          </Form.Group>

          <Form.Group>
            (TODO: Data table layout)
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
                size='sm'
                variant='primary'
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

export default Colors;
