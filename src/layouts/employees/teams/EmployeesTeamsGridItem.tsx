import React, { useState } from 'react';
import Link from 'next/link';

import { FiMail, FiPhone, FiX } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

type Props = {
  link: string;
  img?: string;
  name: string;
  role?: string;
}

const EmployeesTeamsGridItem: React.FC<Props> = ({name, img, link, role}) => {
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <div className='relative flex flex-col h-full py-3 px-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow overflow-hidden'>
        <div className='absolute top-3 right-3'>
            <Button 
              variant='danger-outline'
              size='sm'
              rounded
              onClick={() => setShowModalConfirmDeletion(true)}
            >
              <FiX size={16} />
            </Button>
          </div>

        <div className='flex flex-col justify-center items-center mb-5'>
          <Avatar className='mb-4'
            size='xl'
            src={img} 
            alt='Collection img'
          />

          <div className='font-medium'>
            {name}
          </div>

          <div className='text-sm text-slate-500'>
            {role}
          </div>
        </div>

        <div className='p-2 bg-gray-50 border border-gray-200 rounded'>
          <div className='mb-3'>
            <Row gapX={16} justify='between'>
              <Col>
                <div className='text-xs text-slate-500'>Role</div>
                <div className='text-sm'>{role}</div>
              </Col>

              <Col>
                <div className='text-xs text-slate-500'>Date Hired</div>
                <div className='text-sm'>17/03/2021</div>
              </Col>
            </Row>
          </div>

          <div className='flex gap-1.5 items-center text-sm'>
            <FiMail size={14} />
            test@test.com
          </div>
          
          <div className='flex gap-1.5 items-center text-sm'>
            <FiPhone size={14} />
            +1-202-555-0123
          </div>
        </div>
      </div>

      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </>
  )
}

export default EmployeesTeamsGridItem;
