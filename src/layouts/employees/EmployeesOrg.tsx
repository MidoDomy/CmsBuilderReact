import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Avatar from 'components/Avatar';

const EmployeesOrg: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* Row */}
      <div>
        {/* Item */}
        <div className='bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
          <div className='px-3 py-2 border-b border-gray-200 font-medium'>
            Chief executive officer
          </div>

          <div className='py-2 px-3'>
            <Row gapX={16} align='center'>
              <Col>
                <Avatar size='lg' />
              </Col>

              <Col>
                <div className='font-medium text-sm'>Employee name</div>
                <div className='text-sm text-slate-500'>Employee position</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div>
        <div className='h-10 w-0.5 mx-auto bg-gray-200'></div>
        <div className='h-0.5 w-56 -ml-[18px] bg-gray-200'></div>
      </div>

      {/* Row */}
      <div>
        <Row>
          <Col>
            {/* Item */}
            <div>
              <div className='h-10 w-0.5 mx-auto bg-gray-200'></div>

              <div className='bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
                <div className='px-3 py-2 border-b border-gray-200 font-medium'>
                  Project Manager
                </div>

                <div className='py-2 px-3'>
                  <Row gapX={16} align='center'>
                    <Col>
                      <Avatar size='lg' />
                    </Col>

                    <Col>
                      <div className='text-sm text-slate-500'>4 Employees</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            {/* Item */}
            <div>
              <div className='h-10 w-0.5 mx-auto bg-gray-200'></div>

              <div className='bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
                <div className='px-3 py-2 border-b border-gray-200 font-medium'>
                  Finance
                </div>

                <div className='py-2 px-3'>
                  <Row gapX={16} align='center'>
                    <Col>
                      <Avatar size='lg' />
                    </Col>

                    <Col>
                      <div className='font-medium text-sm'>Employee name</div>
                      <div className='text-sm text-slate-500'>Employee position</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default EmployeesOrg;
