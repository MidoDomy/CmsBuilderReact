import React, { useState } from 'react';

import Sidebar from 'components/Sidebar';
import Row from 'components/Row';
import Col from 'components/Col';
import Image from 'components/Image';
import Button from 'components/Button';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const MediaFolderSidebarItem: React.FC = () => {
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <Sidebar.Body className='px-5'>
      {/* Image */}
      <div className='mb-4'>
        <Image className='w-full rounded-xl'
          src='dark-theme.png' 
          alt='dark-theme.png'
        />
      </div>
      
      {/* Image info */}
      <div className='mb-5'>
        <div className='font-medium text-lg'>dark-theme.png</div>
        <div className='text-slate-500'>3.2 MB</div>
      </div>

      {/* Informations */}
      <div className='mb-6'>
        <div className='pb-3 border-b border-gray-200 font-medium'>Information</div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Uploaded by</div>
            </Col>

            <Col>
              <div className='font-medium'>Marie Culver</div>
            </Col>
          </Row>
        </div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Created</div>
            </Col>

            <Col>
              <div className='font-medium'>June 8, 2020</div>
            </Col>
          </Row>
        </div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Last modified</div>
            </Col>

            <Col>
              <div className='font-medium'>June 8, 2020</div>
            </Col>
          </Row>
        </div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Dimensions</div>
            </Col>

            <Col>
              <div className='font-medium'>4032 * 3024</div>
            </Col>
          </Row>
        </div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Resolution</div>
            </Col>

            <Col>
              <div className='font-medium'>72 * 72</div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Description */}
      <div className='mb-6'>
        <div className='mb-3 font-medium'>Description</div>

        <div className='text-sm italic'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, amet est? Magni reprehenderit quaerat ipsa iusto similique ratione, nesciunt aliquid, velit tempore eligendi illum. Quia nesciunt aspernatur blanditiis eveniet velit.
        </div>

        {/* <Form.Textarea className='[&_textarea]:placeholder:italic [&_textarea]:placeholder:font-light'
          placeholder='Add description to this file.'
        /> */}
      </div>

      {/* Used in */}
      <div className='mb-6'>
        <div className='pb-3 border-b border-gray-200 font-medium'>Used in</div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row gapX={16} justify='between' align='center'>
            <Col>
              <span>Home page</span>
            </Col>

            <Col>
              <Button className='text-xs'
                variant='danger-outline'
                size='xs'
                onClick={() => setShowModalConfirmDeletion(true)}
              >
                Remove
              </Button>
            </Col>
          </Row>
        </div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row gapX={16} justify='between' align='center'>
            <Col>
              <span>Detail page</span>
            </Col>

            <Col>
              <Button className='text-xs'
                variant='danger-outline'
                size='xs'
                onClick={() => setShowModalConfirmDeletion(true)}
              >
                Remove
              </Button>
            </Col>
          </Row>
        </div>
      </div>

      {/* Actions */}
      <div>
        <Row gapX={16}>
          <Col fill>
            <Button 
              variant='primary'
              block
            >
              Download
            </Button>
          </Col>

          <Col fill>
            <Button 
              variant='danger-outline'
              block
              onClick={() => setShowModalConfirmDeletion(true)}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </div>

      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </Sidebar.Body>
  )
}

export default MediaFolderSidebarItem;
