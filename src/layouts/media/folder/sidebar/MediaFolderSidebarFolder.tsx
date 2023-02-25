import React, { useState } from 'react';

import Sidebar from 'components/Sidebar';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const MediaFolderSidebarFolder: React.FC = () => {
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <Sidebar.Body className='px-5'>
      {/* Folder preview */}
      <div className='mb-6 pt-6'>
        <div className='relative w-full h-44 p-3 bg-gray-300 rounded-lg folder'>
          <div className='absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-end p-4 bg-gray-200 rounded-lg'>
            {/* <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 -mt-3 object-contain'
              alt=''
            /> */}

            <div className='font-medium'>Folder name</div>
            <div className='text-sm text-slate-500'>7.9 MB</div>
          </div>
        </div>
      </div>
      
      {/* Folder informations */}
      <div className='mb-6'>
        <div className='pb-3 border-b border-gray-200 font-medium'>Information</div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Created by</div>
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
      </div>

      {/* Folder settings */}
      <div className='mb-6'>
        <div className='pb-3 border-b border-gray-200 font-medium'>Settings</div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Background</div>
            </Col>

            <Col>
              <div className='font-medium'>#0da6e9</div>
            </Col>
          </Row>
        </div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Color 1</div>
            </Col>

            <Col>
              <div className='font-medium'>#0e172a</div>
            </Col>
          </Row>
        </div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Color 2</div>
            </Col>

            <Col>
              <div className='font-medium'>#64748b</div>
            </Col>
          </Row>
        </div>

        <div className='py-3 border-b border-gray-200 text-sm'>
          <Row justify='between'>
            <Col>
              <div className='text-slate-500'>Preview image</div>
            </Col>

            <Col>
              <span className='text-slate-500'>none</span>
            </Col>
          </Row>
        </div>
      </div>

      {/* Actions */}
      <div>
        <Button 
          variant='danger-outline'
          block
          onClick={() => setShowModalConfirmDeletion(true)}
        >
          Delete
        </Button>
      </div>

      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </Sidebar.Body>
  )
}

export default MediaFolderSidebarFolder;
