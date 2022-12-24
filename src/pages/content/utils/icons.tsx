import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from 'layouts/Layout';
import Container from 'components/Grid/Container';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Icon from 'components/Icon';
import IconCard from 'layouts/Content/Utils/Icons/IconCard';

const Icons: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <Layout>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <div className='flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700'>
            <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Icons</h2>

            <div className='flex gap-2.5'>
              <Button onClick={toggleModal}>
                <Icon name='plus' size={18} />
                <span>Add</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className='flex gap-4 flex-wrap'>
            <IconCard icon='arrow-head-down' />
            <IconCard icon='arrow-head-up' />
            <IconCard icon='arrow-left' />
            <IconCard icon='bell' />
            <IconCard icon='categories' />
            <IconCard icon='checkmark' />
            <IconCard icon='circle' />
            <IconCard icon='collections' />
            <IconCard icon='content' />
            <IconCard icon='edit' />
            <IconCard icon='home' />
            <IconCard icon='letter' />
            <IconCard icon='media' />
            <IconCard icon='night' />
            <IconCard icon='sun' />
            <IconCard icon='plus' />
            <IconCard icon='search' />
            <IconCard icon='settings' />
            <IconCard icon='x' />
          </div>
        </Container>
      </div>

      {/* Modal edit font */}
      <Modal size='sm' isOpen={isOpen} toggle={toggleModal} headline='Add icon'>
        <div>
          <label className='block pb-1'>Icon name</label>
          <input className='mb-3 w-full border border-gray-200 rounded py-1.5 px-3 placeholder:font-light' type='text' placeholder='Enter icon name' />

          <label className='block pb-1'>Svg</label>
          <textarea className='w-full border border-gray-200 rounded py-1.5 px-3 placeholder:font-light'
            rows='7' 
            placeholder='Enter svg ...'
          ></textarea>
        </div>
        
        <div className='flex gap-3 justify-end mt-4 -mx-6 px-6 pt-3 border-t border-gray-200'>
          <Button 
            onPress={toggleModal}
          >
            Cancel
          </Button>

          <Button 
            variant='primary'
            onPress={toggleModal}
          >
            Save
          </Button>
        </div>
      </Modal>
    </Layout>
  )
}

export default Icons;
