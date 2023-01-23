import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from 'layouts/general/Layout';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Icon from 'components/Icon';
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
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <div className='pb-3 border-b border-gray-200'>
            <Row justify='between'>
              <Col>
                <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Icons</h2>
              </Col>

              <Col>
                <Button onClick={toggleModal}>
                  <Icon name='plus' size={18} />
                  <span>Add</span>
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="flex flex-wrap gap-4">
            {icons?.map((icon, index) => (
              <IconCard key={index} icon={icon} />
            ))}
          </div>
        </Container>
      </div>

      {/* Modal edit font */}
      <Modal 
        size='sm' 
        isOpen={isOpen} 
      >
        <div>
          <label className='block pb-1'>Icon name</label>
          <input className='mb-3 w-full border border-gray-200 rounded py-1.5 px-3 placeholder:font-light' type='text' placeholder='Enter icon name' />

          <label className='block pb-1'>Svg</label>
          <textarea className='w-full border border-gray-200 rounded py-1.5 px-3 placeholder:font-light'
            rows='7' 
            placeholder='Enter svg ...'
          ></textarea>
        </div>
        
        <Modal.Footer>
          <Row gap={12}>
            <Col>
              <Button onClick={toggleModal}>
                Cancel
              </Button>
            </Col>

            <Col>
              <Button 
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

export default Icons;
