import React, { useState } from 'react';

import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Image from 'components/Image';
import Button from 'components/Button';
import Section from 'layouts/general/Section';
import CategoriesLayoutModalChange from './layout/CategoriesLayoutModalChange';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const CategoriesLayout: React.FC = () => {
  const [showModalLayoutChange, setShowModalLayoutChange] = useState(false);
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <Section title='Layout template'>
        <Row gapX={24}>
          <Col span={5}>
            <div className='p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow cursor-pointer'
              onClick={() => setShowModalLayoutChange(true)}
            >
              <Image className='h-32 object-cover rounded'
                alt='' 
              />
            </div>
          </Col>

          <Col span={7}>
            <div className='mb-4 text-sm'>
              <div className='font-medium'>Layout name</div>
              <div>Layout group name</div>
            </div>

            <Row gapX={8}>
              <Col>
                <Button 
                  size='sm'
                  onClick={() => setShowModalLayoutChange(true)}
                >
                  Change layout
                </Button>
              </Col>

              <Col>
                <Button 
                  href='/content/layouts/edit'
                  size='sm'
                >
                  <FiEdit2 size={16} />
                  Editor
                </Button>
              </Col>

              <Col>
                <Button
                  variant='danger-outline'
                  size='sm'
                  square
                  onClick={() => setShowModalConfirmDeletion(true)}
                >
                  <FiTrash2 size={16} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>

      {/* Modal confirm deletion */}
      <CategoriesLayoutModalChange 
        isOpen={showModalLayoutChange}
        onClose={() => setShowModalLayoutChange(false)}
      />
      
      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </>
  )
}

export default CategoriesLayout;
