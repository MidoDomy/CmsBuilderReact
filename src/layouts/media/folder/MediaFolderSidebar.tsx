import React from 'react';

import Sidebar from 'components/Sidebar';
import Image from 'components/Image';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';

const MediaOverviewSidebar: React.FC = () => {
  return (
    <Sidebar className='w-96 pt-7'>
      <Sidebar.Body className='px-8'>
        {/* Image */}
        <div className='mb-4'>
          <Image className='w-full rounded-xl'
            src='dark-theme.png' 
            alt='dark-theme.png'
          />
        </div>
        
        {/* Image info */}
        <div className='mb-5'>
          <div className='font-medium text-xl'>dark-theme.png</div>
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

          <Form.Textarea className='[&_textarea]:placeholder:italic [&_textarea]:placeholder:font-light'
            placeholder='Add description to this file.'
          />
        </div>

        {/* Used in */}
        <div className='mb-6'>
          <div className='pb-3 border-b border-gray-200 font-medium'>Used in</div>

          <div className='py-3 border-b border-gray-200 text-sm'>
            Home page
          </div>

          <div className='py-3 border-b border-gray-200 text-sm'>
            Detail page
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
              <Button block>
                Delete
              </Button>
            </Col>
          </Row>
        </div>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default MediaOverviewSidebar;
