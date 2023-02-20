import React, { useState } from 'react';

import Modal from 'components/Modal';
import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Image from 'components/Image';
import Button from 'components/Button';
import Icon from 'components/Icon';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const CategoriesLayoutModalChange: React.FC<Props> = ({isOpen, onClose}) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      showClose
    >
      <Modal.Header>Choose layout</Modal.Header>

      <Modal.Body>
        {/* Search */}
        <div className='mb-6'>
          <Form.InputGroup>
            <div className='relative flex-1'>
              <Form.Input className='[&_input]:rounded-l-3xl'
                placeholder='Search layouts...'
                prefix={<Icon name='search' size={16} />}
                size='sm'
                onChange={(e: any) => {setSearchValue(e.currentTarget.value)}}
              />

              {
                searchValue.length > 0 &&
                <Button className='absolute top-1/2 right-0 -translate-y-1/2'
                  variant='ghost'
                  size='xs'
                  rounded
                  onClick={() => {setSearchValue('')}}
                >
                  <Icon name='x' size={16} />
                </Button>
              }
            </div>

            <Form.Select className='[&_select]:rounded-r-3xl'
              placeholder='All'
              size='sm'
              options={[
                {value: 'all', name: 'All'},
                {value: 'basic', name: 'Basic'},
                {value: 'pages', name: 'Pages'},
                {value: 'settings', name: 'Settings'}
              ]}
            />
          </Form.InputGroup>
        </div>
        
        <Row gapX={12} gapY={12}>
          <Col span={4}>
            <div className='p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow cursor-pointer'>
              <Image className='h-28 mb-2 object-cover border rounded'
                alt='' 
              />

              <div className='text-xs'>
                <div className='font-medium'>Layout name</div>
                <div>Layout group name</div>
              </div>
            </div>
          </Col>

          <Col span={4}>
            <div className='p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow cursor-pointer'>
              <Image className='h-28 mb-2 object-cover border rounded'
                alt='' 
              />

              <div className='text-xs'>
                <div className='font-medium'>Layout name</div>
                <div>Layout group name</div>
              </div>
            </div>
          </Col>

          <Col span={4}>
            <div className='p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow cursor-pointer'>
              <Image className='h-28 mb-2 object-cover border rounded'
                alt='' 
              />

              <div className='text-xs'>
                <div className='font-medium'>Layout name</div>
                <div>Layout group name</div>
              </div>
            </div>
          </Col>

          <Col span={4}>
            <div className='p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow cursor-pointer'>
              <Image className='h-28 mb-2 object-cover border rounded'
                alt='' 
              />

              <div className='text-xs'>
                <div className='font-medium'>Layout name</div>
                <div>Layout group name</div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Row gapX={8} justify='end'>
          <Col>
            <Button onClick={onClose}>
              Cancel
            </Button>
          </Col>

          <Col>
            <Button 
              variant='primary'
              onClick={onClose}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default CategoriesLayoutModalChange;
