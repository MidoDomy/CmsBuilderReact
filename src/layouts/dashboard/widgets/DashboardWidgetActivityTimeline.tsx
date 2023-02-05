import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';
import Button from 'components/Button';

const DashboardWidgetActivityTimeline: React.FC = () => {
  return (
    <div className='h-full flex flex-col bg-white border border-gray-200 rounded-lg hover:shadow'>
      <div className='pt-6 pb-3 px-6'>
        <Row justify='between'>
          <Col>
            <h5 className='font-medium text-lg'>Recent activity</h5>
          </Col>

          <Col>
            <Button
              variant='link'
            >
              See all
            </Button>
          </Col>
        </Row>
      </div>
      
      {/* Activities */}
      <div className='flex-1 overflow-auto pt-3 pb-6 px-6'>
        {/* Item */}
        <div>
          <Row gapX={16}>
            <Col>
              <div className='flex flex-col items-center h-full'>
                <div className='p-2.5 bg-sky-100 rounded-full'>
                  <Icon name='file' size={20} />
                </div>

                <div className='flex-1 border-l'></div>
              </div>
            </Col>

            <Col fill>
              <div className='pb-6 text-sm'>
                <div className='text-slate-500'>2 hrs ago</div>

                <div className='mb-3'>
                  You've uploaded <strong>documentation.pdf</strong> to the <strong>Webpixels</strong> project
                </div>

                <div>
                  <div className="inline-block py-2 px-3 border border-dashed rounded-3xl font-medium text-slate-500">
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
                  <Icon name='file' size={20} />
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
                  <Icon name='file' size={20} />
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
                      <img className='rounded-lg' src='https://picsum.photos/200' alt="" />
                    </Col>

                    <Col span={2}>
                      <img className='rounded-lg' src='https://picsum.photos/200' alt="" />
                    </Col>

                    <Col span={2}>
                      <img className='rounded-lg' src='https://picsum.photos/200' alt="" />
                    </Col>

                    <Col span={2}>
                      <img className='rounded-lg' src='https://picsum.photos/200' alt="" />
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
