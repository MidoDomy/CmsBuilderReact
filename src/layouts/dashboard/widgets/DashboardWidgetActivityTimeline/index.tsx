import React from 'react';

import { FiFile } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Image from 'components/Image';

const DashboardWidgetActivityTimeline: React.FC = () => {
  return (
    <div className='h-full flex flex-col bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
      <div className='pt-6 pb-3 px-6'>
        <h5 className='font-medium text-lg'>Recent activity</h5>
      </div>
      
      {/* Activities */}
      <div className='flex-1 overflow-auto pt-3 pb-6 px-6'>
        {/* Item */}
        <div>
          <Row gapX={16}>
            <Col>
              <div className='flex flex-col items-center h-full'>
                <div className='p-2.5 bg-sky-100 rounded-full'>
                  <FiFile size={20} />
                </div>

                <div className='flex-1 border-l'></div>
              </div>
            </Col>

            <Col fill>
              <div className='pb-6 text-sm'>
                <div className='text-slate-500'>2 hrs ago</div>

                <div className='mb-3'>
                  You&apos;ve uploaded <strong>documentation.pdf</strong> to the <strong>Webpixels</strong> project
                </div>

                <div>
                  <div className="inline-block py-1.5 px-3 border border-dashed rounded-3xl font-medium text-slate-500">
                    documentation.pdf
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Item */}
        <div>
          <Row gapX={16}>
            <Col>
              <div className='flex flex-col items-center h-full'>
                <div className='p-2.5 bg-sky-100 rounded-full'>
                  <FiFile size={20} />
                </div>

                <div className='flex-1 border-l'></div>
              </div>
            </Col>

            <Col fill>
              <div className='pb-4 text-sm'>
                <div className='text-slate-500'>4 hrs ago</div>

                <div className='mb-3'>
                  <strong>Mike</strong> added a new comment to your task:
                </div>

                <div className='text-slate-500'>
                  Lorem ipsum dolor sit amet consectetur. Error nam molestiae quibusdam vitae eius incidunt voluptas ducimus dolores.
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Item */}
        <div>
          <Row gapX={16}>
            <Col>
              <div className='flex flex-col items-center h-full'>
                <div className='p-2.5 bg-sky-100 rounded-full'>
                  <FiFile size={20} />
                </div>

                <div className='flex-1 border-l'></div>
              </div>
            </Col>

            <Col fill>
              <div className='pb-4 text-sm'>
                <div className='text-slate-500'>4 hrs ago</div>

                <div className='mb-3'>
                  Heather added <strong>4 images</strong> to the <strong>Team</strong> album:
                </div>

                <div>
                  <Row gapX={10}>
                    <Col span={2}>
                      <Image className='rounded-md' alt="" />
                    </Col>

                    <Col span={2}>
                      <Image className='rounded-md' alt="" />
                    </Col>

                    <Col span={2}>
                      <Image className='rounded-md' alt="" />
                    </Col>

                    <Col span={2}>
                      <Image className='rounded-md' alt="" />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className='flex justify-center pt-3'>
          <Button variant='link'>
            Load more
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DashboardWidgetActivityTimeline;
