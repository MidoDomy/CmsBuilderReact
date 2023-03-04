import React from 'react';
import Link from 'next/link';

import { FiMail, FiPhone } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Avatar from 'components/Avatar';

type Props = {
  link: string;
  img?: string;
  name: string;
  role?: string;
}

const EmployeeGridItem: React.FC<Props> = ({name, img, link, role}) => {
  return (
    <Link href={link}>
      <div className='relative flex flex-col h-full py-3 px-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow overflow-hidden'>
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
    </Link>
  )
}

export default EmployeeGridItem;
